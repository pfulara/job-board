import { NextResponse } from "next/server";

export async function POST(req) {
    try {

        const { title, category, locations, skills, salary, description } = await req.json();
        // console.log({ title, category, locations, skills, salary, description});
        return NextResponse.json({ message: 'ok!' });
    } catch {
        return NextResponse.json({ message: 'Server Error, please try again later.' });
    }
}