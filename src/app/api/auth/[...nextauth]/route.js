import { NextResponse } from "next/server";
import { connectDB } from "@/utils/connection";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from 'bcrypt';

import Company from "@/models/companyModel";

async function login(credentials){
  try {
    await connectDB();

    const { email, password } = credentials;

    const company = await Company.findOne({ email })
    if (!company) return NextResponse.json({ message: "Wrong email or password" }, { status: 400 });
    
    const isCorrect = bcrypt.compare(password, company.password);
    if (!isCorrect) return NextResponse.json({ message: "Wrong email or password" }, { status: 400 });

    return company;
  } catch (error) {
    return NextResponse.json({ message: "Server error, please try again later" }, { status: 400 });
  }
}

export const authOptions = {
  pages: {
    signIn: "/login"
  },
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: false,
      async authorize(credentials){
        try {
          const company = await login(credentials)
          return company;
        } catch(error) {
          console.log("Error " + error);
          return null;
        }
      }
    })
  ],
  callbacks: {
    async jwt({ token, company }){
      if (company) {
        token.companyName = company.companyName,
        token.email = company.email,
        token.id = company.id
      }
      return token;
    },
    async session({ session, token}){
      if (token) {
        session.company.companyName = token.companyName,
        session.company.email = token.email,
        session.company.id = token.id
      }
      return session;
    }
  }
}

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST }