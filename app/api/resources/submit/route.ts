// import { createDriveFolder, uploadFileToDrive } from "@/lib/driveUpload";
// import connectDB from "@/libs/mongodb";
// import ResourceSubmission from "@/models/ResourceSubmission";
// import { NextResponse } from "next/server";

// export const runtime = "nodejs"; // IMPORTANT for buffer + streams

// export async function POST(req: Request) {
//   console.log("hit api");
//   try {
//     await connectDB();

//     const formData = await req.formData();

//     // =============================
//     // 1️⃣ Extract metadata fields
//     // =============================
//     const fullName = formData.get("fullName")?.toString();
//     const email = formData.get("email")?.toString();
//     const discordOrRedditId = formData.get("discordOrRedditId")?.toString();

//     const board = formData.get("board")?.toString();
//     const subject = formData.get("subject")?.toString();
//     const topic = formData.get("topic")?.toString();

//     const resourceTitle = formData.get("resourceTitle")?.toString();
//     const description = formData.get("description")?.toString();
//     const resourceType = formData.get("resourceType")?.toString();

//     const rawLinks = formData.getAll("links");
//     const links = rawLinks.length ? rawLinks.map((l) => l.toString()) : [];
//     if (!fullName || !email || !resourceTitle || !resourceType) {
//       return NextResponse.json(
//         { error: "Missing required fields" },
//         { status: 400 }
//       );
//     }

//     // =============================
//     // 2️⃣ Create DB record first
//     // =============================
//     const submission = await ResourceSubmission.create({
//       contributor: {
//         fullName,
//         email,
//         discordOrRedditId,
//       },
//       academic: {
//         board,
//         subject,
//         topic,
//       },
//       resource: {
//         title: resourceTitle,
//         description,
//         resourceType, // ✅ REQUIRED FIELD
//         links,
//       },
//       files: [],
//       status: "pending",
//       metadata: {
//         ip: req.headers.get("x-forwarded-for"),
//         userAgent: req.headers.get("user-agent"),
//       },
//     });

//     // =============================
//     // 3️⃣ Create Drive folder
//     // =============================
//     const folderName = `${submission._id} - ${resourceTitle}`;
//     const driveFolderId = await createDriveFolder(
//       folderName,
//       process.env.DRIVE_ROOT_FOLDER_ID!
//     );

//     // =============================
//     // 4️⃣ Upload files (if any)
//     // =============================
//     const files = formData
//       .getAll("files")
//       .filter((f): f is File => f instanceof File);
//     for (const file of files) {
//       if (!(file instanceof File)) continue;

//       const buffer = Buffer.from(await file.arrayBuffer());

//       const uploaded = await uploadFileToDrive(
//         buffer,
//         file.name,
//         file.type,
//         driveFolderId
//       );

//       submission.files.push({
//         originalName: file.name,
//         size: file.size,
//         mimeType: file.type,

//         // which form field this came from
//         fieldId: "files",

//         // Drive metadata
//         driveFileId: uploaded.id,
//         driveFolderId: driveFolderId,
//         viewLink: uploaded.webViewLink,
//       });
//     }

//     submission.driveFolderId = driveFolderId;
//     await submission.save();

//     // =============================
//     // 5️⃣ Success
//     // =============================
//     return NextResponse.json({
//       success: true,
//       submissionId: submission._id,
//     });
//   } catch (error: any) {
//     console.error("RESOURCE SUBMIT ERROR:", error);
//     return NextResponse.json(
//       { error: "Failed to submit resource" },
//       { status: 500 }
//     );
//   }
// }

// import { createDriveFolder, uploadFileToDrive } from "@/lib/driveUpload";
// import connectDB from "@/libs/mongodb";
// import ResourceSubmission from "@/models/ResourceSubmission";
// import mongoose from "mongoose";
// import { NextResponse } from "next/server";

// export const runtime = "nodejs";

// export async function POST(req: Request) {
//   try {
//     await connectDB();
//     const formData = await req.formData();

