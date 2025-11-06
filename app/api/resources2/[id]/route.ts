import { NextResponse } from "next/server";
import dbConnect from "@/libs/mongodb";
import Resources2Data from "@/models/resources2Data";

export async function GET(req: Request, { params }: { params: Promise<{ id: string }> }) {
  await dbConnect();
   const { id } = await params;
  const resData = await Resources2Data.findById(id);

  if (!resData) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  return NextResponse.json(resData);
}
