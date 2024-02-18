import { NextResponse } from "next/server";
import { connectDB } from "@/utils/connection";
import Offer from "@/models/offerModel";

export async function POST(req) {
  try {
    await connectDB();

    const query = await req.json();
    if (query.location) {
      query['locations.value'] = query.location
    }
    delete query.location;

    const offers = await Offer.find({ ...query, status: "Active" }).populate({ path: 'company', select: 'companyName logo'});
    
    return NextResponse.json(offers);
  } catch {
    return NextResponse.json({ ok: false, message: 'Server Error, please try again later.' });
  }
}