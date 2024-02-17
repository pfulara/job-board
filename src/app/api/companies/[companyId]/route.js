import { NextResponse } from "next/server";
import { connectDB } from "@/utils/connection";
import Offer from "@/models/offerModel";

export async function GET(request, { params }) {
    try {
      await connectDB();
  
      const company = await Offer.findOne({ _id: params.companyId});
      return NextResponse.json(company);
    } catch {
      return NextResponse.json({ message: 'Server Error, please try again later.' });
    }
  }