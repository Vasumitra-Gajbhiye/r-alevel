// import { Readable } from "stream";
// import { drive } from "./googleDrive";

// export async function createDriveFolder(name: string, parentId: string) {
//   const res = await drive.files.create({
//     requestBody: {
//       name,
//       mimeType: "application/vnd.google-apps.folder",
//       parents: [parentId],
//     },
//     fields: "id",
//   });

//   return res.data.id!;
// }

// export async function uploadFileToDrive(
//   buffer: Buffer,
//   fileName: string,
//   mimeType: string,
//   parentFolderId: string
// ) {
//   const stream = Readable.from(buffer);

//   const res = await drive.files.create({
//     requestBody: {
//       name: fileName,
//       parents: [parentFolderId],
//     },
//     media: {
//       mimeType,
//       body: stream,
//     },
//     fields: "id, webViewLink",
//   });

//   return res.data;
// }

import { Buffer } from "buffer";
import { google } from "googleapis";
import { Readable } from "stream";

// Initialize OAuth2 client using credentials from environment variables
const auth = new google.auth.OAuth2(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET
);

// Set the refresh token to allow the app to act on your behalf indefinitely
auth.setCredentials({ refresh_token: process.env.GOOGLE_REFRESH_TOKEN });

const drive = google.drive({ version: "v3", auth });

export async function createDriveFolder(name: string, parentId: string) {
  const res = await drive.files.create({
    requestBody: {
      name,
      mimeType: "application/vnd.google-apps.folder",
      parents: [parentId],
    },
    fields: "id",
  });

  return res.data.id!;
}

export async function uploadFileToDrive(
  buffer: Buffer,
  fileName: string,
  mimeType: string,
  parentFolderId: string
) {
  const stream = Readable.from(buffer);

  const res = await drive.files.create({
    requestBody: {
      name: fileName,
      parents: [parentFolderId],
    },
    media: {
      mimeType,
      body: stream,
    },
    fields: "id, webViewLink",
  });

  return res.data;
}
