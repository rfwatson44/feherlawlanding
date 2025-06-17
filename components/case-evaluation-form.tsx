"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { ArrowRight, ArrowLeft, Shield, FileText, Clock, Award } from "lucide-react"

interface FormData {
  terminated: string
  discriminated: string
  employer: string
  yearsWorked: string
  occupation: string
  state: string
  terminationDate: string
  hasAttorney: string
  situation: string
  firstName: string
  lastName: string
  email: string
  phone: string
  smsConsent: boolean
}

export function CaseEvaluationForm() {
  const [currentStep, setCurrentStep] = useState(0) // Start at 0 for title page
  const [formData, setFormData] = useState<FormData>({
    terminated: "",
    discriminated: "",
    employer: "",
    yearsWorked: "",
    occupation: "",
    state: "",
    terminationDate: "",
    hasAttorney: "",
    situation: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    smsConsent: false,
  })

  const updateFormData = (field: keyof FormData, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const nextStep = () => {
    if (currentStep < 5) setCurrentStep(currentStep + 1)
  }

  const prevStep = () => {
    if (currentStep > 0) setCurrentStep(currentStep - 1)
  }

  const startForm = () => {
    setCurrentStep(1)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <div className="flex flex-col justify-center items-center py-6 space-y-6">
            <div className="text-center space-y-6">
              <div className="bg-gradient-to-br from-[#1e509a] to-blue-600 rounded-full w-12 h-12 mx-auto flex items-center justify-center">
                <FileText className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Free Case Evaluation</h3>
            </div>

            <div className="grid grid-cols-3 gap-4 w-full text-xs">
              <div className="text-center">
                <div className="bg-blue-50 rounded-lg p-3 mb-3">
                  <Clock className="h-5 w-5 text-[#1e509a] mx-auto" />
                </div>
                <p className="font-medium text-gray-700">Takes 1 minute</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-50 rounded-lg p-3 mb-3">
                  <Shield className="h-5 w-5 text-[#1e509a] mx-auto" />
                </div>
                <p className="font-medium text-gray-700">100% Confidential</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-50 rounded-lg p-3 mb-3">
                  <Award className="h-5 w-5 text-[#1e509a] mx-auto" />
                </div>
                <p className="font-medium text-gray-700">No Fee Unless We Win</p>
              </div>
            </div>

            <Button
              onClick={startForm}
              size="lg"
              className="w-full bg-gradient-to-r from-[#1e509a] to-blue-600 hover:from-[#1a4785] hover:to-blue-700 text-base py-4 font-semibold shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              Start My Free Case Evaluation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        )

      case 1:
        return (
          <div className="space-y-6">
            <div className="space-y-4">
              <Label className="text-lg font-semibold text-gray-800">Were you terminated from your job?</Label>
              <div className="flex gap-4">
                <Button
                  type="button"
                  variant={formData.terminated === "yes" ? "default" : "outline"}
                  onClick={() => updateFormData("terminated", "yes")}
                  className={formData.terminated === "yes" ? "bg-[#1e509a] hover:bg-[#1a4785]" : ""}
                >
                  Yes
                </Button>
                <Button
                  type="button"
                  variant={formData.terminated === "no" ? "default" : "outline"}
                  onClick={() => updateFormData("terminated", "no")}
                  className={formData.terminated === "no" ? "bg-[#1e509a] hover:bg-[#1a4785]" : ""}
                >
                  No
                </Button>
              </div>
            </div>
            <div className="space-y-4">
              <Label className="text-lg font-semibold text-gray-800">
                Do you feel like you are being discriminated against? (age, gender, race, religion, etc.)
              </Label>
              <div className="flex gap-4">
                <Button
                  type="button"
                  variant={formData.discriminated === "yes" ? "default" : "outline"}
                  onClick={() => updateFormData("discriminated", "yes")}
                  className={formData.discriminated === "yes" ? "bg-[#1e509a] hover:bg-[#1a4785]" : ""}
                >
                  Yes
                </Button>
                <Button
                  type="button"
                  variant={formData.discriminated === "no" ? "default" : "outline"}
                  onClick={() => updateFormData("discriminated", "no")}
                  className={formData.discriminated === "no" ? "bg-[#1e509a] hover:bg-[#1a4785]" : ""}
                >
                  No
                </Button>
              </div>
            </div>
          </div>
        )

      case 2:
        return (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="employer" className="text-gray-700 font-medium">
                Name of Employer *
              </Label>
              <Input
                id="employer"
                value={formData.employer}
                onChange={(e) => updateFormData("employer", e.target.value)}
                placeholder="Enter employer name"
                className="h-10 border-2 border-gray-200 focus:border-[#1e509a] focus:ring-[#1e509a]"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="yearsWorked" className="text-gray-700 font-medium">
                How many years did you work there? *
              </Label>
              <Input
                id="yearsWorked"
                type="number"
                value={formData.yearsWorked}
                onChange={(e) => updateFormData("yearsWorked", e.target.value)}
                placeholder="Enter number of years"
                className="h-10 border-2 border-gray-200 focus:border-[#1e509a] focus:ring-[#1e509a]"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="occupation" className="text-gray-700 font-medium">
                What is your occupation? *
              </Label>
              <Input
                id="occupation"
                value={formData.occupation}
                onChange={(e) => updateFormData("occupation", e.target.value)}
                placeholder="Enter your occupation"
                className="h-10 border-2 border-gray-200 focus:border-[#1e509a] focus:ring-[#1e509a]"
                required
              />
            </div>
          </div>
        )

      case 3:
        return (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label className="text-gray-700 font-medium">In what State were you employed? *</Label>
              <Select value={formData.state} onValueChange={(value) => updateFormData("state", value)}>
                <SelectTrigger className="h-10 border-2 border-gray-200 focus:border-[#1e509a]">
                  <SelectValue placeholder="Select a state" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="california">California</SelectItem>
                  <SelectItem value="nevada">Nevada</SelectItem>
                  <SelectItem value="arizona">Arizona</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="terminationDate" className="text-gray-700 font-medium">
                Date of Termination? *
              </Label>
              <Input
                id="terminationDate"
                type="date"
                value={formData.terminationDate}
                onChange={(e) => updateFormData("terminationDate", e.target.value)}
                className="h-10 border-2 border-gray-200 focus:border-[#1e509a] focus:ring-[#1e509a]"
                required
              />
            </div>
            <div className="space-y-4">
              <Label className="text-lg font-semibold text-gray-800">Are you working with another attorney?</Label>
              <div className="flex gap-4">
                <Button
                  type="button"
                  variant={formData.hasAttorney === "yes" ? "default" : "outline"}
                  onClick={() => updateFormData("hasAttorney", "yes")}
                  className={formData.hasAttorney === "yes" ? "bg-[#1e509a] hover:bg-[#1a4785]" : ""}
                >
                  Yes
                </Button>
                <Button
                  type="button"
                  variant={formData.hasAttorney === "no" ? "default" : "outline"}
                  onClick={() => updateFormData("hasAttorney", "no")}
                  className={formData.hasAttorney === "no" ? "bg-[#1e509a] hover:bg-[#1a4785]" : ""}
                >
                  No
                </Button>
              </div>
            </div>
          </div>
        )

      case 4:
        return (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="situation" className="text-gray-700 font-medium">
                Please briefly explain your situation *
              </Label>
              <Textarea
                id="situation"
                value={formData.situation}
                onChange={(e) => updateFormData("situation", e.target.value)}
                placeholder="Describe your employment situation..."
                className="min-h-32 border-2 border-gray-200 focus:border-[#1e509a] focus:ring-[#1e509a]"
                required
              />
            </div>
          </div>
        )

      case 5:
        return (
          <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName" className="text-gray-700 font-medium">
                  First Name *
                </Label>
                <Input
                  id="firstName"
                  value={formData.firstName}
                  onChange={(e) => updateFormData("firstName", e.target.value)}
                  placeholder="Enter your first name"
                  className="h-10 border-2 border-gray-200 focus:border-[#1e509a] focus:ring-[#1e509a]"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName" className="text-gray-700 font-medium">
                  Last Name *
                </Label>
                <Input
                  id="lastName"
                  value={formData.lastName}
                  onChange={(e) => updateFormData("lastName", e.target.value)}
                  placeholder="Enter your last name"
                  className="h-10 border-2 border-gray-200 focus:border-[#1e509a] focus:ring-[#1e509a]"
                  required
                />
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-gray-700 font-medium">
                  Email Address *
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => updateFormData("email", e.target.value)}
                  placeholder="your.email@example.com"
                  className="h-10 border-2 border-gray-200 focus:border-[#1e509a] focus:ring-[#1e509a]"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-gray-700 font-medium">
                  Phone Number *
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => updateFormData("phone", e.target.value)}
                  placeholder="(555) 123-4567"
                  className="h-10 border-2 border-gray-200 focus:border-[#1e509a] focus:ring-[#1e509a]"
                  required
                />
              </div>
            </div>
            <div className="flex items-start space-x-2">
              <Checkbox
                id="smsConsent"
                checked={formData.smsConsent}
                onCheckedChange={(checked) => updateFormData("smsConsent", checked as boolean)}
                className="mt-1"
              />
              <Label htmlFor="smsConsent" className="text-sm text-gray-600 leading-relaxed">
                By checking this box, you consent to Feher Law collecting your phone number and contacting you via SMS
                messages, including informational and marketing messages. Message and data rates may apply.
              </Label>
            </div>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <div className="w-full max-w-sm" id="case-evaluation-form">
      <Card className="shadow-2xl border-0 overflow-hidden">
        <CardHeader className="bg-white text-[#1e509a] p-4 sm:p-6">
          {currentStep > 0 && (
            <div className="flex items-center space-x-2 text-sm text-gray-500">
              <span>Step {currentStep} of 5</span>
              <div className="flex space-x-1">
                {[1, 2, 3, 4, 5].map((step) => (
                  <div
                    key={step}
                    className={`w-2 h-2 rounded-full ${step <= currentStep ? "bg-[#1e509a]" : "bg-gray-300"}`}
                  />
                ))}
              </div>
            </div>
          )}
        </CardHeader>
        <CardContent className="p-3 sm:p-4 bg-white">
          {currentStep === 0 ? (
            renderStep()
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {renderStep()}

              <div className="flex justify-between pt-4">
                {currentStep > 1 && (
                  <Button
                    type="button"
                    onClick={prevStep}
                    variant="outline"
                    className="border-[#1e509a] text-[#1e509a] hover:bg-[#1e509a] hover:text-white"
                  >
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Previous
                  </Button>
                )}

                {currentStep < 5 ? (
                  <Button
                    type="button"
                    onClick={nextStep}
                    className="bg-gradient-to-r from-[#1e509a] to-blue-600 hover:from-[#1a4785] hover:to-blue-700 ml-auto"
                  >
                    Next
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                ) : (
                  <Button
                    type="submit"
                    className="bg-gradient-to-r from-[#1e509a] to-blue-600 hover:from-[#1a4785] hover:to-blue-700 ml-auto"
                  >
                    Submit Case Review
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                )}
              </div>
            </form>
          )}

          {currentStep === 5 && (
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mt-4">
              <p className="text-sm text-gray-600 text-center">
                <Shield className="inline h-4 w-4 mr-1 text-[#1e509a]" />
                Your information is 100% confidential and protected by attorney-client privilege.
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
