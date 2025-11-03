import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/libs/mongodb";
import UserData from "@/models/userData";

export async function POST(req: NextRequest) {
  await connectDB();
  const data = await req.json();
  const { email, subjectsAS, subjectsA2, examSession, receiveEmails } = data;

  const updated = await UserData.findOneAndUpdate(
    { email },
    { subjectsAS, subjectsA2, examSession, receiveEmails },
    { new: true }
  );

  return NextResponse.json({ success: true, updated });
}