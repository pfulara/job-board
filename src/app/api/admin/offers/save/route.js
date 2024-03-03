import { NextResponse } from "next/server";

import { connectDB } from "@/utils/connection";
import Offer from "@/models/offerModel";

export async function POST(req) {
  try {
    await connectDB();

    const newOffer = await req.json();
    const offer = await Offer.findOneAndUpdate({ _id: newOffer._id }, newOffer);
    return NextResponse.json({ id: offer._id });
  } catch {
    return NextResponse.json({ message: 'Server Error, please try again later.' }, { status: 500 });
  }
} 