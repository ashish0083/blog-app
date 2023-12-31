import NextAuth, { NextAuthOptions } from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import { PrismaAdapter } from "@auth/prisma-adapter";
import {Prisma} from "@prisma/client"
import { Adapter } from "next-auth/adapters";


export const authOptions: NextAuthOptions = {
    adapter: PrismaAdapter(Prisma) as Adapter,
    providers: [
        GitHubProvider({
            clientId: process.env.GITHUB_CLIENT_ID!,
            clientSecret: process.env.GITHUB_CLIENT_SECRET!
        })
    ]
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }