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

// import mongoose from "mongoose";

// let isConnected = false;

// export default async function mongoDBConnect() {
//   if (isConnected) return;
  
//   try {
//     await mongoose.connect(`${process.env.MONGODB_URI}`);
//     isConnected = true;
//     console.log("✅ Connected to MongoDB");
//   } catch (error) {
//     console.log("❌ MongoDB connection failed:", error);
//   }
// }


// Load the URI from environment variables
// import mongoose from "mongoose";
// import { MongoClient } from "mongodb";

// const uri: string = process.env.MONGODB_URI || "";
// if (!uri) {
//   throw new Error("❌ Please define the MONGODB_URI environment variable inside .env.local");
// }

// // --------------------------
// // ✅ 1. For NextAuth adapter
// // --------------------------
// const client = new MongoClient(uri);
// const clientPromise = client.connect();

// // --------------------------
// // ✅ 2. For Mongoose models
// // --------------------------
// let isConnected = false;

// export async function connectDB() {
//   if (isConnected) return;
//   try {
//     await mongoose.connect(uri);
//     isConnected = true;
//     console.log("✅ Mongoose connected");
//   } catch (err) {
//     console.error("❌ Mongoose connection error:", err);
//   }
// }

// export default clientPromise;
import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI as string;

if (!MONGODB_URI) {
  throw new Error("❌ Please define the MONGODB_URI environment variable inside .env.local");
}

// Extend NodeJS global type to include cached mongoose connection
declare global {
  // eslint-disable-next-line no-var
  var mongooseCache: { conn: typeof mongoose | null; promise: Promise<typeof mongoose> | null };
}

let cached = global.mongooseCache;

if (!cached) {
  cached = global.mongooseCache = { conn: null, promise: null };
}

export default async function connectDB() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
      dbName: "r_alevel", // optional custom DB name
    };

    cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => mongoose);
  }

  cached.conn = await cached.promise;
  return cached.conn;
}