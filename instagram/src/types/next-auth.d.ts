import { AuthUser } from "@/model/user";
import { DefaultSession } from "next-auth";
import NextAuth, { NextAuthOptions } from "next-auth/next";

declare module "next-auth" {
  interface Session {
    user: AuthUser;
  }
}

declare module "react-multi-carousel";
