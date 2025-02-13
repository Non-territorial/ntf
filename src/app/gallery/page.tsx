"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import worksData from "@/data/works.json";

type Work = {
  id: string;
  title: string;
  thumbnail: string;
  disabled?: boolean; // 👈 Add this to prevent TypeScript errors
};


const GalleryPage = () => {
  const [view, setView] = useState<"grid" | "list">("grid");
  const works: Work[] = worksData;

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* Navbar */}
      <nav className="relative w-full bg-black py-4 flex justify-center z-10">
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

      {/* View Switcher - Centered Above List & Grid */}
      <div className="w-full flex justify-center mt-4">
        <div className="flex space-x-8">
          {/* List View */}
          <button
            onClick={() => setView("list")}
            className="relative text-lg font-semibold transition-colors"
          >
            <span className={view === "list" ? "text-white" : "text-gray-400"}>
              List
            </span>
            {view === "list" && (
              <div className="absolute left-0 right-0 -bottom-1 h-[2px] bg-white"></div>
            )}
          </button>

          {/* Grid View */}
          <button
            onClick={() => setView("grid")}
            className="relative text-lg font-semibold transition-colors"
          >
            <span className={view === "grid" ? "text-white" : "text-gray-400"}>
              Grid
            </span>
            {view === "grid" && (
              <div className="absolute left-0 right-0 -bottom-1 h-[2px] bg-white"></div>
            )}
          </button>
        </div>
      </div>

      {/* Main Content */}
<main className="flex flex-col justify-center items-center flex-grow px-4">
  {view === "list" ? (
    <ul className="w-full max-w-sm space-y-4 text-left">
      {works.map((work) => (
        <li key={work.id} className="border-t border-gray-600 pt-4">
          {work.disabled ? (
            <span className="text-gray-400 text-xl">{work.title}</span>
          ) : (
            <Link
              href={`/gallery/${work.id}`}
              className="text-gray-400 hover:text-gray-200 text-xl"
            >
              {work.title}
            </Link>
          )}
        </li>
      ))}
    </ul>
  ) : (
    <div className="flex justify-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-screen-md mx-auto">
        {works.map((work) => (
          <Link
            key={work.id}
            href={work.disabled ? "#" : `/gallery/${work.id}?title=${encodeURIComponent(work.title)}`}
            className={`block ${work.disabled ? "pointer-events-none" : ""}`}
          >
            <div className="p-2 text-gray-400 hover:text-gray-200">
              <Image
                src={work.thumbnail}
                alt={work.title}
                width={800}
                height={600}
                className="w-full h-32 object-cover rounded"
              />
              <h3 className="text-sm font-semibold text-center mt-1">{work.title}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )}
</main>

    </div>
  );
};

export default GalleryPage;
