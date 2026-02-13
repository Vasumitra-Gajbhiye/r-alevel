// models/FormSubmission.ts
import mongoose from "mongoose";

const VoteSchema = new mongoose.Schema(
  {
    adminId: {
      type: String,
      required: true,
    },
    adminName: {
      type: String,
      required: true,
    },
    vote: {
      type: Number,
      enum: [1, -1], // 1 = upvote, -1 = downvote
      required: true,
    },
    votedAt: {
      type: Date,
      default: Date.now,
    },
  },
  { _id: false }
);

const CommentSchema = new mongoose.Schema(
  {
    adminId: {
      type: String,
      required: true,
    },
    adminName: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
      trim: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { _id: false }
);

const FormSubmissionSchema = new mongoose.Schema(
  {
    formSlug: {
      type: String,
      required: true,
      index: true,
    },

    responses: {
      type: mongoose.Schema.Types.Mixed,
      required: true,
    },

    submittedAt: {
      type: Date,
      default: Date.now,
      index: true,
    },

    cycleId: {
      type: Number,
      required: true,
      index: true,
    },

    formType: {
      type: String,
      required: true,
      index: true,
    },
    metadata: {
      ip: String,
      userAgent: String,
    },
    votes: {
      type: [VoteSchema],
      default: [],
    },

    comments: {
      type: [CommentSchema],
      default: [],
    },
  },
  { timestamps: true }
);

export default mongoose.models.FormSubmission ||
  mongoose.model("FormSubmission", FormSubmissionSchema);
