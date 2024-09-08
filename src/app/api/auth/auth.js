import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import * as z from "zod";
import { login } from "./_lib/login";
import { Routes } from "@/constants/routes";
export const {
  auth,
  signIn,
  signOut,
  handlers: { POST, GET }
} = NextAuth({
  pages: {
    signIn: Routes.LOGIN
  },
  session: {
    maxAge: 12 * 60 * 60
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.accessToken = user.accessToken;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.token = token;
      }
      return session;
    }
  },
  secret: process.env.AUTH_SECRET,
  providers: [
    Credentials({
      async authorize(credentials) {
        const parsedCredentials = z
          .object({ email: z.string().email(), password: z.string().min(6) })
          .safeParse(credentials);

        if (parsedCredentials.success) {
          const { email, password } = parsedCredentials.data;
          const token = await login({ email, password });
          if (!token) throw new Error("Invalid credentials");
          return token;
        }
        return token;
      }
    })
  ]
});
