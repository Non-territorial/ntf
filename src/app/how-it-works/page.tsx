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
          <h1 className="text-3xl font-bold mb-6">HOW IT WORKS</h1>
          <p className="text-lg leading-relaxed">
            We simplify the way art is experienced and shared. Through our
            platform, users can access curated collections, explore art in
            innovative formats, and engage with a community that values
            creativity. Whether you&apos;re an artist or an enthusiast, our goal is
            to enhance your interaction with art and its transformative power.
          </p>
        </div>
      </main>
    </div>
  );
}
