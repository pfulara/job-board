import { NextResponse } from "next/server";

import { connectDB } from "@/utils/connection";
import Offer from "@/models/offerModel";

export async function POST(req) {
  try {

    await connectDB();
    const { offerId, status } = await req.json();

    const offer = await Offer.findOneAndUpdate({ _id: offerId }, { status });

    return NextResponse.json(offer);
  } catch {
    return NextResponse.json({ message: 'Server Error, please try again later.' });
  }
}