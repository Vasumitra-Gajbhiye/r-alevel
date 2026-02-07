// import { v2 as cloudinary } from "cloudinary";
// import "dotenv/config";
// import fs from "fs";
// import path from "path";

// cloudinary.config({
//   cloud_name: process.env.CLOUDINARY_CLOUD_NAME!,
//   api_key: process.env.CLOUDINARY_API_KEY!,
//   api_secret: process.env.CLOUDINARY_API_SECRET!,
// });

// console.log({
//   cloud: process.env.CLOUDINARY_CLOUD_NAME,
//   key: !!process.env.CLOUDINARY_API_KEY,
//   secret: !!process.env.CLOUDINARY_API_SECRET,
// });

// const PUBLIC_DIR = path.join(process.cwd(), "public");

// function uploadDir(dir: string) {
//   const entries = fs.readdirSync(dir, { withFileTypes: true });

//   for (const entry of entries) {
//     const fullPath = path.join(dir, entry.name);
//     const relativePath = path.relative(PUBLIC_DIR, fullPath);

//     if (entry.isDirectory()) {
//       uploadDir(fullPath);
//     } else {
//       const ext = path.extname(entry.name).toLowerCase();
//       const isPdf = ext === ".pdf";

//       cloudinary.uploader.upload(fullPath, {
//         public_id: `ralevel/${relativePath.replace(ext, "")}`,
//         resource_type: isPdf ? "raw" : "image",
//         overwrite: true,
//         use_filename: true,
//         unique_filename: false,
//       });

//       console.log("Uploaded:", relativePath);
//     }
//   }
// }

// uploadDir(PUBLIC_DIR);

// scripts/upload-assets.ts
import { v2 as cloudinary } from "cloudinary";
import "dotenv/config";
import fs from "fs";
import path from "path";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME!,
  api_key: process.env.CLOUDINARY_API_KEY!,
  api_secret: process.env.CLOUDINARY_API_SECRET!,
});

const ASSETS_DIR = path.join(process.cwd(), "assets-local");

// --- safety check ---
if (!fs.existsSync(ASSETS_DIR)) {
  console.error("❌ assets-local folder does not exist");
  process.exit(1);
}

function uploadDir(dir: string) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    const relativePath = path.relative(ASSETS_DIR, fullPath);

    if (entry.isDirectory()) {
      uploadDir(fullPath);
      continue;
    }

    const ext = path.extname(entry.name).toLowerCase();
    const isPdf = ext === ".pdf";

    cloudinary.uploader.upload(fullPath, {
      public_id: `ralevel/${relativePath.replace(ext, "")}`,
      resource_type: isPdf ? "raw" : "image",
      overwrite: true,
      unique_filename: false,
      access_control: [{ access_type: "anonymous" }], // ensure public
    });

    console.log("✅ Uploaded:", relativePath);
  }
}

uploadDir(ASSETS_DIR);

// npx tsx scripts/upload-assets.ts
