import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        const { title, category, locations, skills, salary, description } = await req.json();
        // console.log({ title, category, locations, skills, salary, description});
        await new Promise(resolve => setTimeout(resolve, 2000))
        return NextResponse.json({ message: 'ok!' });
    } catch {
        return NextResponse.json({ message: 'Server Error, please try again later.' });
    }
}