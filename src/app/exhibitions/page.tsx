"use client";

import Link from "next/link";
import Image from "next/image";

export default function HowItWorks() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 flex flex-col">
      {/* Top Navbar */}
      <nav className="w-full bg-black py-4 flex justify-center">
        <Link href="/home">
          <Image
            src="/logo.png" // Replace with your actual logo file path
            alt="Logo"
            width={40}
            height={40}
            className="cursor-pointer"
          />
        </Link>
      </nav>

      {/* Main Content */}
      <main className="flex-grow flex flex-col justify-center items-center px-8">
  <div className="max-w-screen-md w-full">
    <div className="border-t border-gray-600 pt-4">
      <h1 className="text-3xl font-bold my-6 text-center">
        <a href="mailto:i@nonterritorial.foundation">PREVIEW INQUIRY</a>
      </h1>
    </div>
    <div className="border-t border-gray-600"></div>
  </div>
</main>

    </div>
  );
}
