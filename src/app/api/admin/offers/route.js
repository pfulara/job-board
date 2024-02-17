import { NextResponse } from "next/server";

export async function GET() {
  try {

    await new Promise(resolve => setTimeout(resolve, 2000))
    return NextResponse.json({});
  } catch {
    return NextResponse.json({ message: 'Server Error, please try again later.' });
  }
}