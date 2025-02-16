
"use client";

import { useEffect, useState } from "react";
import MarketTable from "@/components/MarketTable";
import { Artist } from "@/app/types/artist";
import Link from "next/link";
import Image from "next/image";

const MarketDashboard: React.FC = () => {
  const [data, setData] = useState<Artist[]>([]);
  const [startIndex, setStartIndex] = useState(0);
  const itemsPerPage = 22; // Now display 22 artists at a time

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
  // If total artists > 23 but <= 46, toggle between showing the first 23 and the remaining ones.
  // If there are 46 or more artists, use modulo cycling.
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
    // No rotation if data.length <= itemsPerPage.
  }, [data.length, itemsPerPage]);

  const displayedArtists: Artist[] =
    data.length > 0 ? data.slice(startIndex, startIndex + itemsPerPage) : [];

  return (

  
   
    <div className="p-2">
      <nav className="w-full py-4 flex justify-center bg-black">
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
      <h1 className="text-3xl font-bold mb-6">BAI UEIT</h1>
      <MarketTable data={displayedArtists} />
    </div>
  );
};

export default MarketDashboard;
