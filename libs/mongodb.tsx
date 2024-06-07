import mongoose from "mongoose";

export default async function mongoDBConnect() {
  console.log("connecting to db...");
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}`);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log(error);
  }
}
