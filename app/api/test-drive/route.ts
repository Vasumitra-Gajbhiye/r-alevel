import { drive } from "@/lib/googleDrive";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const res = await drive.files.list({
      q: `'${process.env.DRIVE_ROOT_FOLDER_ID}' in parents`,
      fields: "files(id, name)",
    });

    return NextResponse.json({
      success: true,
      files: res.data.files,
    });
  } catch (error: any) {
    console.error("Drive test failed:", error);

    return NextResponse.json(
      {
        success: false,
        error: error.message,
      },
      { status: 500 }
    );
  }
}
