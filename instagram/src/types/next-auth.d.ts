import { User } from "@/model/user";
import { DefaultSession } from "next-auth";
import NextAuth, { NextAuthOptions } from "next-auth/next";

declare module "next-auth" {
  interface Session {
    user: User;
  }
}

declare module "react-multi-carousel";
