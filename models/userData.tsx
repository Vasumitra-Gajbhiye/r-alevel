import { Schema, models, model } from "mongoose";

const userDataSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  subjectsAS: [{ type: String }],   // e.g. ["Maths", "Physics"]
  subjectsA2: [{ type: String }],
  examSession: { type: String },    // e.g. "May/June 2026"
  receiveEmails: { type: Boolean, default: false },
});

const UserData = models.UserData || model("UserData", userDataSchema);
export default UserData;