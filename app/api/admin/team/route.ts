import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { Role } from "@/lib/roles";
import connectDB from "@/libs/mongodb";
import StaffMember from "@/models/staffMember";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

/* ================= HELPERS ================= */

function requireTeamAdmin(session: any): Role[] {
  const roles = session?.userData?.roles as Role[] | undefined;

  if (!roles || !roles.some((r) => ["owner", "admin"].includes(r))) {
    throw new Error("FORBIDDEN");
  }

  return roles;
}

const RANK_ORDER: Record<string, number> = {
  community_lead: 1,
  admin: 2,
  senior_mod: 3,
  junior_mod: 4,
  trial_mod: 5,
  former_staff: 6,
};

/* ================= GET: LIST STAFF ================= */
export async function GET() {
  await connectDB();
  const session = await getServerSession(authOptions);

  try {
    requireTeamAdmin(session);

    const staff = await StaffMember.aggregate([
      {
        // Assign numeric priority to each rank
        $addFields: {
          rankOrder: {
            $switch: {
              branches: [
                { case: { $eq: ["$rank", "community_lead"] }, then: 1 },
                { case: { $eq: ["$rank", "admin"] }, then: 2 },
                { case: { $eq: ["$rank", "senior_mod"] }, then: 3 },
                { case: { $eq: ["$rank", "junior_mod"] }, then: 4 },
                { case: { $eq: ["$rank", "trial_mod"] }, then: 5 },
                { case: { $eq: ["$rank", "former_staff"] }, then: 6 },
              ],
              default: 99,
            },
          },
        },
      },
      {
        // Primary: hierarchy, Secondary: oldest first
        $sort: {
          rankOrder: 1,
          createdAt: 1,
        },
      },
      {
        // Clean output
        $project: {
          rankOrder: 0,
        },
      },
    ]);

    return NextResponse.json(staff);
  } catch {
    return new Response("Forbidden", { status: 403 });
  }
}

/* ================= POST: ADD STAFF ================= */
export async function POST() {
  await connectDB();
  const session = await getServerSession(authOptions);

  try {
    requireTeamAdmin(session);

    const staff = await StaffMember.create({
      username: "",
      email: "",
      realName: "",
      userId: "",

      rank: "trial_mod",
      activity: "not_required",
      behaviour: "no_record",
      state: "active",

      positionStart: null,
      lastPromotion: null,
      notes: "",
    });

    return NextResponse.json(staff, { status: 201 });
  } catch {
    return new Response("Forbidden", { status: 403 });
  }
}
