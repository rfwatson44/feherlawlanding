"use client"

import { Badge } from "@/components/ui/badge"
import { CaseEvaluationForm } from "@/components/case-evaluation-form"

export function HeroSection() {
  return (
    <section className="relative min-h-screen">
      {/* Mobile Layout - Stacked */}
      <div className="lg:hidden">
        {/* Mobile Hero Content */}
        <div className="bg-gradient-to-br from-[#1e509a] via-blue-600 to-blue-700 text-white py-12 px-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
          <div className="relative z-10 text-center space-y-6">
            <h1 className="text-3xl sm:text-4xl font-bold leading-tight">
              Your Rights.
              <br />
              <span className="bg-gradient-to-r from-blue-200 to-white bg-clip-text text-transparent">Our Fight.</span>
            </h1>
            <Badge className="bg-white/20 text-white border-white/30 hover:bg-white/25 text-sm px-4 py-2">
              ⭐ California Employment Law Specialists
            </Badge>
            <p className="text-lg text-blue-100 leading-relaxed max-w-lg mx-auto">
              When employers violate your workplace rights, we deliver results. Millions recovered for employees.
            </p>
            <div className="grid grid-cols-2 gap-8 pt-6 max-w-sm mx-auto">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-white mb-1">$100M+</div>
                <p className="text-sm text-blue-200 font-medium">Total Recovered</p>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-white mb-1">Countless</div>
                <p className="text-sm text-blue-200 font-medium">Cases Won</p>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Form Section */}
        <div
          className="relative bg-cover bg-center py-12 px-4"
          style={{
            backgroundImage: `url('/images/workers-mosaic.png')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#1e509a]/85 via-blue-600/75 to-blue-700/85"></div>
          <div className="relative z-10 flex justify-center">
            <CaseEvaluationForm />
          </div>
        </div>
      </div>

      {/* Desktop Layout - Side by Side */}
      <div className="hidden lg:flex min-h-screen">
        {/* Left Side - Blue Background with Content */}
        <div className="w-1/2 bg-gradient-to-br from-[#1e509a] via-blue-600 to-blue-700 text-white py-20 lg:py-32 overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
          <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-white/5 to-transparent"></div>
          <div className="container mx-auto px-8 relative z-10 h-full flex flex-col justify-center">
            <div className="space-y-8">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                Your Rights.
                <br />
                <span className="bg-gradient-to-r from-blue-200 to-white bg-clip-text text-transparent">
                  Our Fight.
                </span>
              </h1>
              <Badge className="bg-white/20 text-white border-white/30 hover:bg-white/25 text-sm px-4 py-2 w-fit">
                ⭐ California Employment Law Specialists
              </Badge>
              <p className="text-xl lg:text-2xl text-blue-100 leading-relaxed max-w-2xl">
                When employers violate your workplace rights, we deliver results. Millions recovered for employees
                facing wrongful termination, discrimination, and retaliation.
              </p>
              <div className="grid grid-cols-2 gap-12 pt-8">
                <div className="text-center">
                  <div className="text-3xl lg:text-5xl font-bold text-white mb-2">$100M+</div>
                  <p className="text-lg text-blue-200 font-medium">Total Recovered</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl lg:text-5xl font-bold text-white mb-2">Countless</div>
                  <p className="text-lg text-blue-200 font-medium">Cases Won</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Workers Image Background with Form */}
        <div
          className="w-1/2 relative bg-cover bg-center"
          style={{
            backgroundImage: `url('/images/workers-mosaic.png')`,
          }}
        >
          {/* Blue Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#1e509a]/80 via-blue-600/70 to-blue-700/80"></div>

          {/* Form Container */}
          <div className="relative z-10 h-full flex items-center justify-center p-8">
            <CaseEvaluationForm />
          </div>
        </div>
      </div>
    </section>
  )
}
