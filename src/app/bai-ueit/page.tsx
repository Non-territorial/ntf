
"use client";

import { useEffect, useState } from "react";
import MarketTable from "@/components/MarketTable";
import { Artist } from "@/app/types/artist";
import Link from "next/link";
import Image from "next/image";

const MarketDashboard: React.FC = () => {
  const [data, setData] = useState<Artist[]>([]);
  const [startIndex, setStartIndex] = useState(0);
  const itemsPerPage = 20; // Now display 20 artists at a time
  const imageUrl = "https://u8fdpn5uky8lbnzf.public.blob.vercel-storage.com/background%20room%20I-jazt9JmGncYHuf0JYULeKzTrq1DTv2.png"; // Replace with actual storage URL

  // Fetch data from your API every 3 seconds
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/market-data");
        if (!response.ok)
          throw new Error(`HTTP error! Status: ${response.status}`);
        const result: Artist[] = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching market data:", error);
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 3000);
    return () => clearInterval(interval);
  }, []);

  // Rotate displayed artists every 10 seconds.
  useEffect(() => {
    if (data.length > itemsPerPage && data.length <= 2 * itemsPerPage) {
      const toggleInterval = setInterval(() => {
        setStartIndex((prevIndex) => (prevIndex === 0 ? itemsPerPage : 0));
      }, 10000);
      return () => clearInterval(toggleInterval);
    } else if (data.length >= 2 * itemsPerPage) {
      const cycleInterval = setInterval(() => {
        setStartIndex((prevIndex) => (prevIndex + itemsPerPage) % data.length);
      }, 10000);
      return () => clearInterval(cycleInterval);
    }
  }, [data.length, itemsPerPage]);

  const displayedArtists: Artist[] =
    data.length > 0 ? data.slice(startIndex, startIndex + itemsPerPage) : [];

  return (
    <div
  className="relative flex flex-col min-h-screen bg-cover bg-center"
  style={{ backgroundImage: `url(${imageUrl})` }} // ✅ Background Image
>
  {/* Dark Overlay to Improve Readability */}
  <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>

  {/* Navbar */}
  <nav className="relative w-full py-4 flex justify-center bg-black z-10 px-6">
    <Link href="/gallery">
      <Image
        src="/logo.png"
        alt="Logo"
        width={40}
        height={40}
        className="cursor-pointer"
      />
    </Link>
  </nav>

  {/* Page Title - Moved to Top Left */}
  <h1 className="relative text-3xl font-bold text-white z-10 left-14">
    BAI UEIT
  </h1>

  {/* Table Container - Positioned for Back Wall Fit */}
  <div
    className="relative z-10 mx-auto p-4"
    style={{
      position: "absolute",
      top: "50%", // ✅ Move table upwards
      left: "50%", // ✅ Center horizontally
      transform: "translate(-50%, -55%) perspective(1000px)", // ✅ Perfect perspective and positioning
      maxWidth: "1400px", // ✅ Fits the back wall
      width: "90%", // ✅ Scales well on different screens
      backgroundColor: "rgba(0, 0, 0, 0.85)", // ✅ Better blending
      borderRadius: "8px", // ✅ Softer edges
      padding: "12px",
      boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.6)", // ✅ Creates depth effect
    }}
  >
    <MarketTable data={displayedArtists} />
  </div>
</div>

  );
};

export default MarketDashboard;
