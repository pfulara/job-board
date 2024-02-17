import { NextResponse } from "next/server";
import { connectDB } from "@/utils/connection";
import Offer from "@/models/offerModel";

export async function GET(request, { params }) {
  try {
    await connectDB();

    const { offerId } = params;
    const offer = await Offer.findOne({_id: offerId}).populate({ path: 'company', select: '-password'});
    return NextResponse.json(offer);
  } catch {
    return NextResponse.json({ message: 'Server Error, please try again later.' });
  }
}