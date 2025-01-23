"use client";

import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      {/* Navbar */}
      <nav className="w-full bg-black py-4 border-gray-700 flex justify-center">
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
      <main className="flex flex-col justify-center items-center flex-grow px-4">
        <h1 className="text-gray-300 text-xl tracking-wide mb-8">
          NONTERRITORIAL
        </h1>

        <ul className="w-full max-w-sm space-y-4 text-left">
          <li className="border-t border-gray-600 pt-4">
            <Link href="/concept" className="text-gray-400 hover:text-gray-200">
              CONCEPT
            </Link>
          </li>
          <li className="border-t border-gray-600 pt-4">
            <Link
              href="/how-it-works"
              className="text-gray-400 hover:text-gray-200"
            >
              HOW IT WORKS
            </Link>
          </li>
          <li className="border-t border-gray-600 pt-4">
            <Link href="/exhibitions" className="text-gray-400 hover:text-gray-200">
              EXHIBITIONS
            </Link>
          </li>
          <li className="border-t border-gray-600 pt-4">
            <Link
              href="/participate"
              className="text-gray-400 hover:text-gray-200"
            >
              PARTICIPATE
            </Link>
          </li>
          <li className="border-t border-gray-600 pt-4">
            <Link href="/keywords" className="text-gray-400 hover:text-gray-200">
              KEYWORDS
            </Link>
          </li>
          <li className="border-t border-gray-600 pt-4">
            <Link href="/contact" className="text-gray-400 hover:text-gray-200">
              CONTACT
            </Link>
          </li>
        </ul>
      </main>
    </div>
  );
}
