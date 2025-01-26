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
        <h1 className="text-gray-300 text-3xl font-bold">NONTERRITORIAL</h1>
        <p className="text-lg leading-relaxed mt-4 text-left"> To host an exhibition, submit an inquiry, pay the development and production license fee, 
          and receive all the &apos;Ready-Made Exhibition&apos; materials and instructions.</p>
        <p className="text-lg leading-relaxed mt-4">
      <strong>Email:</strong>{" "}
      <a
        href="mailto:i@nonterritorial.foundation"
        className="text-gray-200 hover:text-gray-500"
      >
        i@nonterritorial.foundation
      </a>
    </p>
    <p className="text-lg leading-relaxed">
      <strong>Phone:</strong>{" "}
      <a
        href="tel:+393515635054"
        className="text-gray-200 hover:text-gray-500"
      >
        +39 351 563 5054
      </a>
    </p>
      </main>
    </div>
  );
}
