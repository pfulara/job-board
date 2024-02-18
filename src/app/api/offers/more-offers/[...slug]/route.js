import { NextResponse } from "next/server";
import { connectDB } from "@/utils/connection";
import Offer from "@/models/offerModel";

export async function GET(request, { params }) {

  try {
    await connectDB();

    const { slug } = params;
    const company = slug[0];
    const offerId = slug[1];

    const offer = await Offer.find({ company, _id: {$ne: offerId}, status: "Active"  }).limit(5).sort({ updatedAt: 1 });
    return NextResponse.json(offer);
  } catch {
    return NextResponse.json({ message: 'Server Error, please try again later.' });
  }
}