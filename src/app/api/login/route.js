import { NextResponse } from "next/server";
import bcrypt from 'bcrypt';
import { connectDB } from "@/utils/connection";
import Company from "@/models/companyModel";

export async function POST(req) {
  try {
    await connectDB();

    const { email, password } = await req.json();

    const company = await Company.findOne({ email })
    // if(exists) {
    //     return NextResponse.json({ message: "Email already exists"}, { status: 400 });
    // }

    // const hashedPassword = await bcrypt.hash(password, 10);
    // await Company.create({ companyName, email, password: hashedPassword });
    return NextResponse.json({ message: "ok", company }, { status: 201 });

  } catch(error) {
    return NextResponse.json({ message: 'Server Error, please try again later.', error });
  }
}