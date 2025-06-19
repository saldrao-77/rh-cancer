"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowLeft, Mail, Phone, MessageSquare, Heart } from "lucide-react"
import { useState } from "react"
import Image from "next/image"

export default function BookScreening() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null)

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setMessage(null)

    try {
      const response = await fetch("/api/submit-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      })

      const result = await response.json()

      if (result.success) {
        setMessage({ type: "success", text: "Thank you! We'll be in touch soon to schedule your screening." })
        setEmail("")
      } else {
        setMessage({ type: "error", text: result.message || "Something went wrong. Please try again." })
      }
    } catch (error) {
      setMessage({ type: "error", text: "Something went wrong. Please try again." })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleEmailUs = () => {
    window.location.href = "mailto:support@rbnhealth.com"
  }

  const handleCallUs = () => {
    window.location.href = "tel:262-501-8982"
  }

  const handleTextUs = () => {
    window.location.href = "sms:262-501-8982"
  }

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Header */}
      <header className="bg-white border-b border-stone-200 px-4 py-4">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 relative">
              <Image
                src="/images/moonstone-logo.jpeg"
                alt="Moonstone Health Logo"
                fill
                className="object-contain rounded-lg"
              />
            </div>
            <span className="text-xl font-light text-stone-900">Moonstone Health</span>
          </div>
          <button
            onClick={() => window.history.back()}
            className="flex items-center gap-2 text-stone-600 hover:text-stone-900 font-light transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-light text-stone-900 mb-6">Get Your Cancer Screening This Week</h1>
          <p className="text-xl text-stone-600 font-light max-w-2xl mx-auto leading-relaxed">
            Enter your email and a member of our team will reach out to you with scans in your area, transparent
            pricing, and available appointment times.
          </p>
        </div>

        {/* Email Form */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-16 max-w-2xl mx-auto">
          <form onSubmit={handleEmailSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-stone-700 mb-2">
                Email Address
              </label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                required
                disabled={isSubmitting}
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-amber-700 hover:bg-amber-800 text-white py-3 text-lg font-light rounded-lg"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Get My Cancer Screening Scheduled"}
            </Button>
          </form>

          {/* Success/Error Messages */}
          {message && (
            <div
              className={`mt-4 p-4 rounded-lg ${
                message.type === "success"
                  ? "bg-green-50 text-green-800 border border-green-200"
                  : "bg-red-50 text-red-800 border border-red-200"
              }`}
            >
              {message.text}
            </div>
          )}
        </div>

        {/* Direct Contact Section */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-light text-stone-900 mb-4">
            Get in Contact with a Member of Our Team
          </h2>
          <p className="text-lg text-stone-600 font-light mb-8">
            Connect with our cancer screening specialists for personalized assistance
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-2xl mx-auto">
            <Button
              onClick={handleEmailUs}
              variant="outline"
              className="flex items-center gap-2 px-6 py-3 border-amber-200 text-amber-700 hover:bg-amber-50 rounded-lg"
            >
              <Mail className="w-4 h-4" />
              Email Us
            </Button>
            <Button
              onClick={handleCallUs}
              variant="outline"
              className="flex items-center gap-2 px-6 py-3 border-amber-200 text-amber-700 hover:bg-amber-50 rounded-lg"
            >
              <Phone className="w-4 h-4" />
              Call Us
            </Button>
            <Button
              onClick={handleTextUs}
              variant="outline"
              className="flex items-center gap-2 px-6 py-3 border-amber-200 text-amber-700 hover:bg-amber-50 rounded-lg"
            >
              <MessageSquare className="w-4 h-4" />
              Text Us
            </Button>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="flex flex-col sm:flex-row gap-8 justify-center items-center text-center">
          <div className="flex items-center gap-2 text-stone-600">
            <Heart className="w-5 h-5 text-amber-600" />
            <span className="font-light">MD-reviewed results</span>
          </div>
          <div className="flex items-center gap-2 text-stone-600">
            <Heart className="w-5 h-5 text-amber-600" />
            <span className="font-light">Scan within 2–3 days</span>
          </div>
          <div className="flex items-center gap-2 text-stone-600">
            <Heart className="w-5 h-5 text-amber-600" />
            <span className="font-light">HSA/FSA eligible</span>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-stone-200 mt-16">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div className="flex flex-col">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 relative">
                  <Image
                    src="/images/moonstone-logo.jpeg"
                    alt="Moonstone Health Logo"
                    fill
                    className="object-contain rounded-lg"
                  />
                </div>
                <span className="text-xl font-light text-stone-900">Moonstone Health</span>
              </div>
              <p className="text-stone-600 font-light text-sm max-w-md">
                Preventive cancer screening designed for peace of mind. Early detection when it matters most.
              </p>
              <p className="text-stone-500 font-light text-sm mt-2">© 2024 Moonstone Health. All rights reserved.</p>
            </div>

            <div className="flex items-center gap-6">
              <a href="#" className="text-stone-500 hover:text-stone-700 font-light text-sm transition-colors">
                Privacy
              </a>
              <a href="#" className="text-stone-500 hover:text-stone-700 font-light text-sm transition-colors">
                Terms
              </a>
              <a href="#" className="text-stone-500 hover:text-stone-700 font-light text-sm transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
