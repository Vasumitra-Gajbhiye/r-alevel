import mongoose from "mongoose";
import connectDB from "@/libs/mongodb";

export async function GET() {
  try {
    await connectDB();
    return Response.json({ status: "connected" });
  } catch (err) {
    console.error("Healthcheck DB connection failed:", err);
    return Response.json(
      { error: "Service unavailable" },
      { status: 503 }
    );
  }
}