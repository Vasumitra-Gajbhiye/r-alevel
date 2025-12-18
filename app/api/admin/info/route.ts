import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { Role } from "@/lib/roles";
import connectDB from "@/libs/mongodb";
import InformativeMember from "@/models/informativeMember";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

/* ================= HELPERS ================= */

function requireInformativeAccess(session: any): Role[] {
  const roles = session?.userData?.roles as Role[] | undefined;

  if (
    !roles ||
    !roles.some((r) => ["owner", "admin", "informative_team"].includes(r))
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
    requireInformativeAccess(session);

    const members = await InformativeMember.find().sort({
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
    requireInformativeAccess(session);

    const created = await InformativeMember.create({});
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
    requireInformativeAccess(session);

    const { id, patch } = await req.json();
    if (!id || !patch) {
      return new Response("Invalid payload", { status: 400 });
    }

    await InformativeMember.findByIdAndUpdate(id, patch, {
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
    requireInformativeAccess(session);

    const { id } = await req.json();
    if (!id) return new Response("Invalid payload", { status: 400 });

    await InformativeMember.findByIdAndDelete(id);

    return NextResponse.json({ success: true });
  } catch {
    return new Response("Forbidden", { status: 403 });
  }
}
