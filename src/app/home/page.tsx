"use client";

import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative flex flex-col min-h-screen bg-black text-white">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        loop
        autoPlay
        muted
        playsInline
      >
        <source src="/background-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay to darken video */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>

      {/* Navbar */}
      <nav className="relative w-full bg-black py-3 sm:py-4 flex justify-center z-10">
        <Link href="/">
          <Image
            src="/logo.png"
            alt="Logo"
            width={40}
            height={40}
            className="cursor-pointer"
          />
        </Link>
      </nav>

      {/* Main Content */}
      <main className="relative flex flex-col justify-center items-center flex-grow z-10 px-4">
        <div className="flex flex-col items-center w-full max-w-lg px-4 sm:px-8 text-gray-400 text-left">
          <h1 className="text-lg sm:text-xl text-white">NONTERRITORIAL</h1>
          <p className="text-sm sm:text-lg leading-relaxed mt-2 sm:mt-4 mb-4 sm:mb-8">
            Nonterritorial introduces art projects whose nature and scale exceed the
            limits normally available within the traditional museum or gallery.
            It is about a combination and resonance between context, location, and artwork,
            promoting a new idea of circulation of arts.
          </p>
          <p className="text-lg leading-relaxed mt-2 sm:mt-4">
            <Link href="/contact" className="text-gray-400 hover:text-white">
              Exhibitions Preview
            </Link>
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="absolute bottom-0 w-full flex flex-col justify-center items-center text-center space-y-1 mb-6 z-50">
        <p className="text-sm sm:text-lg leading-relaxed">
          <Link href="/contact" className="text-gray-400 hover:text-white">
            Contact
          </Link>
        </p>
      </footer>
    </div>
  );
}
