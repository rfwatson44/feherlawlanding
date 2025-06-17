import { Clock } from "lucide-react"

export function UrgencyBar() {
  return (
    <section className="bg-gradient-to-r from-red-600 to-red-700 text-white py-4">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center space-x-4 text-center">
          <Clock className="h-5 w-5 animate-pulse" />
          <p className="font-semibold">
            Employment cases have strict deadlines - Don't wait, your rights are time-sensitive
          </p>
        </div>
      </div>
    </section>
  )
}
