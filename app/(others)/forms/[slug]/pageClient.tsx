"use client";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

type FormField = {
  id: string;
  label: string;
  type: "text" | "email" | "textarea" | "url" | "file";
  required?: boolean;
};

type IntroBlock =
  | {
      type: "paragraph";
      text: string;
    }
  | {
      type: "bullet_list";
      bulletColor: string; // hex from DB
      items: string[];
    };

// const mockForm = {
//   title: "Writer Application",
//   description:
//     "Apply to become a writer for r/alevel. Share your knowledge through clear, accurate, and student-friendly content.",
//   banner: {
//     type: "gradient",
//     value: "from-pink-500 via-rose-500 to-red-500",
//   },
//   fields: [
//     { id: "name", label: "Full Name", type: "text", required: true },
//     { id: "email", label: "Email Address", type: "email", required: true },
//     { id: "discord", label: "Discord Username", type: "text", required: true },
//     {
//       id: "experience",
//       label: "Writing Experience",
//       type: "textarea",
//       required: true,
//     },
//     { id: "sample", label: "Sample Work (Link)", type: "url" },
//   ] as FormField[],
// };

function IntroductionBlocks({ blocks }: { blocks: any[] }) {
  return (
    <div className="space-y-4">
      {blocks.map((block, index) => {
        if (block.type === "paragraph") {
          return (
            <p
              key={index}
              className="text-sm leading-relaxed text-muted-foreground"
            >
              {block.text}
            </p>
          );
        }

        if (block.type === "bullet_list") {
          return (
            <ul key={index} className="space-y-2">
              {block.items.map((item: string, i: number) => (
                <li key={i} className="flex items-start gap-3">
                  <span
                    className="mt-2 h-2.5 w-2.5 rounded-full flex-shrink-0"
                    style={{ backgroundColor: block.bulletColor }}
                  />
                  <span className="text-sm text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          );
        }

        return null;
      })}
    </div>
  );
}

export default function FormPageClient({ form }: { form: any }) {
  const [showConfirmation, setShowConfirmation] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  // const onSubmit = async (data: any) => {
  //   const res = await fetch(`/api/forms/${form.slug}/submit`, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(data),
  //   });

  //   const json = await res.json();

  //   if (!res.ok) {
  //     toast.error(json.error || "Submission failed");
  //     return;
  //   }

  //   setShowConfirmation(true);
  //   reset();
  // };

  const onSubmit = async (data: any) => {
    try {
      let res: Response;

      // 🔹 RESOURCE FORM → multipart + Drive
      if (form.slug === "resource") {
        const formData = new FormData();

        // 🔑 map form fields → API fields
        const keyMap: Record<string, string> = {
          "contributor.fullName": "fullName",
          "contributor.email": "email",
          "contributor.discordOrRedditId": "discordOrRedditId",

          "academic.board": "board",
          "academic.subject": "subject",
          "academic.topic": "topic",

          "resource.resourceTitle": "resourceTitle",
          "resource.description": "description",
          "resource.resourceType": "resourceType", // ✅ ADD THIS

          "resourceContent.links": "links",
        };

        for (const section of form.sections) {
          for (const field of section.fields) {
            const value = data?.[section.id]?.[field.id];
            if (value === undefined || value === null) continue;

            // 📁 FILES (handle BEFORE keyMap)
            if (field.type === "file") {
              if (value instanceof FileList) {
                Array.from(value).forEach((file) => {
                  formData.append("files", file);
                });
              }
              continue; // ⬅️ important
            }

            const flatKey = keyMap[`${section.id}.${field.id}`];
            if (!flatKey) continue;
            else if (Array.isArray(value)) {
              value.forEach((v) => formData.append(flatKey, String(v)));
            } else {
              formData.append(flatKey, String(value));
            }
          }
        }

        // 🔍 DEBUG (remove later)
        // for (const pair of formData.entries()) {
        //   console.log(pair[0], pair[1]);
        // }
        for (const pair of formData.entries()) {
          console.log(pair[0], pair[1]);
        }

        res = await fetch("/api/resources/submit", {
          method: "POST",
          body: formData, // ❗ no headers
        });
      }

      // 🔹 ALL OTHER FORMS → JSON
      else {
        res = await fetch(`/api/forms/${form.slug}/submit`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        });
      }

      const json = await res.json();

      if (!res.ok) {
        toast.error(json.error || "Submission failed");
        return;
      }

      setShowConfirmation(true);
      reset();
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong");
    }
  };

  return (
    <>
      <div className="mx-auto max-w-5xl px-4 py-20">
        <Card className="overflow-hidden border-none shadow-2xl">
          {/* BANNER */}
          {form.banner && (
            <div className="relative h-36 w-full overflow-hidden">
              {form.banner.type === "gradient" ? (
                <div
                  className={`h-full w-full bg-gradient-to-r ${form.banner.value}`}
                />
              ) : (
                <img
                  src={form.banner.value}
                  alt={`${form.title} banner`}
                  className="h-full w-full object-cover"
                />
              )}
            </div>
          )}

          {/* HEADER */}
          <div className="px-10 pt-8 pb-4 space-y-3">
            <h1 className="text-3xl font-semibold tracking-tight">
              {form.title}
            </h1>

            {form.subtitle && (
              <p className="max-w-3xl text-muted-foreground text-base">
                {form.subtitle}
              </p>
            )}
          </div>

          {/* INTRO / RULES */}
          {form.introductionBlocks && (
            <div className="px-10 pb-6">
              <div className="rounded-xl border bg-muted/40 px-6 py-5">
                <IntroductionBlocks blocks={form.introductionBlocks} />
              </div>
            </div>
          )}
          {/* FORM */}
          <CardContent className="px-10 pb-10">
            <form onSubmit={handleSubmit(onSubmit)}>
              {form.sections?.map((section: any) => (
                <div key={section.id} className="space-y-6 mt-12">
                  {/* SECTION HEADER */}
                  <div className="space-y-1">
                    <h2 className="text-lg font-semibold">{section.title}</h2>

                    {section.subtitle && (
                      <p className="text-sm text-muted-foreground">
                        {section.subtitle}
                      </p>
                    )}
                  </div>

                  {/* SECTION FIELDS */}
                  <div className="space-y-4">
                    {section.fields.map((field: any) => {
                      const inputName = `${section.id}.${field.id}`;
                      return (
                        <div key={field.id} className="space-y-3">
                          <Label htmlFor={inputName}>
                            {field.label}
                            {field.required && (
                              <span className="ml-1 text-red-500">*</span>
                            )}
                          </Label>

                          {field.type === "textarea" ? (
                            <Textarea
                              id={inputName}
                              rows={5}
                              placeholder={field.placeholder}
                              {...register(inputName, {
                                required: field.required,
                              })}
                            />
                          ) : field.type === "select" ? (
                            <select
                              id={inputName}
                              className="w-full rounded-md border bg-background px-3 py-2 text-sm"
                              {...register(inputName, {
                                required: field.required,
                              })}
                            >
                              <option value="">Select an option</option>
                              {field.options.map((opt: string) => (
                                <option key={opt} value={opt}>
                                  {opt}
                                </option>
                              ))}
                            </select>
                          ) : field.type === "file" ? (
                            <Input
                              id={inputName}
                              type="file"
                              multiple={field.multiple}
                              {...register(inputName)}
                            />
                          ) : (
                            <Input
                              id={inputName}
                              type={field.type}
                              placeholder={field.placeholder}
                              {...register(inputName, {
                                required: field.required,
                              })}
                            />
                          )}

                          {errors[inputName] && (
                            <p className="text-sm text-red-500">
                              This field is required
                            </p>
                          )}
                        </div>
                      );
                    })}
                  </div>

                  {/* SECTION DIVIDER */}
                  <div className="pt-6">
                    <div className="h-px bg-border" />
                  </div>
                </div>
              ))}

              {/* SUBMIT FOOTER */}
              <div className="pt-12">
                <div className="rounded-xl border bg-muted/40 px-6 py-6">
                  <div className="flex flex-col items-center gap-4">
                    <Button
                      type="submit"
                      size="lg"
                      disabled={isSubmitting}
                      className="w-full max-w-md text-base font-medium
                   bg-gradient-to-r from-slate-900 to-slate-800
                   hover:from-slate-800 hover:to-slate-700
                   shadow-lg"
                    >
                      {form.ctaText ?? "Submit Application"}
                    </Button>

                    <p className="text-center text-sm text-muted-foreground max-w-md">
                      By submitting this application, you confirm that all
                      information provided is accurate. We'll get back to you
                      soon!
                    </p>
                  </div>
                </div>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>

      {/* CONFIRMATION MODAL */}
      <AlertDialog open={showConfirmation} onOpenChange={setShowConfirmation}>
        <AlertDialogContent className="sm:max-w-md">
          <AlertDialogHeader className="space-y-4">
            {/* ICON */}
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="text-green-600"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>

            <AlertDialogTitle className="text-center text-lg font-semibold">
              Application submitted successfully
            </AlertDialogTitle>

            <AlertDialogDescription asChild>
              <div className="space-y-3 text-center text-sm text-muted-foreground">
                <p>
                  Thank you for applying to{" "}
                  <span className="font-medium text-foreground">r/alevel</span>.
                  Your application has been received and recorded.
                </p>

                <p>
                  Our team will carefully review your submission and contact you
                  within the next few days.
                </p>

                <div className="rounded-md bg-muted px-3 py-2 text-sm">
                  Please watch for emails from
                  <br />
                  <span className="font-medium text-foreground">
                    r.alevelserver@gmail.com
                  </span>
                </div>
              </div>
            </AlertDialogDescription>
          </AlertDialogHeader>

          <AlertDialogFooter className="mt-4">
            <AlertDialogAction className="w-full">Close</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
