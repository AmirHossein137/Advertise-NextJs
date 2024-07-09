import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import connectDB from "@/utils/connectDB";
import UserAdvertise from "@/models/UserAdvertise";
import { verifyPassword } from "@/utils/auth";

export const authOptions = {
  session: { strategy: "jwt" },
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        try {
          await connectDB();
          const { email, password } = credentials;
          if (!email || !password) {
            throw new Error("Please enter valid information");
          }
          const user = await UserAdvertise.findOne({ email });
          if (!user) {
            throw new Error("Please create an account first");
          }
          const isValid = await verifyPassword(password, user.password);

          if (!isValid) {
            throw new Error("UserName or Password Is wrong");
          }

          return { email };
        } catch (err) {
          console.log(err);
          throw new Error("A problem has occurred on the server");
        }
      },
    }),
  ],
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
