import { type NextRequest, NextResponse } from "next/server"
import { supabase } from "@/lib/supabase"

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json()

    if (!email) {
      return NextResponse.json({ success: false, message: "Email is required" }, { status: 400 })
    }

    const { data, error } = await supabase.from("cancer_screening_emails").insert([{ email }]).select()

    if (error) {
      console.error("Supabase error:", error)
      return NextResponse.json({ success: false, message: "Failed to save email. Please try again." }, { status: 500 })
    }

    return NextResponse.json({
      success: true,
      message: "Thank you! We'll be in touch soon to schedule your screening.",
      data,
    })
  } catch (error) {
    console.error("Unexpected error:", error)
    return NextResponse.json(
      { success: false, message: "An unexpected error occurred. Please try again." },
      { status: 500 },
    )
  }
}
