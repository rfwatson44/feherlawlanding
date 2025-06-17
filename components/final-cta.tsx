"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const scrollToForm = () => {
  const formElement = document.getElementById("case-evaluation-form")
  if (formElement) {
    formElement.scrollIntoView({ behavior: "smooth", block: "center" })
  }
}

export function FinalCTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl lg:text-5xl font-bold mb-6">Ready to Fight for Your Rights?</h2>
        <p className="text-xl text-gray-300 mb-10 max-w-4xl mx-auto leading-relaxed">
          Don't let your employer get away with violating your rights. Employment law cases have strict deadlines, so
          the sooner you act, the stronger your case becomes. Get your free consultation today.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Button
            onClick={scrollToForm}
            size="lg"
            className="bg-gradient-to-r from-[#1e509a] to-blue-600 hover:from-[#1a4785] hover:to-blue-700 text-xl px-10 py-6 font-bold shadow-2xl hover:shadow-3xl transition-all duration-300"
          >
            Get Your Free Case Review
            <ArrowRight className="ml-2 h-6 w-6" />
          </Button>
        </div>
      </div>
    </section>
  )
}
