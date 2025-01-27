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
      <nav className="relative w-full bg-black py-4 flex justify-center z-10">
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
    <div className="flex flex-col items-center max-w-sm ml-8 mr-8 text-gray-400 text-left">
      <h1 className="text-xl">NONTERRITORIAL</h1>
      <h2 className="text-sm font-bold text-gray-500 mb-8">PRIVATE EXHIBITIONS</h2>
      <p className="text-lg leading-relaxed mt-4 mb-8">
        Nonterritorial introduces art projects whose nature and scale exceed the
        limits normally available within the traditional museum or gallery. It is
        about a combination and resonance between context, location, and artwork,
        promoting a new idea of circulation of arts.
      </p>
      <p className="text-lg leading-relaxed mt-4"> 
        <a
          href="mailto:info@nonterritorial.net"
          className="text-gray-400 hover:text-gray-800"
        >
          info@nonterritorial.net
        </a>
      </p>
      <p className="text-lg leading-relaxed">
        <a
          href="tel:+393517176405"
          className="text-gray-400 hover:text-gray-800"
        >
          +39 351 717 6405
        </a>
      </p>
    </div>
  </main>


    </div>
  );
}
