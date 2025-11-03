// import NextAuth from "next-auth";
// import GoogleProvider from "next-auth/providers/google";
// import connectDB from "@/libs/mongodb";
// import UserData from "@/models/userData";

// const handler = NextAuth({
//   providers: [
//     GoogleProvider({
//       clientId: process.env.GOOGLE_CLIENT_ID,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//     }),
//   ],
//   callbacks: {
//     async signIn({ user }) {
//       await connectDB();

//       // Check if user already exists
//       const existingUser = await UserData.findOne({ email: user.email });

//       // Create new user profile if not found
//       if (!existingUser) {
//         await UserData.create({
//           name: user.name,
//           email: user.email,
//           subjectsAS: [],
//           subjectsA2: [],
//           examSession: "",
//           receiveEmails: false,
//         });
//         console.log('use created')
//       }

//       return true;
//     },
//     async session({ session }) {
//       // Attach user email to session
//       const dbUser = await UserData.findOne({ email: session.user.email });
//       session.userData = dbUser;
//       return session;
//     },
//   },
// });
// import NextAuth from "next-auth";
// import GoogleProvider from "next-auth/providers/google";
// import connectDB from "@/libs/mongodb";
// import UserData from "@/models/userData";

// const handler = NextAuth({
//   providers: [
//     GoogleProvider({
//       clientId: process.env.GOOGLE_CLIENT_ID,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//     }),
//   ],

//   callbacks: {
//     async signIn({ user }) {
//       try {
//         await connectDB();

//         // Create user profile if not exists
//         const existingUser = await UserData.findOne({ email: user.email });
//         if (!existingUser) {
//           await UserData.create({
//             name: user.name,
//             email: user.email,
//             subjectsAS: [],
//             subjectsA2: [],
//             examSession: [],
//             receiveEmails: false,
//           });
//           console.log("✅ Created new user profile for", user.email);
//         }

//         return true;
//       } catch (err) {
//         console.error("❌ signIn callback error:", err);
//         return false;
//       }
//     },

//     async session({ session }) {
//       await connectDB();
//       const dbUser = await UserData.findOne({ email: session.user.email });
//       session.userData = dbUser;
//       return session;
//     },
//   },
// });

// export { handler as GET, handler as POST };

import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import clientPromise from "@/libs/mongoClient";
import connectDB from "@/libs/mongodb";
import UserData from "@/models/userData";

const handler = NextAuth({
  adapter: MongoDBAdapter(clientPromise),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  pages: {
    signIn: "/", // optional — keeps login on home
  },
  callbacks: {
    async signIn({ user }) {
      await connectDB();

      const existingUser = await UserData.findOne({ email: user.email });

      if (!existingUser) {
        await UserData.create({
          name: user.name,
          email: user.email,
          subjectsAS: [],
          subjectsA2: [],
          examSession: [],
          receiveEmails: false,
        });
        console.log("✅ UserData created for:", user.email);
      }

      return true;
    },

    async session({ session }) {
      await connectDB();
      const dbUser = await UserData.findOne({ email: session.user.email });
      session.userData = dbUser || null;
      return session;
    },
  },
});

export { handler as GET, handler as POST };