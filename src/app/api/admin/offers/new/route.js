import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import mongoose from "mongoose";

import { connectDB } from "@/utils/connection";
import Offer from "@/models/offerModel";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";



export async function POST(req) {
  try {
    await connectDB();

    const session = await getServerSession(authOptions);

    const newOffer = await req.json();
    const company = await new mongoose.Types.ObjectId(session.user.id)
    const offer = await Offer.create({...newOffer, company });
    return NextResponse.json({ id: offer._id });
  } catch {
    return NextResponse.json({ message: 'Server Error, please try again later.' }, { status: 500 });
  }
} 