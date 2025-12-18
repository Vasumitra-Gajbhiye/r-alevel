import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { Role } from "@/lib/roles";
import connectDB from "@/libs/mongodb";
import GraphicMember from "@/models/graphicMember";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

/* ================= HELPERS ================= */

function requireGraphicAccess(session: any): Role[] {
  const roles = session?.userData?.roles as Role[] | undefined;

  if (
    !roles ||
    !roles.some((r) => ["owner", "admin", "graphic_designer"].includes(r))
  ) {
    throw new Error("FORBIDDEN");
  }

  return roles;
}

/* ================= GET ================= */
export async function GET() {
  await connectDB();
  const session = await getServerSession(authOptions);

  try {
    requireGraphicAccess(session);

    const members = await GraphicMember.find().sort({
      createdAt: -1,
    });

    return NextResponse.json(members);
  } catch {
    return new Response("Forbidden", { status: 403 });
  }
}

/* ================= POST ================= */
export async function POST() {
  await connectDB();
  const session = await getServerSession(authOptions);

  try {
    requireGraphicAccess(session);

    const created = await GraphicMember.create({});
    return NextResponse.json(created);
  } catch {
    return new Response("Forbidden", { status: 403 });
  }
}

/* ================= PATCH ================= */
export async function PATCH(req: Request) {
  await connectDB();
  const session = await getServerSession(authOptions);

  try {
    requireGraphicAccess(session);

    const { id, patch } = await req.json();

    if (!id || !patch) {
      return new Response("Invalid payload", { status: 400 });
    }

    await GraphicMember.findByIdAndUpdate(id, patch, {
      new: true,
    });

    return NextResponse.json({ success: true });
  } catch {
    return new Response("Forbidden", { status: 403 });
  }
}

/* ================= DELETE ================= */
export async function DELETE(req: Request) {
  await connectDB();
  const session = await getServerSession(authOptions);

  try {
    requireGraphicAccess(session);

    const { id } = await req.json();
    if (!id) {
      return new Response("Invalid payload", { status: 400 });
    }

    await GraphicMember.findByIdAndDelete(id);

    return NextResponse.json({ success: true });
  } catch {
    return new Response("Forbidden", { status: 403 });
  }
}
