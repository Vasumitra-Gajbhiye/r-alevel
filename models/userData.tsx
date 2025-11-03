import mongoose from "mongoose";

const userDataSchema = new mongoose.Schema(
  {
    name: { type: String },
    email: { type: String, required: true, unique: true },
    subjectsAS: { type: [String], default: [] },
    subjectsA2: { type: [String], default: [] },
    examSession: { type: [String], default: [] },
    receiveEmails: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export default mongoose.models.UserData || mongoose.model("UserData", userDataSchema);