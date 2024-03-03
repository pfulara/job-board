import { NextResponse } from "next/server";

import { connectDB } from "@/utils/connection";
import Company from "@/models/companyModel";

export async function POST(req) {
  try {
    await connectDB();
    
    const newCompany = await req.json();
    const company = await Company.findOneAndUpdate({ _id: newCompany._id }, newCompany);
    return NextResponse.json(company);
  } catch {
    return NextResponse.json({ message: 'Server Error, please try again later.' }, { status: 500 });
  }
} 