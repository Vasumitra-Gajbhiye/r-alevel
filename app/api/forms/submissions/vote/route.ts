import { authOptions } from "@/libs/auth";
import connectDB from "@/libs/mongodb";
import FormSubmission from "@/models/FormSubmission";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function PATCH(req: Request) {
  await connectDB();

  const session = await getServerSession(authOptions);

  if (!session?.userData?.roles?.includes("admin")) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }
  if (!session || !session.user?.email) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { submissionId, vote } = await req.json();

  if (!submissionId || ![1, -1].includes(vote)) {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  const submission = await FormSubmission.findById(submissionId);

  if (!submission) {
    return NextResponse.json(
      { error: "Submission not found" },
      { status: 404 }
    );
  }
  const adminId = session.user.email;
  const adminName = session.user.name || session.user.email; // fallback

  const existingVoteIndex = submission.votes.findIndex(
    (v: any) => v.adminId === adminId
  );

  if (existingVoteIndex === -1) {
    // 🟢 New vote
    submission.votes.push({
      adminId,
      adminName, // ✅ SAVE NAME
      vote,
      votedAt: new Date(),
    });
  } else {
    // 🔄 Update vote
    submission.votes[existingVoteIndex].vote = vote;
    submission.votes[existingVoteIndex].votedAt = new Date();

    // 🔄 Ensure name stays updated (in case admin changed Google name)
    submission.votes[existingVoteIndex].adminName = adminName;
  }

  await submission.save();

  const upvotes = submission.votes.filter((v: any) => v.vote === 1).length;
  const downvotes = submission.votes.filter((v: any) => v.vote === -1).length;

  return NextResponse.json({
    success: true,
    votes: submission.votes,
    upvotes,
    downvotes,
    currentAdminVote: vote,
    adminId,
  });
}
