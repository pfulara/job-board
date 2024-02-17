import { NextResponse } from "next/server";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from 'bcrypt';

import { connectDB } from "@/utils/connection";
import Company from "@/models/companyModel";

async function login(credentials){
  try {
    await connectDB();

    const { email, password } = credentials;

    const company = await Company.findOne({ email })
    if (!company) return NextResponse.json({ message: "Wrong email or password" }, { status: 400 });
    
    const isCorrect = await bcrypt.compare(password, company.password);
    if (!isCorrect) return NextResponse.json({ message: "Wrong email or password" }, { status: 400 });
    
    return NextResponse.json(company);
  } catch (error) {
    return NextResponse.json({ message: "Server error, please try again later" }, { status: 400 });
  }
}

export const authOptions = {
  pages: {
    signIn: "/login"
  },
  session: {
    strategy: "jwt"
  },
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: false,
      async authorize(credentials){
        try {
          const res = await login(credentials);
          const company = await res.json();
          if(company._id) {
            return company;
          }
          
          return null;
        } catch(error) {
          throw new Error('Something went wrong');
        }
      }
    })
  ],
  callbacks: {
    async jwt({ token, user }){
      if (user) {
        token.id = user._id
      }
      return token;
    },
    async session({ session, token}){
      if (token) {
        session.user.id = token.id
        delete session.user.email; 
      }
      return session;
    }
  }
}

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST }