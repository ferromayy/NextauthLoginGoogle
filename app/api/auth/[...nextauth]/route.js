import GoogleProvider from "next-auth/providers/google";
import NextAuth from "next-auth/next";
import { connectMongoDB } from "@/lib/mongodb";

const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ user, account }) {
      console.log("User", user);
      console.log("Account", account);

      if (account.provider === "google") {
        const { name, email } = user();
        try {
          await connectMongoDB();
          const findOne = await User.findOne({ email }); //VER SI ES User o user

          if (!findOne) {
            const res = await fetch("http://localhost:3000/api/user", {
              method: "POST",
              headers: { "Content-type": "application/json" },
              body: JSON.stringify({
                name,
                email,
              }),
            });
            if (res.ok) {
              return user;
            }
          }
        } catch (error) {}
      }

      return user;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
