import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";

import { connectDB } from "@/utils/connection";
import Company from "@/models/companyModel";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export async function POST(req) {
  try {
    await connectDB();

    const session = await getServerSession(authOptions);
    
    const data = await req.json()
    
    await Company.findOneAndUpdate({ _id: session.user.id }, { logo: data.file});

    return NextResponse.json({
      message: 'File uploaded successfully',
      status: 201,
    });
  } catch {
    return NextResponse.json({
      message: 'Upload failed',
      status: 500,
    });
  }
} 