// import { notFound } from "next/navigation";
// import connectDB from "@/libs/mongodb";
// import SubjectGuide, { SubjectGuideType } from "@/models/subjectGuide";
// import ContentsClient from "./ContentsClient";

// type Params = { id: string };

// export default async function SubjectPage({ params }: { params: Params }) {
//   const subjectName = params.id;

//   await connectDB();

//   const subject = (await SubjectGuide.findOne({
//     subjectName: new RegExp(`^${subjectName}$`, "i"),
//   }).lean()) as SubjectGuideType | null; // 👈 this is the key

//   if (!subject) {
//     notFound();
//   }

//   return (
//     <div className="px-6 py-10 max-w-7xl mx-auto">
//       <div className="mb-8">
//         <nav className="text-sm text-gray-600 mb-3">
//           <a className="hover:underline" href="/">Home</a>
//           <span className="mx-2">/</span>
//           <a className="hover:underline" href="/subject_guide">Subject Guide</a>
//           <span className="mx-2">/</span>
//           <span className="font-medium capitalize">{subject.subjectName}</span>
//         </nav>

//         <h1 className="text-4xl font-bold mb-2 capitalize">
//           {subject.subjectName}{" "}
//           <span className="font-normal">Revision Notes</span>
//         </h1>

//         {subject.examCode && (
//           <div className="inline-block mt-2 px-3 py-1 border rounded-md text-sm bg-white shadow-sm">
//             Exam code:{" "}
//             <span className="font-medium ml-2">{subject.examCode}</span>
//           </div>
//         )}
//       </div>

//       <ContentsClient subject={subject} />
//     </div>
//   );
// }
import fs from "fs";
import { notFound } from "next/navigation";
import path from "path";
import ContentsClient from "./ContentsClient";

type Params = { id: string };

export default async function SubjectPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { id } = await params;
  const subjectName = id.toLowerCase();

  // Construct path to subject.json
  const filePath = path.join(
    process.cwd(),
    "app",
    "(others)",
    "subject_guide",
    subjectName,
    "subject.json"
  );

  // Check if the file exists
  if (!fs.existsSync(filePath)) {
    notFound();
  }

  // Read and parse JSON
  const subjectData = JSON.parse(fs.readFileSync(filePath, "utf-8"));

  if (!subjectData) {
    notFound();
  }

  return (
    <div className="px-6 py-10 max-w-7xl mx-auto">
      {/* Breadcrumb */}
      <div className="mb-8">
        <nav className="text-sm text-gray-600 mb-3">
          <a className="hover:underline" href="/">
            Home
          </a>
          <span className="mx-2">/</span>
          <a className="hover:underline" href="/subject_guide">
            Subject Guide
          </a>
          <span className="mx-2">/</span>
          <span className="font-medium capitalize">
            {subjectData.subjectName}
          </span>
        </nav>

        {/* Heading */}
        <h1 className="text-4xl font-bold mb-2 capitalize">
          {subjectData.subjectName}{" "}
          <span className="font-normal">Revision Notes</span>
        </h1>

        {/* Exam code */}
        {subjectData.examCode && (
          <div className="inline-block mt-2 px-3 py-1 border rounded-md text-sm bg-white shadow-sm">
            Exam code:
            <span className="font-medium ml-2">{subjectData.examCode}</span>
          </div>
        )}
      </div>

      {/* Chapters, topics, and subtopics */}
      <ContentsClient subject={subjectData} />
    </div>
  );
}
