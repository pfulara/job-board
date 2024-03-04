import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";

import { connectDB } from "@/utils/connection";
import Candidate from "@/models/candidateModel";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export async function POST(req) {
  try {
    await connectDB();

    const session = await getServerSession(authOptions);
    
    const params = await req.json();
    
    if (!params.offer) {
      params.company = session.user.id;
    }
  
    const candidates = await Candidate
      .find(params)
      .populate({ path: 'offer', select: 'title' })
      .select('-cv');
    return NextResponse.json(candidates);
  } catch {
    return NextResponse.json([], { status: 400 });
  }
}