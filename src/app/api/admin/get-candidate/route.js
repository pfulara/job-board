import { NextResponse } from "next/server";

import { connectDB } from "@/utils/connection";
import Candidate from "@/models/candidateModel";

export async function POST(req) {
  try {
    await connectDB();
    
    const { candidateId } = await req.json()
  
    const candidate = await Candidate
      .findOneAndUpdate({ _id: candidateId }, { unread: false })
      .populate({ path: 'offer', select: "title"});
    return NextResponse.json(candidate);
  } catch {
    return NextResponse.json([], { status: 400 });
  }
}