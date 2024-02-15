import { NextResponse } from "next/server";

export async function GET() {
    try {
        const res = [
            { id: '1', title: 'Test1', category: 'it', locations: ['Wrocław', 'Poznań'], skills: ['PHP', 'CSS'], salary: '12000', description: "Lorem ipsum...", status: "Active" },
            { id: '2', title: 'Test2', category: 'it', locations: ['Warszawa'], skills: ['PHP', 'CSS', 'JS', 'Node'], salary: '13000', description: "Lorem ipsum...", status: "Cancelled" },
            { id: '3', title: 'Test3', category: 'it', locations: ['Kraków'], skills: ['PHP'], salary: '14000', description: "Lorem ipsum...", status: "Draft" }
        ]
        await new Promise(resolve => setTimeout(resolve, 2000))
        return NextResponse.json(res);
    } catch {
        return NextResponse.json({ message: 'Server Error, please try again later.' });
    }
}