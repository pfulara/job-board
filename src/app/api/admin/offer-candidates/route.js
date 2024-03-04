import { NextResponse } from "next/server";

import { connectDB } from "@/utils/connection";
import Candidate from "@/models/candidateModel";

export async function POST(req) {
  try {
    await connectDB();
    
    const { offerId } = await req.json()
  
    const candidates = await Candidate
      .find({ offer: offerId }).populate({ path: 'offer', select: "_id title"}).select('-cv');
    return NextResponse.json(candidates);
  } catch {
    return NextResponse.json([], { status: 400 });
  }
}