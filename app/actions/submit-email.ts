"use server"

import { supabase } from "@/lib/supabase"

export async function submitEmail(formData: FormData) {
  const email = formData.get("email") as string

  if (!email) {
    return {
      success: false,
      message: "Email is required",
    }
  }

  try {
    const { data, error } = await supabase.from("cancer_screening_emails").insert([{ email }]).select()

    if (error) {
      console.error("Supabase error:", error)
      return {
        success: false,
        message: "Failed to save email. Please try again.",
      }
    }

    return {
      success: true,
      message: "Thank you! We'll be in touch soon to schedule your screening.",
      data,
    }
  } catch (error) {
    console.error("Unexpected error:", error)
    return {
      success: false,
      message: "An unexpected error occurred. Please try again.",
    }
  }
}