//     // =============================
//     // 1️⃣ Contributor info
//     // =============================
//     const fullName = formData.get("fullName")?.toString();
//     const email = formData.get("email")?.toString();
//     const discordOrRedditId = formData.get("discordOrRedditId")?.toString();
//     console.log(formData);
//     if (!fullName || !email || !discordOrRedditId) {
//       return NextResponse.json(
//         { error: "Missing contributor info" },
//         { status: 400 }
//       );
//     }

//     // =============================
//     // 2️⃣ Parse resources dynamically
//     // =============================
//     const title = formData.get("resourceTitle")?.toString();
//     const description = formData.get("description")?.toString() || "";
//     const resourceType = formData.get("resourceType")?.toString();

//     const links = formData.getAll("links").map((l) => l.toString());
//     const files = formData
//       .getAll("files")
//       .filter((f): f is File => f instanceof File);

//     if (!title || !resourceType) {
//       return NextResponse.json(
//         { error: "Missing resource data" },
//         { status: 400 }
//       );
//     }

//     const resources = [{ title, description, resourceType, links, files }];

//     if (!resources.length) {
//       return NextResponse.json(
//         { error: "No resources submitted" },
//         { status: 400 }
//       );
//     }

//     // 3️⃣ Generate ID first
//     const submissionId = new mongoose.Types.ObjectId();

//     // 4️⃣ Create Drive folder FIRST
//     const submissionFolderId = await createDriveFolder(
//       `submission_${submissionId}`,
//       process.env.DRIVE_ROOT_FOLDER_ID!
//     );

//     // 5️⃣ Now create DB submission WITH driveFolderId
//     const submission = await ResourceSubmission.create({
//       _id: submissionId,
//       contributor: {
//         fullName,
//         email,
//         discordOrRedditId,
//       },
//       resources: [],
//       driveFolderId: submissionFolderId, // ✅ now included
//       status: "pending",
//       metadata: {
//         ip: req.headers.get("x-forwarded-for"),
//         userAgent: req.headers.get("user-agent"),
//       },
//     });

//     // =============================
//     // 5️⃣ Handle each resource
//     // =============================
//     for (let i = 0; i < resources.length; i++) {
//       const res = resources[i];

//       const resourceFolderId = await createDriveFolder(
//         `resource_${i + 1}_${res.title}`,
//         submissionFolderId
//       );

//       const uploadedFiles = [];

//       for (const file of res.files) {
//         const buffer = Buffer.from(await file.arrayBuffer());

//         const uploaded = await uploadFileToDrive(
//           buffer,
//           file.name,
//           file.type,
//           resourceFolderId
//         );
//         if (!uploaded.webViewLink) {
//           throw new Error("Drive upload missing webViewLink");
//         }

//         uploadedFiles.push({
//           fieldId: "files",
//           originalName: file.name,
//           size: file.size,
//           mimeType: file.type,
//           driveFileId: uploaded.id,
//           driveFolderId: resourceFolderId,
//           viewLink: uploaded.webViewLink,
//         });
//       }

//       submission.resources.push({
//         title: res.title,
//         description: res.description,
//         resourceType: res.resourceType,
//         links: res.links,
//         files: uploadedFiles,
//         driveFolderId: resourceFolderId,
//       });
//     }

//     submission.driveFolderId = submissionFolderId;
//     await submission.save();

//     // =============================
//     // 6️⃣ Done
//     // =============================
//     return NextResponse.json({
//       success: true,
//       submissionId: submission._id,
//     });
//   } catch (error) {
//     console.error("RESOURCE SUBMIT ERROR:", error);
//     return NextResponse.json(
//       { error: "Failed to submit resources" },
//       { status: 500 }
//     );
//   }
// }

// import { uploadFileToR2 } from "@/lib/r2Upload";
// import connectDB from "@/libs/mongodb";
// import Contributor from "@/models/Contributor";
// import ResourceSubmission from "@/models/ResourceSubmission";
// import crypto from "crypto";
// import mongoose from "mongoose";
// import { NextResponse } from "next/server";
// export const runtime = "nodejs";

