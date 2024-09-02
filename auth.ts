import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import db from "./db/drizzle";
import { users } from "@/db/schema";
import { eq } from "drizzle-orm";

export const config = {
  providers: [
    CredentialsProvider({
      credentials: { email: { type: "email" }, password: { type: "password" } },
      async authorize(credentials) {
        if (credentials === null) return null;
        const user = await db.query.users.findFirst({
          where: eq(users.email, credentials?.email as string),
        });
        if (user && user.password) {
          if (user.password === credentials?.password) {
            return {
              id: user.id,
              name: user.name,
              email: user.email,
              role: user.role,
            };
          }
        }
      },
    }),
  ],
};

export const {
  handler: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth(config);
