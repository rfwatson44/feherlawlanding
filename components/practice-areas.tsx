"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Shield, Users, Scale, ArrowRight } from "lucide-react"

const practiceAreas = [
  {
    title: "Wrongful Termination",
    description:
      "Fired illegally or in violation of your contract? We'll fight to recover your lost wages and damages.",
    icon: Shield,
    color: "from-[#1e509a] to-blue-600",
  },
  {
    title: "Workplace Discrimination",
    description: "Discrimination based on protected characteristics is illegal. We'll hold employers accountable.",
    icon: Users,
    color: "from-blue-600 to-blue-700",
  },
  {
    title: "Sexual Harassment",
    description: "No one should endure workplace harassment. We help victims seek justice and compensation.",
    icon: Scale,
    color: "from-[#1e509a] to-blue-500",
  },
  {
    title: "Retaliation Claims",
    description: "Employers cannot punish you for reporting violations or exercising your legal rights.",
    icon: Shield,
    color: "from-blue-600 to-[#1e509a]",
  },
]

const scrollToForm = () => {
  const formElement = document.getElementById("case-evaluation-form")
  if (formElement) {
    formElement.scrollIntoView({ behavior: "smooth", block: "center" })
  }
}

export function PracticeAreas() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Employment Law <span className="text-[#1e509a]">Expertise</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We specialize in protecting employee rights across all areas of employment law
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {practiceAreas.map((area, index) => (
            <Card
              key={index}
              className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2"
            >
              <CardHeader className="pb-4">
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${area.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <area.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-[#1e509a] transition-colors">
                  {area.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600 leading-relaxed">{area.description}</p>
                <Button
                  onClick={scrollToForm}
                  className="w-full bg-gradient-to-r from-[#1e509a] to-blue-600 hover:from-[#1a4785] hover:to-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Get Help Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
