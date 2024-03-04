import { NextResponse } from "next/server";
import { connectDB } from "@/utils/connection";
import Candidate from "@/models/candidateModel";

export async function POST(req) {
  try {
    await connectDB();

    const data = await req.json();

    await Candidate.create(data);
    
    return NextResponse.json({ message: 'ok' });
  } catch {
    return NextResponse.json({ ok: false, message: 'Server Error, please try again later.' });
  }
}