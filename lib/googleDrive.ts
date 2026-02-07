// lib/googleDrive.ts
import { google } from "googleapis";

const auth = new google.auth.GoogleAuth({
  credentials: JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT_JSON!),
  scopes: ["https://www.googleapis.com/auth/drive"],
});

export const drive = google.drive({
  version: "v3",
  auth,
});