// export async function POST(req: Request) {
//   try {
//     await connectDB();
//     const formData = await req.formData();

//     // =============================
//     // 1️⃣ Contributor info
//     // =============================
//     const fullName = formData.get("fullName")?.toString();
//     const email = formData.get("email")?.toString();
//     const discordOrRedditId = formData.get("discordOrRedditId")?.toString();

//     if (!fullName || !email || !discordOrRedditId) {
//       return NextResponse.json(
//         { error: "Missing contributor info" },
//         { status: 400 }
//       );
//     }
//     console.log(formData);
//     // =============================
//     // 2️⃣ Parse resource (single resource mode)
//     // =============================
//     const title = formData.get("resourceTitle")?.toString();
//     const description = formData.get("description")?.toString() || "";
//     const resourceType = formData.get("resourceType")?.toString();

//     const links = formData.getAll("links").map((l) => l.toString());
//     const files = formData
//       .getAll("files")
//       .filter((f): f is File => f instanceof File);

//     if (!title || !resourceType) {
//       return NextResponse.json(
//         { error: "Missing resource data" },
//         { status: 400 }
//       );
//     }

//     const resources = [{ title, description, resourceType, links, files }];

//     if (!resources.length) {
//       return NextResponse.json(
//         { error: "No resources submitted" },
//         { status: 400 }
//       );
//     }

//     // =============================
//     // 3️⃣ Generate submission ID first
//     // =============================
//     const submissionId = new mongoose.Types.ObjectId();

//     // =============================
//     // 4️⃣ Find or Create Contributor
//     // =============================

//     let contributor = await Contributor.findOne({ email });

//     if (!contributor) {
//       contributor = await Contributor.create({
//         fullName,
//         email,
//         discordOrRedditId,
//         totalSubmissions: 0,
//       });
//     } else {
//       // Optional: update name or discord if changed
//       contributor.fullName = fullName;
//       contributor.discordOrRedditId = discordOrRedditId;
//       await contributor.save();
//     }

//     // =============================
//     // 5️⃣ Create submission linked to contributor
//     // =============================

//     const submission = await ResourceSubmission.create({
//       _id: submissionId,
//       contributorId: contributor._id,
//       resources: [],
//       status: "pending",
//       metadata: {
//         ip: req.headers.get("x-forwarded-for"),
//         userAgent: req.headers.get("user-agent"),
//       },
//     });

//     // increment submission count
//     contributor.totalSubmissions += 1;
//     await contributor.save();

//     // =============================
//     // 5️⃣ Upload files to R2
//     // =============================
//     for (let i = 0; i < resources.length; i++) {
//       const res = resources[i];

//       const uploadedFiles = [];

//       for (const file of res.files) {
//         const buffer = Buffer.from(await file.arrayBuffer());

//         const ext = file.name.split(".").pop();
//         const safeName = crypto.randomUUID();

//         const key = `submissions/${submissionId}/resource_${
//           i + 1
//         }/${safeName}.${ext}`;

//         const uploaded = await uploadFileToR2(buffer, key, file.type);

//         uploadedFiles.push({
//           fieldId: "files",
//           originalName: file.name,
//           size: file.size,
//           mimeType: file.type,
//           r2Key: key,
//           url: uploaded.url,
//         });
//       }

//       submission.resources.push({
//         title: res.title,
//         description: res.description,
//         resourceType: res.resourceType,
//         links: res.links,
//         files: uploadedFiles,
//       });
//     }

//     await submission.save();

//     // =============================
//     // 6️⃣ Done
//     // =============================
//     return NextResponse.json({
//       success: true,
//       submissionId: submission._id,
//     });
//   } catch (error) {
//     console.error("RESOURCE SUBMIT ERROR:", error);
//     return NextResponse.json(
//       { error: "Failed to submit resources" },
//       { status: 500 }
//     );
//   }
// }

