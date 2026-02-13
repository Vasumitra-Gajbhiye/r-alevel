import { Role } from "@/lib/roles";
import clientPromise from "@/libs/mongoClient";
import connectDB from "@/libs/mongodb";
import UserData from "@/models/userData";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions: NextAuthOptions = {
  adapter: MongoDBAdapter(clientPromise),

  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],

  pages: {
    signIn: "/",
  },

  callbacks: {
    async signIn({ user }) {
      await connectDB();

      const existing = await UserData.findOne({ email: user.email });

      if (!existing) {
        await UserData.create({
          name: user.name,
          email: user.email,
          roles: [],
          subjectsAS: [],
          subjectsA2: [],
          examSession: [],
          receiveEmails: false,
        });
      }

      return true;
    },

    async session({ session }) {
      if (!session.user?.email) return session;

      await connectDB();

      const dbUser = await UserData.findOne({ email: session.user.email })
        .select("_id roles")
        .lean<{ _id: any; roles?: Role[] }>();

      session.userData = dbUser
        ? {
            id: dbUser._id.toString(),
            roles: (dbUser.roles ?? []) as Role[],
            isOwner: Array.isArray(dbUser.roles)
              ? dbUser.roles.includes("owner")
              : false,
          }
        : {
            id: "",
            roles: [],
            isOwner: false,
          };

      return session;
    },
  },
};
