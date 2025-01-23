"use client";

import Link from "next/link";
import Image from "next/image";

export default function Participate() {
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
      <h1 className="text-3xl font-bold mb-6">PARTICIPATE</h1>
      <p className="text-lg leading-relaxed">
      Host | Anyone can host an exhibition in any location—whether it&apos;s a home kitchen, loft, parking lot, hotel room, remote village, gym, school, university, or even a private bank reception hall.<br /><br />

      The possibilities are limitless.<br /><br />
      To host an exhibition, submit an inquiry, pay the development and production license fee, and receive all the &apos;Ready-Made Exhibition&apos; materials and instructions.<br /><br />
      Spectator | Audiences can participate by booking an experience at selected exhibition, provided the host opens it to the public.
<br />
      </p>
    </div>
  </main>
</div>
  );
}
