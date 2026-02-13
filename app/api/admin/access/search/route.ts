import { requireRoles } from "@/lib/requireRoles";
import { authOptions } from "@/libs/auth";
import connectDB from "@/libs/mongodb";
import UserData from "@/models/userData";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

/* ---------------- SEARCH USERS BY EMAIL ---------------- */
export async function GET(req: Request) {
  await connectDB();
  const session = await getServerSession(authOptions);

  try {
    requireRoles(session, ["owner", "admin"]);

    const { searchParams } = new URL(req.url);
    const q = searchParams.get("q")?.trim();

    if (!q || q.length < 2) {
      return NextResponse.json([]);
    }

    const users = await UserData.find({
      email: { $regex: `^${q}`, $options: "i" },
    })
      .limit(5)
      .select("email name")
      .lean();

    return NextResponse.json(users);
  } catch {
    return new Response("Forbidden", { status: 403 });
  }
}
