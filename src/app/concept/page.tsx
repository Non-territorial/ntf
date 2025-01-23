"use client";

import Link from "next/link";
import Image from "next/image";

export default function Concept() {
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
    <div className="max-w-screen-md w-full p-8">
      <h1 className="text-3xl font-bold mb-6">CONCEPT</h1>
      <p className="text-lg leading-relaxed">
        Nonterritorial introduces art projects whose nature and scale exceed the limits normally available within the traditional museum or gallery. It is about a combination and resonance between context, location, and artwork, promoting a new idea of circulation of arts. The unusual of Nonterritorial lies within its transformative capacities, adapting to any type of location and turning it into an exhibition-experience environment.<br /><br />

        It is about a new way of presenting works as much as a new kind of artwork: one that we cannot always touch or take with us, that we cannot quite tell where it ends or begins, but that we can certainly feel. This is about new levels of perception, the intangible more than the tangible, and the amplification of poetics.
      </p>
    </div>
  </main>
</div>
  );
}
