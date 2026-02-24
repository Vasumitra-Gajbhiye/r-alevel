"use client";

import ResourceTable from "@/components/resources/ResourceTable";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { useEffect, useState } from "react";
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
  useEffect(() => {
    console.log("TABLE RESOURCES:", resources);
  }, [resources]);
  const onSubmit = async () => {
    try {
      if (!resources.length) {
        toast.error("Please add at least one resource");
        return;
      }

      if (!fullName || !email || !discordOrRedditId) {
        toast.error("Please fill contributor information");
        return;
      }

      setIsSubmitting(true);

      const formData = new FormData();

      // =============================
      // Contributor
      // =============================
      formData.append("fullName", fullName);
      formData.append("email", email);
      formData.append("discordOrRedditId", discordOrRedditId);

      // =============================
      // Resources (MULTI SUPPORT)
      // =============================
      console.log("RESOURCES STATE:", resources);
      let validIndex = 0;

      for (const resource of resources) {
        if (!resource.title) continue;

        formData.append(`resources[${validIndex}][title]`, resource.title);

        formData.append(
          `resources[${validIndex}][description]`,
          resource.description || ""
        );

        const resourceType =
          resource.files.length && resource.links.length
            ? "Files + Links"
            : resource.files.length
            ? "Files"
            : "Links";

        formData.append(`resources[${validIndex}][resourceType]`, resourceType);

        resource.links.forEach((link) => {
          if (link) {
            formData.append(`resources[${validIndex}][links][]`, link);
          }
        });

        for (const file of resource.files) {
          formData.append(`resources[${validIndex}][files][]`, file);
        }

        validIndex++;
      }

      console.log(Array.from(formData.entries()));

      const res = await fetch("/api/resources/submit", {
        method: "POST",
        body: formData,
      });

      const json = await res.json();

      if (!res.ok) {
        toast.error(json.error || "Submission failed");
        setIsSubmitting(false);
        return;
      }

      toast.success("Resources submitted successfully");

      // Optional reset
      setResources([
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

      setIsSubmitting(false);
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong");
      setIsSubmitting(false);
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
                <Input
                  placeholder="First and last name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label>
                  Email Address <span className="text-red-500">*</span>
                </Label>
                <Input
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label>
                  Discord / Reddit ID <span className="text-red-500">*</span>
                </Label>
                <Input
                  placeholder="Discord preferred"
                  value={discordOrRedditId}
                  onChange={(e) => setDiscordOrRedditId(e.target.value)}
                />
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
