import { Separator } from "@/components/ui/separator"
import { Phone, Mail, MapPin } from "lucide-react"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#1e509a] to-blue-700 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Image
              src="/images/feher-law-logo.jpeg"
              alt="Feher Law APC"
              width={250}
              height={100}
              className="h-16 w-auto mb-6 brightness-0 invert"
            />
            <p className="text-blue-100 mb-6 text-lg leading-relaxed">
              Protecting employee rights across California with experienced, dedicated legal representation. No fee
              unless we win your case.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-6">Contact Info</h3>
            <div className="space-y-4 text-blue-100">
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-blue-200" />
                <span className="font-medium">(555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-blue-200" />
                <span>info@feherlawfirm.com</span>
              </div>
              <div className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 mt-1 text-blue-200" />
                <div>
                  <p>123 Legal Street, Suite 100</p>
                  <p>City, CA 12345</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-6">Practice Areas</h3>
            <ul className="space-y-3 text-blue-100">
              <li className="hover:text-white transition-colors cursor-pointer">Wrongful Termination</li>
              <li className="hover:text-white transition-colors cursor-pointer">Workplace Discrimination</li>
              <li className="hover:text-white transition-colors cursor-pointer">Sexual Harassment</li>
              <li className="hover:text-white transition-colors cursor-pointer">Wage & Hour Disputes</li>
              <li className="hover:text-white transition-colors cursor-pointer">Retaliation Claims</li>
              <li className="hover:text-white transition-colors cursor-pointer">Employment Contracts</li>
            </ul>
          </div>
        </div>
        <Separator className="my-12 bg-blue-600" />
        <div className="flex flex-col md:flex-row justify-between items-center text-blue-200 space-y-4 md:space-y-0">
          <p>© 2025 Feher Law, APC</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-white transition-colors">
              Disclaimer
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
