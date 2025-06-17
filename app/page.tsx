import { HeroSection } from "@/components/hero-section"
import { UrgencyBar } from "@/components/urgency-bar"
import { LeadFormSection } from "@/components/lead-form-section"
import { PracticeAreas } from "@/components/practice-areas"
import { Testimonials } from "@/components/testimonials"
import { FinalCTA } from "@/components/final-cta"
import { BottomBar } from "@/components/bottom-bar"

export default function EmploymentLawLanding() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <UrgencyBar />
      <LeadFormSection />
      <PracticeAreas />
      <Testimonials />
      <FinalCTA />
      <BottomBar />
    </div>
  )
}
