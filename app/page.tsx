"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Clock, Brain, Heart, FileText, ArrowRight, Stethoscope, Plus, TrendingUp } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function CancerScreeningLanding() {
  return (
    <div className="min-h-screen bg-stone-50">
      {/* Header */}
      <header className="bg-white border-b border-stone-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
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

            <Link href="/book">
              <Button className="bg-amber-700 hover:bg-amber-800 text-white font-light rounded-full">
                Book Screening
              </Button>
            </Link>
          </div>
        </div>
      </header>
      {/* Hero Section */}
      <section className="px-4 py-16 md:py-24 max-w-5xl mx-auto text-center">
        <div className="mb-6">
          <Badge className="bg-amber-100 text-amber-800 border-amber-200 mb-4">
            Recommended by leading physicians nationwide
          </Badge>
        </div>

        <h1 className="text-4xl md:text-6xl font-light text-stone-900 mb-6 leading-tight">
          You're healthy. But what if you're <em className="italic font-normal text-amber-700">missing something</em>?
        </h1>

        <p className="text-xl text-stone-600 mb-8 max-w-3xl mx-auto leading-relaxed font-light">
          Specially curated inflammation and imaging panel designed to detect leading indicators of cancer early—so you
          can stay ahead and keep living the life you've built.
        </p>

        <div className="bg-white rounded-2xl shadow-sm border border-stone-200 p-8 max-w-2xl mx-auto mb-10">
          <div className="text-3xl font-light text-stone-900 mb-2">Starting at</div>
          <div className="text-5xl font-light text-amber-700 mb-4">$650</div>
          <p className="text-stone-600 font-light">No referral. No insurance. Just answers.</p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 mb-10 text-sm">
          <div className="flex items-center gap-2 text-stone-700">
            <CheckCircle className="w-4 h-4 text-amber-600" />
            <span className="font-light">MD-reviewed results</span>
          </div>
          <div className="flex items-center gap-2 text-stone-700">
            <CheckCircle className="w-4 h-4 text-amber-600" />
            <span className="font-light">Scan within 2–3 days</span>
          </div>
          <div className="flex items-center gap-2 text-stone-700">
            <CheckCircle className="w-4 h-4 text-amber-600" />
            <span className="font-light">HSA/FSA eligible</span>
          </div>
        </div>

        <Link href="/book">
          <Button
            size="lg"
            className="bg-amber-700 hover:bg-amber-800 text-white px-10 py-4 text-lg font-light rounded-full shadow-lg hover:shadow-xl transition-all"
          >
            Book Your Cancer Screening
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </Link>
      </section>

      {/* Emotional Reassurance Section */}
      <section className="bg-white px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-light text-stone-900 mb-8">
            You've worked hard to take care of yourself. <br />
            <em className="italic text-amber-700">This is the next step.</em>
          </h2>
          <p className="text-xl text-stone-600 mb-8 max-w-3xl mx-auto leading-relaxed font-light">
            You exercise. You eat clean. You do the "right things." But cancer incidence among young people is rising.
            This screening helps catch what healthy habits can't prevent.
          </p>

          <Card className="max-w-3xl mx-auto border-0 shadow-lg bg-stone-50">
            <CardContent className="p-10">
              <div className="flex items-center gap-4 mb-6">
                <Stethoscope className="w-8 h-8 text-amber-600" />
                <div className="text-left">
                  <div className="font-medium text-stone-900">Dr. Raj Rao, MD</div>
                  <div className="text-sm text-stone-600 font-light">
                    Former Chair of FDA Panel, Nationally Recognized Orthopedic Spine Surgeon
                  </div>
                </div>
              </div>
              <p className="text-lg text-stone-700 italic leading-relaxed font-light">
                "I've been running these panels on my patients for decades. This is how medicine is supposed to be
                done—clear, clinical, evidence-based care. We start from first principles: detecting inflammation, which
                is a leading indicator of cancer. It's medicine back to basics, leaving no stone unturned."
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* How It Works */}
      <section className="px-4 py-20 max-w-6xl mx-auto bg-stone-50">
        <h2 className="text-3xl md:text-4xl font-light text-stone-900 text-center mb-16">How It Works</h2>

        <div className="grid md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <FileText className="w-8 h-8 text-amber-700" />
            </div>
            <h3 className="text-xl font-medium text-stone-900 mb-4">Take a 5-Minute Health Quiz</h3>
            <p className="text-stone-600 leading-relaxed font-light">
              We'll personalize your cancer screening plan based on lifestyle, family history, and risk factors.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Clock className="w-8 h-8 text-amber-700" />
            </div>
            <h3 className="text-xl font-medium text-stone-900 mb-4">We Handle Everything</h3>
            <p className="text-stone-600 leading-relaxed font-light">
              We'll get you booked for your personalized diagnostic tests (MRIs and labs) at a trusted local center in
              our network.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Brain className="w-8 h-8 text-amber-700" />
            </div>
            <h3 className="text-xl font-medium text-stone-900 mb-4">Get Clear Results</h3>
            <p className="text-stone-600 leading-relaxed font-light">
              MD-reviewed insights with AI-powered analysis. Clear next steps including referrals to specialists or
              additional diagnostic testing based on any flags in your results.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <TrendingUp className="w-8 h-8 text-amber-700" />
            </div>
            <h3 className="text-xl font-medium text-stone-900 mb-4">Track Results Over Time</h3>
            <p className="text-stone-600 leading-relaxed font-light">
              We become your data hub for cancer and inflammatory markers, helping you unearth trends and flags—even
              micro movements—much easier over time.
            </p>
          </div>
        </div>
      </section>

      {/* Base Package */}
      <section className="bg-white px-4 py-20">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-stone-900 mb-4">
              Comprehensive <em className="italic text-amber-700">Early Detection</em> Package
            </h2>
            <p className="text-xl text-stone-600 font-light">
              First-principles approach to detecting cancer's earliest warning signs
            </p>
          </div>

          <Card className="border-2 border-amber-200 shadow-xl">
            <CardContent className="p-10">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-medium text-stone-900 mb-6">Base Package Includes:</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-amber-600 mt-1 flex-shrink-0" />
                      <div>
                        <div className="font-medium text-stone-900">Abdomen MRI</div>
                        <div className="text-stone-600 font-light">
                          Visualize liver, pancreas, kidneys for early tumor detection
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-amber-600 mt-1 flex-shrink-0" />
                      <div>
                        <div className="font-medium text-stone-900">Comprehensive Cancer & Inflammation Panel</div>
                        <div className="text-stone-600 font-light">
                          Advanced blood markers that detect early cancer signals and inflammatory changes: CEA, CA
                          19-9, AFP, PSA (men), CA-125 (women), CRP, ESR
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-amber-600 mt-1 flex-shrink-0" />
                      <div>
                        <div className="font-medium text-stone-900">Doctor's Order Included</div>
                        <div className="text-stone-600 font-light">No PCP visit required</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-amber-600 mt-1 flex-shrink-0" />
                      <div>
                        <div className="font-medium text-stone-900">Results in 3–5 Days</div>
                        <div className="text-stone-600 font-light">Clear summary with next steps if needed</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-stone-50 rounded-xl p-8 text-center">
                  <div className="text-4xl font-light text-amber-700 mb-2">$650</div>
                  <div className="text-stone-600 font-light mb-6">One transparent price</div>
                  <Link href="/book">
                    <Button className="w-full bg-amber-700 hover:bg-amber-800 text-white rounded-full font-light">
                      Start Your Screening
                    </Button>
                  </Link>
                  <p className="text-sm text-stone-500 mt-4 font-light">HSA/FSA eligible • No hidden fees</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Add-On Products */}
      <section className="bg-stone-50 px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-stone-900 mb-4">
              Personalized <em className="italic text-amber-700">Add-Ons</em>
            </h2>
            <p className="text-xl text-stone-600 font-light">Based on your risk factors and family history</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border-0 shadow-md hover:shadow-lg transition-shadow bg-white">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Plus className="w-5 h-5 text-amber-600" />
                  <h3 className="text-lg font-medium text-stone-900">Lung CT</h3>
                </div>
                <p className="text-stone-600 font-light mb-4">
                  For current or former smokers. Screens for early lung cancer.
                </p>
                <div className="text-2xl font-light text-amber-700">+$200</div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md hover:shadow-lg transition-shadow bg-white">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Plus className="w-5 h-5 text-amber-600" />
                  <h3 className="text-lg font-medium text-stone-900">Breast MRI</h3>
                </div>
                <p className="text-stone-600 font-light mb-4">
                  For women with dense breasts, BRCA mutations, or family history.
                </p>
                <div className="text-2xl font-light text-amber-700">+$400</div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md hover:shadow-lg transition-shadow bg-white">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Plus className="w-5 h-5 text-amber-600" />
                  <h3 className="text-lg font-medium text-stone-900">Pelvic MRI</h3>
                </div>
                <p className="text-stone-600 font-light mb-4">
                  Evaluates uterus, ovaries, and cervix for early signs of cancer.
                </p>
                <div className="text-2xl font-light text-amber-700">+$350</div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md hover:shadow-lg transition-shadow bg-white">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Plus className="w-5 h-5 text-amber-600" />
                  <h3 className="text-lg font-medium text-stone-900">Prostate MRI</h3>
                </div>
                <p className="text-stone-600 font-light mb-4">
                  For men 40+ or with family history. Targeted prostate screening.
                </p>
                <div className="text-2xl font-light text-amber-700">+$300</div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md hover:shadow-lg transition-shadow bg-white">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Plus className="w-5 h-5 text-amber-600" />
                  <h3 className="text-lg font-medium text-stone-900">Brain MRI</h3>
                </div>
                <p className="text-stone-600 font-light mb-4">
                  Checks for tumors, aneurysms, and structural abnormalities.
                </p>
                <div className="text-2xl font-light text-amber-700">+$450</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Trust + Quality */}
      <section className="bg-white px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <div className="flex items-center gap-4 mb-8">
                <Brain className="w-10 h-10 text-amber-600" />
                <h3 className="text-2xl font-light text-stone-900">Clinical Excellence</h3>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-5 h-5 text-amber-600 mt-1 flex-shrink-0" />
                  <span className="text-stone-700 font-light">Board-certified radiologists review every scan</span>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-5 h-5 text-amber-600 mt-1 flex-shrink-0" />
                  <span className="text-stone-700 font-light">AI-powered pattern detection for enhanced accuracy</span>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-5 h-5 text-amber-600 mt-1 flex-shrink-0" />
                  <span className="text-stone-700 font-light">Seamless referral network for follow-up care</span>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-5 h-5 text-amber-600 mt-1 flex-shrink-0" />
                  <span className="text-stone-700 font-light">Results compatible with any healthcare provider</span>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-4 mb-8">
                <Heart className="w-10 h-10 text-amber-600" />
                <h3 className="text-2xl font-light text-stone-900">Designed for You</h3>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-5 h-5 text-amber-600 mt-1 flex-shrink-0" />
                  <span className="text-stone-700 font-light">Book online in under 2 minutes</span>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-5 h-5 text-amber-600 mt-1 flex-shrink-0" />
                  <span className="text-stone-700 font-light">Transparent, upfront pricing</span>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-5 h-5 text-amber-600 mt-1 flex-shrink-0" />
                  <span className="text-stone-700 font-light">No insurance paperwork or prior authorizations</span>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-5 h-5 text-amber-600 mt-1 flex-shrink-0" />
                  <span className="text-stone-700 font-light">Longitudinal tracking to monitor changes over time</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="bg-stone-50 px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-light text-stone-900 mb-6">
            Stay ahead of what <em className="italic text-amber-700">matters most.</em>
          </h2>
          <p className="text-xl text-stone-600 mb-12 font-light">Catch problems early—or confirm your peace of mind.</p>

          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <div className="text-4xl font-light text-amber-700 mb-4">$650</div>
            <p className="text-stone-600 font-light mb-6">Complete cancer screening package</p>

            <Link href="/book">
              <Button
                size="lg"
                className="bg-amber-700 hover:bg-amber-800 text-white px-10 py-4 text-lg font-light rounded-full shadow-lg hover:shadow-xl transition-all mb-4"
              >
                Book Your Preventive Scan Now
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>

            <div className="flex flex-wrap justify-center gap-6 text-sm text-stone-600 font-light">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-amber-600" />
                <span>Results in 3–5 days</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-amber-600" />
                <span>MD-reviewed</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-amber-600" />
                <span>HSA/FSA eligible</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-stone-200">
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
