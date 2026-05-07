import { NextRequest, NextResponse } from "next/server";
import { subscribeToKit } from "@/lib/kit";

export async function POST(req: NextRequest) {
  try {
    const { email, firstName } = await req.json();
    if (!email || typeof email !== "string") {
      return NextResponse.json({ success: false, message: "A valid email is required." }, { status: 400 });
    }
    const result = await subscribeToKit(email.trim(), firstName?.trim());
    return NextResponse.json(result, { status: result.success ? 200 : 500 });
  } catch {
    return NextResponse.json({ success: false, message: "Invalid request." }, { status: 400 });
  }
}
