import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/libs/mongodb";
import UserData from "@/models/userData";

export async function POST(req) {
  try {
    await connectDB();
    const data = await req.json();
    const { email, subjectsAS, subjectsA2, examSession, receiveEmails } = data;

    if (!email) {
      return NextResponse.json({ success: false, error: "Missing email" }, { status: 400 });
    }

    const updated = await UserData.findOneAndUpdate(
      { email },
      { subjectsAS, subjectsA2, examSession, receiveEmails },
      { new: true }
    );

    if (!updated) {
      return NextResponse.json({ success: false, error: "User not found" }, { status: 404 });
    }

    console.log("✅ User updated:", email);
    return NextResponse.json({ success: true, updated });
  } catch (err) {
    console.error("❌ Error updating user:", err);
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}