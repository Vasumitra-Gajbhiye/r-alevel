// import { NextRequest, NextResponse } from "next/server";
// import connectDB from "@/libs/mongodb";
// import UserData from "@/models/userData";

// export async function POST(req) {
//   try {
//     await connectDB();
//     const data = await req.json();
//     const { email, subjectsAS, subjectsA2, examSession, receiveEmails } = data;

//     if (!email) {
//       return NextResponse.json({ success: false, error: "Missing email" }, { status: 400 });
//     }

//     const updated = await UserData.findOneAndUpdate(
//       { email },
//       { subjectsAS, subjectsA2, examSession, receiveEmails },
//       { new: true }
//     );

//     if (!updated) {
//       return NextResponse.json({ success: false, error: "User not found" }, { status: 404 });
//     }

//     console.log("✅ User updated:", email);
//     return NextResponse.json({ success: true, updated });
//   } catch (err) {
//     console.error("❌ Error updating user:", err);
//     return NextResponse.json({ success: false, error: err.message }, { status: 500 });
//   }
// }

// app/api/user/update/route.js
// app/api/user/update/route.js
import connectDB from "@/libs/mongodb";
import UserData from "@/models/userData";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    await connectDB();

    const body = await req.json();
    const {
      email,
      name,
      redditUsername,
      discordUsername,
      boards,
      subjectsAS,
      subjectsA2,
      examSession,
      receiveEmails,
    } = body || {};

    if (!email || typeof email !== "string") {
      return NextResponse.json(
        { success: false, error: "Missing or invalid email" },
        { status: 400 }
      );
    }

    // Build update object carefully (only keep fields we expect)
    const update = {};

    if (typeof name === "string") update.name = name;
    if (typeof redditUsername === "string")
      update.redditUsername = redditUsername;
    if (typeof discordUsername === "string")
      update.discordUsername = discordUsername;

    if (Array.isArray(boards)) update.boards = boards;
    if (Array.isArray(subjectsAS)) update.subjectsAS = subjectsAS;
    if (Array.isArray(subjectsA2)) update.subjectsA2 = subjectsA2;
    if (Array.isArray(examSession)) update.examSession = examSession;
    if (typeof receiveEmails === "boolean")
      update.receiveEmails = receiveEmails;

    // findOneAndUpdate and return the new document
    const updated = await UserData.findOneAndUpdate(
      { email },
      { $set: update },
      { new: true, upsert: false } // do not create new user here; handle signup elsewhere
    ).lean();

    if (!updated) {
      return NextResponse.json(
        { success: false, error: "User not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, updated }, { status: 200 });
  } catch (err) {
    console.error("Error updating user:", err);
    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}
