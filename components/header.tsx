"use client"

import Image from "next/image"
import Link from "next/link"

export function Header() {
  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-blue-100 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-center">
        <div className="flex items-center">
          <Link href="/">
            <Image
              src="/images/feher-law-logo-new.png"
              alt="Feher Law APC"
              width={300}
              height={120}
              className="h-16 w-auto cursor-pointer"
            />
          </Link>
        </div>
      </div>
    </header>
  )
}
