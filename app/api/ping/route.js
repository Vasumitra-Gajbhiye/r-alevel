import mongoose from "mongoose";
import connectDB from "@/libs/mongodb";

export async function GET() {
  try {
    await connectDB();
    return Response.json({ status: "connected" });
  } catch (err) {
    return Response.json({ error: err.message }, { status: 500 });
  }
}