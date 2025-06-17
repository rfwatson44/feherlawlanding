import Link from "next/link"

export function BottomBar() {
  return (
    <div className="bg-gray-900 text-gray-300 py-4 border-t border-gray-700">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
          <p className="text-sm">© 2025 Feher Law, APC</p>
          <div className="flex space-x-6 text-sm">
            <Link href="/disclaimer" className="hover:text-white transition-colors">
              Disclaimer
            </Link>
            <Link href="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
