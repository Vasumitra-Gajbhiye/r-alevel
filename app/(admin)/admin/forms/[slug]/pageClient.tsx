"use client";

import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FormDocument } from "@/types/form";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import ResponsesTable from "./ResponsesTable";
import Summary from "./Summary";

type Props = {
  form: FormDocument;
  totalResponses: number;
  submissions: any[];
};

export default function AdminFormPageClient({
  form,
  totalResponses,
  submissions,
}: Props) {
  return (
    <div className="max-w-7xl mx-auto px-6 py-8 space-y-6">
      {/* BACK */}
      <Link
        href="/admin/forms"
        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to forms
      </Link>

      {/* HEADER */}
      <div className="space-y-2">
        <div className="flex items-center gap-3">
          <h1 className="text-2xl font-semibold">{form.title}</h1>
          <Badge variant={form.status === "open" ? "default" : "secondary"}>
            {form.status}
          </Badge>
        </div>

        <p className="text-sm text-muted-foreground">
          /forms/{form.slug} • {totalResponses} responses
        </p>
      </div>

      {/* TABS */}
      <Tabs defaultValue="summary">
        <TabsList className="mb-6">
          <TabsTrigger value="summary">Summary</TabsTrigger>
          <TabsTrigger value="responses">Responses</TabsTrigger>
        </TabsList>

        <TabsContent value="summary">
          <Summary submissions={submissions} />
        </TabsContent>

        <TabsContent value="responses">
          <ResponsesTable formSlug={form.slug} submissions={submissions} />
        </TabsContent>
      </Tabs>
    </div>
  );
}