import { uploadFileToR2 } from "@/lib/r2Upload";
import connectDB from "@/libs/mongodb";
import Contributor from "@/models/Contributor";
import ResourceSubmission from "@/models/ResourceSubmission";
import crypto from "crypto";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    await connectDB();
    const formData = await req.formData();
    // console.log(formData);
    // =============================
    // 1️⃣ Contributor info
    // =============================
    const fullName = formData.get("fullName")?.toString();
    const email = formData.get("email")?.toString();
    const discordOrRedditId = formData.get("discordOrRedditId")?.toString();

    if (!fullName || !email || !discordOrRedditId) {
      return NextResponse.json(
        { error: "Missing contributor info" },
        { status: 400 }
      );
    }

    // =============================
    // 2️⃣ Parse resources dynamically
    // =============================
    const resources: {
      title: string;
      description: string;
      resourceType: string;
      links: string[];
      files: File[];
    }[] = [];

    let index = 0;

    while (formData.get(`resources[${index}][title]`)) {
      const title = formData.get(`resources[${index}][title]`)!.toString();

      const description =
        formData.get(`resources[${index}][description]`)?.toString() || "";

      const resourceType = formData
        .get(`resources[${index}][resourceType]`)
        ?.toString();

      const links = formData
        .getAll(`resources[${index}][links][]`)
        .map((l) => l.toString());

      const files = formData
        .getAll(`resources[${index}][files][]`)
        .filter((f): f is File => f instanceof File);

      if (!resourceType) {
        return NextResponse.json(
          {
            error: `Missing resourceType for resource ${index + 1}`,
          },
          { status: 400 }
        );
      }

      resources.push({
        title,
        description,
        resourceType,
        links,
        files,
      });

      index++;
    }

    if (!resources.length) {
      return NextResponse.json(
        { error: "No resources submitted" },
        { status: 400 }
      );
    }

    // =============================
    // 3️⃣ Generate submission ID
    // =============================
    const submissionId = new mongoose.Types.ObjectId();

    // =============================
    // 4️⃣ Find or Create Contributor
    // =============================
    let contributor = await Contributor.findOne({ email });

    if (!contributor) {
      contributor = await Contributor.create({
        fullName,
        email,
        discordOrRedditId,
        totalSubmissions: 0,
      });
    } else {
      contributor.fullName = fullName;
      contributor.discordOrRedditId = discordOrRedditId;
      await contributor.save();
    }

    // =============================
    // 5️⃣ Create submission
    // =============================
    const submission = await ResourceSubmission.create({
      _id: submissionId,
      contributorId: contributor._id,
      resources: [],
      status: "pending",
      metadata: {
        ip: req.headers.get("x-forwarded-for"),
        userAgent: req.headers.get("user-agent"),
      },
    });

    contributor.totalSubmissions += 1;
    await contributor.save();

    // =============================
    // 6️⃣ Upload files per resource
    // =============================
    for (let i = 0; i < resources.length; i++) {
      const res = resources[i];
      const uploadedFiles = [];

      for (const file of res.files) {
        const buffer = Buffer.from(await file.arrayBuffer());

        const ext = file.name.split(".").pop();
        const safeName = crypto.randomUUID();

        const key = `submissions/${submissionId}/resource_${
          i + 1
        }/${safeName}.${ext}`;

        const uploaded = await uploadFileToR2(buffer, key, file.type);

        uploadedFiles.push({
          fieldId: "files",
          originalName: file.name,
          size: file.size,
          mimeType: file.type,
          r2Key: key,
          url: uploaded.url,
        });
      }

      submission.resources.push({
        title: res.title,
        description: res.description,
        resourceType: res.resourceType,
        links: res.links,
        files: uploadedFiles,
      });
    }

    await submission.save();

    // =============================
    // 7️⃣ Done
    // =============================
    return NextResponse.json({
      success: true,
      submissionId: submission._id,
    });
  } catch (error) {
    console.error("RESOURCE SUBMIT ERROR:", error);
    return NextResponse.json(
      { error: "Failed to submit resources" },
      { status: 500 }
    );
  }
}
