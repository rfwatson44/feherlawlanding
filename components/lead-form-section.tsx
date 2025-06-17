import Image from "next/image"
import { DollarSign, Clock, Award } from "lucide-react"

export function LeadFormSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Meet the <span className="text-[#1e509a]">Feher Law Team</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our experienced employment law team is dedicated to fighting for your workplace rights and securing the
              compensation you deserve.
            </p>
          </div>
          <div className="flex justify-center">
            <div className="relative">
              <Image
                src="/images/feher-law-team.png"
                alt="Feher Law team of employment attorneys"
                width={1000}
                height={700}
                className="rounded-2xl shadow-2xl"
                style={{
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-6 mt-16">
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <DollarSign className="h-6 w-6 text-[#1e509a]" />
              </div>
              <p className="text-sm text-gray-700 font-medium">No Fee Unless We Win</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Clock className="h-6 w-6 text-[#1e509a]" />
              </div>
              <p className="text-sm text-gray-700 font-medium">Free Consultation</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Award className="h-6 w-6 text-[#1e509a]" />
              </div>
              <p className="text-sm text-gray-700 font-medium">Millions Recovered</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
