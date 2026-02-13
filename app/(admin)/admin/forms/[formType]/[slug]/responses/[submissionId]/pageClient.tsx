"use client";

import { ArrowLeft, ThumbsDown, ThumbsUp } from "lucide-react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";

type Props = {
  submission: Submission;
  form: any;
};

type Vote = {
  adminId: string;
  adminName: string;
  vote: 1 | -1;
  votedAt?: string;
};

type Submission = {
  _id: string;
  responses: Record<string, any>;
  createdAt: string;
  votes?: Vote[];
};

function formatDate(date: string) {
  return new Date(date).toLocaleString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

export default function SubmissionPageClient({ submission, form }: Props) {
  const [votes, setVotes] = useState(submission.votes ?? []);
  const [isVoting, setIsVoting] = useState(false);

  const upvotes = votes?.filter((v) => v.vote === 1).length ?? 0;
  const downvotes = votes?.filter((v) => v.vote === -1).length ?? 0;

  const { data: session } = useSession();

  const currentAdminId = session?.user?.email;

  const currentVote = votes.find((v) => v.adminId === currentAdminId)?.vote;

  const netScore = upvotes - downvotes;

  const handleVote = async (vote: 1 | -1) => {
    try {
      setIsVoting(true);

      const res = await fetch("/api/forms/submissions/vote", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          submissionId: submission._id,
          vote,
        }),
      });

      const json = await res.json();

      if (!res.ok) {
        console.error(json.error);
        return;
      }

      // Update vote state from server response
      setVotes(json.votes);
    } catch (err) {
      console.error(err);
    } finally {
      setIsVoting(false);
    }
  };
  return (
    <div className="max-w-4xl mx-auto px-6 py-10 space-y-8">
      {/* BACK */}
      <Link
        href={`/admin/forms/${form.formType}/${form.slug}`}
        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to responses
      </Link>

      {/* HEADER */}
      <div className="space-y-2">
        <div className="flex items-center gap-3">
          <h1 className="text-2xl font-semibold">
            Response #{submission._id.slice(-6)}
          </h1>
        </div>

        <p className="text-sm text-muted-foreground">
          Submitted on {formatDate(submission.createdAt)}
        </p>
      </div>

      {/* CONTENT */}
      <div className="space-y-10">
        {form.sections.map((section: any) => {
          const sectionResponses = submission.responses?.[section.id];
          if (!sectionResponses) return null;

          return (
            <section key={section.id} className="space-y-4">
              {/* SECTION HEADER */}
              <div>
                <h2 className="text-lg font-semibold">{section.title}</h2>

                {section.subtitle && (
                  <p className="text-sm text-muted-foreground">
                    {section.subtitle}
                  </p>
                )}
              </div>

              {/* FIELDS */}
              <div className="space-y-4">
                {section.fields.map((field: any) => {
                  const value = sectionResponses[field.id];
                  if (value === undefined || value === null) return null;

                  return (
                    <div key={field.id} className="space-y-1">
                      <p className="text-sm font-medium">{field.label}</p>

                      {field.type === "textarea" ? (
                        <div className="rounded-lg border bg-muted/40 px-4 py-3 text-sm leading-relaxed whitespace-pre-wrap">
                          {value}
                        </div>
                      ) : field.type === "url" ? (
                        <a
                          href={value}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-blue-600 underline"
                        >
                          {value}
                        </a>
                      ) : (
                        <p className="text-sm text-muted-foreground">{value}</p>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>
          );
        })}
      </div>

      {/* ACTION BAR */}
      {/* MODERATION PANEL */}
      <div className="sticky bottom-0 z-20 mt-16 bg-gradient-to-t from-background via-background/95 to-transparent pt-10">
        <div className="mx-auto max-w-4xl rounded-2xl border bg-muted/40 backdrop-blur-md px-6 py-6 shadow-xl space-y-6">
          {/* TOP ROW */}
          <div className="flex items-center justify-between">
            {/* LEFT — SCORE + REACTIONS */}
            <div className="flex items-center gap-6">
              {/* Net Score */}
              <div className="flex flex-col items-center">
                <span className="text-xs uppercase tracking-wide text-muted-foreground">
                  Score
                </span>
                <span
                  className={`text-2xl font-semibold ${
                    netScore > 0
                      ? "text-green-600"
                      : netScore < 0
                      ? "text-red-600"
                      : "text-foreground"
                  }`}
                >
                  {netScore}
                </span>
              </div>

              {/* Reaction Pills */}
              <div className="flex items-center gap-3">
                {/* Upvote pill */}
                <button
                  disabled={isVoting}
                  onClick={() => handleVote(1)}
                  className={`
              flex items-center gap-2 rounded-full border px-4 py-2 text-sm transition
              ${
                currentVote === 1
                  ? "bg-green-100 border-green-300 text-green-700"
                  : "hover:bg-green-50"
              }
            `}
                >
                  <ThumbsUp className="h-4 w-4" />
                  <span>{upvotes}</span>
                </button>

                {/* Downvote pill */}
                <button
                  disabled={isVoting}
                  onClick={() => handleVote(-1)}
                  className={`
              flex items-center gap-2 rounded-full border px-4 py-2 text-sm transition
              ${
                currentVote === -1
                  ? "bg-red-100 border-red-300 text-red-700"
                  : "hover:bg-red-50"
              }
            `}
                >
                  <ThumbsDown className="h-4 w-4" />
                  <span>{downvotes}</span>
                </button>
              </div>
            </div>

            {/* RIGHT — ACTION LABEL */}
            <div className="text-xs text-muted-foreground">
              {currentVote === 1 && "You approved this"}
              {currentVote === -1 && "You rejected this"}
              {currentVote === undefined && "Cast your vote"}
            </div>
          </div>

          {/* VOTERS LIST (Facebook-style) */}
          {votes?.length > 0 && (
            <div className="border-t pt-4 space-y-3">
              <div className="text-xs uppercase tracking-wide text-muted-foreground">
                Moderation Activity
              </div>

              <div className="space-y-2">
                {votes.map((vote: any) => (
                  <div
                    key={vote.adminId}
                    className="flex items-center justify-between text-sm"
                  >
                    <div className="flex items-center gap-3">
                      <div className="h-7 w-7 rounded-full bg-muted flex items-center justify-center text-xs font-medium">
                        {vote.adminName?.charAt(0).toUpperCase()}
                      </div>

                      <span>{vote.adminName}</span>
                    </div>

                    <div
                      className={`flex items-center gap-1 ${
                        vote.vote === 1 ? "text-green-600" : "text-red-600"
                      }`}
                    >
                      {vote.vote === 1 ? (
                        <>
                          <ThumbsUp className="h-4 w-4" />
                          <span className="text-xs">Approved</span>
                        </>
                      ) : (
                        <>
                          <ThumbsDown className="h-4 w-4" />
                          <span className="text-xs">Rejected</span>
                        </>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
