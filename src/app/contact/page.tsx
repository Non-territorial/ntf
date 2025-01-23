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
      <main className="flex-grow flex flex-col justify-center items-center text-center px-8">
        <div className="max-w-screen-md w-full">
          <h1 className="text-3xl font-bold mb-6">CONTACT US</h1>
          <p className="text-lg leading-relaxed">
      <strong>Email:</strong>{" "}
      <a
        href="mailto:i@nonterritorial.foundation"
        className="hover:text-black transition-colors duration-200"
      >
        i@nonterritorial.foundation
      </a>
    </p>
    <p className="text-lg leading-relaxed">
      <strong>Phone:</strong>{" "}
      <a
        href="tel:+393515635054"
        className="hover:text-black transition-colors duration-200"
      >
        +39 351 563 5054
      </a>
    </p>
        </div>
      </main>
    </div>
  );
}
