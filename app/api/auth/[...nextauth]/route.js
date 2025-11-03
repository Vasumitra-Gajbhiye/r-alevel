import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import connectDB from "@/libs/mongodb";
import UserData from "@/models/userData";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ user }) {
      await connectDB();

      // Check if user already exists
      const existingUser = await UserData.findOne({ email: user.email });

      // Create new user profile if not found
      if (!existingUser) {
        await UserData.create({
          name: user.name,
          email: user.email,
          subjectsAS: [],
          subjectsA2: [],
          examSession: "",
          receiveEmails: false,
        });
      }

      return true;
    },
    async session({ session }) {
      // Attach user email to session
      const dbUser = await UserData.findOne({ email: session.user.email });
      session.userData = dbUser;
      return session;
    },
  },
});

export { handler as GET, handler as POST };