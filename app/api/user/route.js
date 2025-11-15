// // app/api/user/route.js
// import { NextResponse } from "next/server";
// import connectDB from "@/libs/mongodb";
// import UserData from "@/models/userData";

// /**
//  * POST /api/user
//  * Body: { email: string }
//  * Returns: user payload for profile page
//  */
// export async function POST(req) {
//   try {
//     const body = await req.json();
//     const { email } = body || {};

//     if (!email || typeof email !== "string") {
//       return NextResponse.json(
//         { error: "Missing or invalid 'email' in request body" },
//         { status: 400 }
//       );
//     }

//     // ensure DB connection
//     await connectDB();

//     // find user by email
//     const user = await UserData.findOne({ email }).lean();

//     if (!user) {
//       return NextResponse.json(
//         { error: "User not found" },
//         { status: 404 }
//       );
//     }

//     // Normalize fields so client always receives expected types
//     const payload = {
//       name: user.name ?? "",
//       email: user.email ?? "",
//       boards: Array.isArray(user.boards) ? user.boards : [],
//       subjectsAS: Array.isArray(user.subjectsAS) ? user.subjectsAS : [],
//       subjectsA2: Array.isArray(user.subjectsA2) ? user.subjectsA2 : [],
//       // ensure examSession is an array (you requested multiple sessions)
//       examSession: Array.isArray(user.examSession)
//         ? user.examSession
//         : user.examSession
//         ? [user.examSession]
//         : [],
//       receiveEmails: typeof user.receiveEmails === "boolean" ? user.receiveEmails : false,
//     };

//     return NextResponse.json(payload, { status: 200 });
//   } catch (err) {
//     console.error("Error in /api/user:", err);
//     return NextResponse.json(
//       { error: "Internal server error" },
//       { status: 500 }
//     );
//   }
// }

// app/api/user/route.js
// app/api/user/route.js
import connectDB from "@/libs/mongodb";
import UserData from "@/models/userData";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();
    const { email } = body || {};

    if (!email || typeof email !== "string") {
      return NextResponse.json(
        { error: "Missing or invalid 'email' in request body" },
        { status: 400 }
      );
    }

    await connectDB();

    const user = await UserData.findOne({ email }).lean();

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    const payload = {
      name: user.name ?? "",
      email: user.email ?? "",
      boards: Array.isArray(user.boards) ? user.boards : [],
      subjectsAS: Array.isArray(user.subjectsAS) ? user.subjectsAS : [],
      subjectsA2: Array.isArray(user.subjectsA2) ? user.subjectsA2 : [],
      examSession: Array.isArray(user.examSession)
        ? user.examSession
        : user.examSession
        ? [user.examSession]
        : [],
      receiveEmails:
        typeof user.receiveEmails === "boolean" ? user.receiveEmails : false,
      redditUsername: user.redditUsername ?? "",
      discordUsername: user.discordUsername ?? "",
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    };

    return NextResponse.json(payload, { status: 200 });
  } catch (err) {
    console.error("Error in /api/user:", err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
