// "use client";

// import { Badge } from "@/components/ui/badge";
// import { Button } from "@/components/ui/button";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table";
// import { ChevronRight } from "lucide-react";
// import Link from "next/link";
// import { mockWriterSubmissions } from "./_mockSubmissions";

// function formatDate(date: string) {
//   return new Date(date).toLocaleDateString("en-GB", {
//     day: "2-digit",
//     month: "short",
//     year: "numeric",
//   });
// }

// export default function ResponsesTable({ formSlug }: { formSlug: string }) {
//   return (
//     <div className="space-y-4">
//       {/* HEADER */}
//       <div className="flex items-center justify-between">
//         <h2 className="text-lg font-semibold">
//           Responses ({mockWriterSubmissions.length})
//         </h2>

//         {/* Filters (UI only for now) */}
//         <div className="flex items-center gap-2 text-sm text-muted-foreground">
//           <span className="rounded-md border px-3 py-1">Date</span>
//           <span className="rounded-md border px-3 py-1">Status</span>
//         </div>
//       </div>

//       {/* TABLE */}
//       <div className="rounded-lg border">
//         <Table>
//           <TableHeader>
//             <TableRow>
//               <TableHead>Name</TableHead>
//               <TableHead>Email</TableHead>
//               <TableHead>Level</TableHead>
//               <TableHead>Submitted</TableHead>
//               <TableHead>Status</TableHead>
//               <TableHead />
//             </TableRow>
//           </TableHeader>

//           <TableBody>
//             {mockWriterSubmissions.map((submission) => {
//               const personal = submission.responses["personal-information"];
//               const academic = submission.responses["academic-background"];

//               return (
//                 <TableRow key={submission.id} className="hover:bg-muted/50">
//                   <TableCell className="font-medium">
//                     {personal.fullName}
//                   </TableCell>

//                   <TableCell>{personal.email}</TableCell>

//                   <TableCell>{academic.currentLevel}</TableCell>

//                   <TableCell>{formatDate(submission.submittedAt)}</TableCell>

//                   <TableCell>
//                     <Badge variant="secondary">{submission.status}</Badge>
//                   </TableCell>

//                   {/* ACTION */}
//                   <TableCell className="text-right">
//                     <Link
//                       href={`/admin/forms/${formSlug}/responses/${submission.id}`}
//                     >
//                       <Button variant="ghost" size="sm" className="gap-1">
//                         View
//                         <ChevronRight className="h-4 w-4" />
//                       </Button>
//                     </Link>
//                   </TableCell>
//                 </TableRow>
//               );
//             })}
//           </TableBody>
//         </Table>
//       </div>
//     </div>
//   );
// }

"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

type Submission = {
  _id: string;
  responses: Record<string, any>;
  status?: "pending" | "approved" | "rejected";
  createdAt: string;
};

export default function ResponsesTable({
  formSlug,
  submissions,
}: {
  formSlug: string;
  submissions: Submission[];
}) {
  return (
    <div className="space-y-4">
      {/* HEADER */}
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">
          Responses ({submissions.length})
        </h2>

        {/* Filters (UI only for now) */}
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <span className="rounded-md border px-3 py-1">Date</span>
          <span className="rounded-md border px-3 py-1">Status</span>
        </div>
      </div>

      {/* TABLE */}
      <div className="rounded-lg border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Level</TableHead>
              <TableHead>Submitted</TableHead>
              <TableHead>Status</TableHead>
              <TableHead />
            </TableRow>
          </TableHeader>

          <TableBody>
            {submissions.map((submission) => {
              const personal =
                submission.responses?.["personal-information"] ?? {};
              const academic =
                submission.responses?.["academic-background"] ?? {};

              return (
                <TableRow key={submission._id} className="hover:bg-muted/50">
                  <TableCell className="font-medium">
                    {personal.fullName}
                  </TableCell>

                  <TableCell>{personal.email}</TableCell>

                  <TableCell>{academic.currentLevel}</TableCell>

                  <TableCell>{formatDate(submission.createdAt)}</TableCell>

                  <TableCell>
                    <Badge variant="secondary">
                      {submission.status ?? "pending"}
                    </Badge>
                  </TableCell>

                  {/* ACTION */}
                  <TableCell className="text-right">
                    <Link
                      href={`/admin/forms/${formSlug}/responses/${submission._id}`}
                    >
                      <Button variant="ghost" size="sm" className="gap-1">
                        View
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    </Link>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
