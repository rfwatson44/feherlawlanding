import { Header } from "@/components/header"
import { BottomBar } from "@/components/bottom-bar"

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">DISCLAIMER</h1>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
            <p>
              The content provided on the Feher Law website is for informational purposes only and is not intended as
              legal advice.
            </p>
            <p>
              The information on this website may not reflect the most current legal developments and may vary by
              jurisdiction. No user of this site should act or refrain from acting on the basis of information included
              on this website without seeking legal advice from a qualified attorney licensed in the relevant
              jurisdiction.
            </p>
            <p>
              The transmission and receipt of information contained on this website, in whole or in part, or
              communication with Feher Law via the Internet or email through this website does not constitute or create
              a lawyer-client relationship between us and any recipient. You should not send us any confidential
              information in response to this webpage. Such responses will not create a lawyer-client relationship, and
              whatever you disclose to us will not be privileged or confidential unless we have agreed to act as your
              legal counsel and you have executed a written engagement agreement with Feher Law.
            </p>
            <p>
              Feher Law expressly disclaims all liability in respect to actions taken or not taken based on any or all
              the contents of this website. The firm does not necessarily endorse, and is not responsible for, any
              third-party content that may be accessed through this website.
            </p>
            <p className="text-sm text-gray-500 mt-8">This disclaimer was last updated on February 17, 2025.</p>
          </div>
        </div>
      </div>
      <BottomBar />
    </div>
  )
}
