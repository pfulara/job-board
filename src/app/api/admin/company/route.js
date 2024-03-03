import { NextResponse } from "next/server";

import { connectDB } from "@/utils/connection";
import Company from "@/models/companyModel";
import { getToken } from "next-auth/jwt";

export async function GET(req) {
  try {
    await connectDB();

    const token = await getToken({ req });
    const company = await Company.findOne({ _id: token.id }).select('-password');

    return NextResponse.json(company);
  } catch {
    return NextResponse.json({ message: 'Server Error, please try again later.' });
  }
}