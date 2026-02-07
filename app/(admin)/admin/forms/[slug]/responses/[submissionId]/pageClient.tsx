"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

// type Props = {
//   submission: any;
//   form: any;
// };

type Submission = {
  _id: string;
  responses: Record<string, any>;
  status?: "pending" | "approved" | "rejected";
  createdAt: string;
};

type Props = {
  submission: Submission;
  form: any;
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
  return (
    <div className="max-w-4xl mx-auto px-6 py-10 space-y-8">
      {/* BACK */}
      <Link
        href={`/admin/forms/${form.slug}`}
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

          <Badge variant="secondary">{submission.status ?? "pending"}</Badge>
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
      <div className="sticky bottom-0 bg-background pt-8">
        <div className="flex justify-end gap-3 border-t pt-6">
          <Button variant="destructive">Reject</Button>

          <Button>Approve</Button>
        </div>
      </div>
    </div>
  );
}
