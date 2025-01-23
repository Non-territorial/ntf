"use client";

import keywordsData from "@/data/keywords.json";
import Link from "next/link";
import Image from "next/image";

export default function KeywordsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      {/* Navbar */}
      <nav className="w-full bg-black py-4 flex justify-center">
        <Link href="/home">
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
          KEYWORDS
        </h1>
        <ul className="w-full max-w-sm space-y-4 text-left">
          {Object.entries(keywordsData).map(([slug, { title }]) => (
            <li key={slug} className="border-t border-gray-600 pt-4">
              <Link
                href={`/keywords/${slug}`}
                className="text-gray-400 hover:text-gray-200"
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
