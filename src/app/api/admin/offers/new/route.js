import { NextResponse } from "next/server";
import { connectDB } from "@/utils/connection";
import Offer from "@/models/offerModel";

export async function POST(req) {
  try {
    await connectDB();

    const { title, category, locations, skills, salary, description } = await req.json();
    const offer = await Offer.create({ title, category, locations, skills, salary, description });
    return NextResponse.json({ message: 'ok!', id: offer._id });
  } catch {
    return NextResponse.json({ message: 'Server Error, please try again later.' });
  }
} 