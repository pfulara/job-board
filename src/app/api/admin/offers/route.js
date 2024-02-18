import { NextResponse } from "next/server";

import { connectDB } from "@/utils/connection";
import Offer from "@/models/offerModel";
import { getToken } from "next-auth/jwt";

export async function POST(req) {
  try {
    await connectDB();

    const token = await getToken({ req })
    const offers = await Offer.find({ company: token.id });

    return NextResponse.json(offers);
  } catch {
    return NextResponse.json({ message: 'Server Error, please try again later.' });
  }
}