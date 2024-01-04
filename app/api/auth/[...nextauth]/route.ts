import NextAuth, { NextAuthOptions } from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import { PrismaAdapter } from "@auth/prisma-adapter";
import prisma from "@/db";
import { Adapter } from "next-auth/adapters";
import CredentialsProvider from "next-auth/providers/credentials";



export const authOptions: NextAuthOptions = {
    adapter: PrismaAdapter(prisma) as Adapter,
    providers: [
        GitHubProvider({
            clientId: process.env.GITHUB_CLIENT_ID!,
            clientSecret: process.env.GITHUB_CLIENT_SECRET!
        }),
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: { label: "Username", type: "text", placeholder: "Type your username" },
                password: { label: "Password", type: "password" },
            },
            authorize(credentials, req) {
                const user = { id: "1", name: "Ash K", email: "ashk@example.com", password: "123456" }
                if(user) {
                    return user; 
                } else {
                    return null;
                }
            }
        })
    ],
    session: {
        strategy: 'jwt'
    }
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }