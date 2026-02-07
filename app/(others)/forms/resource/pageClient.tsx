"use client";

import ResourceTable from "@/components/resources/ResourceTable";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";
import { toast } from "sonner";
type Resource = {
  id: string;
  title: string;
  description: string;
  levels: string[];
  boards: string[];
  madeByMe: boolean;
  links: string[];
  files: File[];
};

export default function ResourceFormPageClient() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [discordOrRedditId, setDiscordOrRedditId] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [resources, setResources] = useState<Resource[]>([
    {
      id: crypto.randomUUID(),
      title: "",
      description: "",
      levels: [],
      boards: [],
      madeByMe: false,
      links: [],
      files: [],
    },
  ]);

  const onSubmit = async () => {
    console.log("submit called");
    try {
      if (!resources.length) {
        toast.error("Please add a resource");
        return;
      }

      const res0 = resources[0]; // 🚨 single-resource backend

      if (!res0.title) {
        toast.error("Resource title is required");
        return;
      }

      const formData = new FormData();

      // Contributor
      formData.append("fullName", fullName);
      formData.append("email", email);
      if (discordOrRedditId)
        formData.append("discordOrRedditId", discordOrRedditId);

      // Academic (derive from resource)
      formData.append("board", res0.boards.join(", "));
      formData.append("subject", ""); // optional for now
      formData.append("topic", "");

      // Resource
      formData.append("resourceTitle", res0.title);
      formData.append("description", res0.description || "");
      formData.append(
        "resourceType",
        res0.files.length && res0.links.length
          ? "Files + Links"
          : res0.files.length
          ? "Files"
          : "Links"
      );

      // Links
      res0.links.forEach((link) => {
        formData.append("links", link);
      });

      // Files
      res0.files.forEach((file) => {
        formData.append("files", file);
      });

      const res = await fetch("/api/resources/submit", {
        method: "POST",
        body: formData, // ❗ no headers
      });

      const json = await res.json();

      if (!res.ok) {
        toast.error(json.error || "Submission failed");
        return;
      }

      toast.success("Resource submitted successfully");
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="mx-auto max-w-5xl px-4 py-16">
      <Card className="overflow-hidden shadow-2xl border-none">
        {/* 🔶 TOP BANNER */}
        <div className="h-36 bg-gradient-to-r from-pink-500 to-rose-600" />

        <CardContent className="px-10 py-8 space-y-10">
          {/* 🔷 HEADER */}
          <div className="space-y-3">
            <h1 className="text-3xl font-semibold tracking-tight">
              Resource Submission
            </h1>

            <div className="rounded-lg border bg-muted/40 px-5 py-4 text-sm text-muted-foreground space-y-3">
              <p>
                Use this form to submit study resources such as notes, PDFs,
                slides, links, or other helpful materials for A-level students.
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Only submit content you own or have permission to share</li>
                <li>Low-quality or spam submissions will be rejected</li>
                <li>Approved contributors may receive certificates</li>
              </ul>
            </div>
          </div>

          <Separator />

          {/* 🧑 CONTRIBUTOR INFORMATION */}
          <section className="space-y-6">
            <div className="space-y-1">
              <h2 className="text-lg font-semibold">Contributor Information</h2>
              <p className="text-sm text-muted-foreground">
                Basic details to identify and credit you.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4">
              <div className="space-y-2">
                <Label>
                  Full Name <span className="text-red-500">*</span>
                </Label>
                <Input placeholder="First and last name" />
              </div>

              <div className="space-y-2">
                <Label>
                  Email Address <span className="text-red-500">*</span>
                </Label>
                <Input type="email" placeholder="you@example.com" />
              </div>

              <div className="space-y-2">
                <Label>
                  Discord / Reddit ID <span className="text-red-500">*</span>
                </Label>
                <Input placeholder="Discord preferred" />
              </div>
            </div>
          </section>

          <Separator />

          {/* 📚 RESOURCE SECTION (placeholder for next step) */}
          <section className="space-y-4">
            <ResourceTable resources={resources} setResources={setResources} />
          </section>

          {/* 🚀 SUBMIT */}
          <div className="pt-6">
            <Button
              size="lg"
              onClick={onSubmit}
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-slate-900 to-slate-800 hover:from-slate-800 hover:to-slate-700"
            >
              Submit Resource
            </Button>

            <p className="mt-3 text-center text-sm text-muted-foreground">
              All submissions are reviewed before publishing.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
