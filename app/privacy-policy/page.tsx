import { Header } from "@/components/header"
import { BottomBar } from "@/components/bottom-bar"

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">PRIVACY POLICY</h1>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
            <p>
              Welcome to the Feher Law website. Protecting your privacy is a commitment we take seriously. This policy
              provides detailed information on how we collect, use, safeguard, and disclose your information, including
              compliance with The Campaign Registry (TCR) requirements for SMS and MMS messaging.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Information Collection and Use</h2>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Personal Information:</h3>
            <p>
              We collect personal details such as your name, email address, phone number, and any other information you
              provide when you fill out contact forms or engage with our services. This information is used to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Address your inquiries.</li>
              <li>Provide legal services.</li>
              <li>Improve our client interactions.</li>
              <li>Send SMS updates, notifications, or marketing messages, in compliance with TCR requirements.</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Non-Personal Information:</h3>
            <p>We may also collect non-personal information related to your website usage, including:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>IP address.</li>
              <li>Browser type.</li>
              <li>Access times.</li>
            </ul>
            <p>This data helps us understand user behavior and improve our website's functionality.</p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">SMS Messaging and TCR Compliance</h2>
            <p>
              By providing your phone number, you consent to receive SMS messages from Feher Law, including marketing,
              informational, and transactional messages. We use third-party messaging providers that comply with The
              Campaign Registry (TCR) requirements to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Ensure message transparency.</li>
              <li>Reduce spam and fraud.</li>
              <li>Comply with regulatory requirements.</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Opt-Out Option:</h3>
            <p>
              You can opt out of receiving SMS messages at any time by replying "STOP" to any message. Standard message
              and data rates may apply.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Third-Party Data Sharing:</h3>
            <p>
              Your phone number may be shared with third-party messaging providers solely for TCR compliance and message
              delivery. Your information will not be sold, traded, or rented to third parties for marketing or
              promotional purposes.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Cookies and Tracking Technologies</h2>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Cookies:</h3>
            <p>
              Our website uses "cookies" to enhance your browsing experience. Cookies are small data files stored on
              your device that help us understand how you interact with our site and enable us to tailor our services to
              your preferences. You have the option to accept or decline cookies through your browser settings.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Analytics:</h3>
            <p>
              We utilize analytics tools to gather aggregate information about website traffic and user interactions.
              This data helps us identify trends and improve our website's usability and content.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Data Security</h2>
            <p>
              We implement robust security measures to protect your information against unauthorized access, alteration,
              disclosure, or destruction. Despite our efforts, no Internet transmission is entirely secure, and we
              cannot guarantee absolute security.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Information Sharing</h2>
            <p>
              Your personal information is not sold, traded, or rented to third parties. We may share your data with:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Trusted affiliates and service providers who assist us in operating our website, conducting our
                business, or serving you, as long as those parties agree to keep this information confidential.
              </li>
              <li>Third-party messaging providers for TCR compliance and message delivery, as required by law.</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Legal Compliance</h2>
            <p>We may disclose your information when required by law or when we believe disclosure is necessary to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Protect our rights.</li>
              <li>Comply with a legal obligation.</li>
              <li>Ensure compliance with TCR regulations.</li>
              <li>Protect the safety of our users or the public.</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">User Rights and Choices</h2>
            <p>You have the right to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Access, update, or delete your personal information.</li>
              <li>Opt out of SMS messaging at any time by replying "STOP."</li>
              <li>Contact us to exercise your rights under applicable data protection laws.</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Data Retention Policy</h2>
            <p>
              We retain personal information only as long as necessary to fulfill the purposes outlined in this policy,
              including TCR compliance.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Changes to This Privacy Policy</h2>
            <p>
              Feher Law reserves the right to update this privacy policy at any time. When we do, we will revise the
              updated date at the bottom of this page. We encourage you to check this page frequently for any changes to
              stay informed about how we are protecting your information.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Contacting Us</h2>
            <p>
              Please contact us if you have any questions about this privacy policy or your dealings with our website.
              Your privacy, trust, and confidence are of utmost importance to us.
            </p>

            <p className="text-sm text-gray-500 mt-8">This privacy policy was last updated on February 19, 2025.</p>
          </div>
        </div>
      </div>
      <BottomBar />
    </div>
  )
}
