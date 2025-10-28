// import mongoose from "mongoose";

// export default async function mongoDBConnect() {
//   console.log("connecting to db...");
//   try {
//     await mongoose.connect(`${process.env.MONGODB_URI}`);
//     console.log("Connected to MongoDB");
//   } catch (error) {
//     console.log(error);
//   }
// }

import mongoose from "mongoose";

let isConnected = false;

export default async function mongoDBConnect() {
  if (isConnected) return;
  
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}`);
    isConnected = true;
    console.log("✅ Connected to MongoDB");
  } catch (error) {
    console.log("❌ MongoDB connection failed:", error);
  }
}