"use client";

import { useEffect, useState } from "react";

interface Artist {
  id: string;
  name: string;
  value: number;
  unit: "g" | "kg" | "ton";
  trend: "up" | "down";
  change: number;
}

const MarketTable = () => {
  const [data, setData] = useState<Artist[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/market-data");
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
        const result: Artist[] = await response.json();
        setData(result);
      } catch (err) {
        if (err instanceof Error) setError(err.message);
        else setError("Unknown error occurred.");
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 3000); // Update every 3 seconds

    return () => clearInterval(interval); // Cleanup interval
  }, []);

  if (error) return <div className="p-6 text-red-600">Error: {error}</div>;
  if (data.length === 0) return <div className="p-6">Loading...</div>;

  return (
    <div className="overflow-x-auto bg-white shadow-md rounded-lg">
      <table className="min-w-full table-auto">
        <thead>
          <tr className="bg-gray-800">
            <th className="py-3 px-4 text-left">Artist</th>
            <th className="py-3 px-4 text-left">Current Price</th>
            <th className="py-3 px-4 text-left">Unit</th>
            <th className="py-3 px-4 text-left">Trend</th>
            <th className="py-3 px-4 text-left">Change (%)</th>
          </tr>
        </thead>
        <tbody>
          {data.map((artist) => (
            <tr key={artist.id} className="border-t">
              <td className="py-3 px-4 text-gray-900 font-medium">{artist.name}</td>
              <td className="py-3 px-4 text-gray-900 font-medium">${artist.value}</td>
              <td className="py-3 px-4 text-gray-900 font-medium">{artist.unit}</td>
              <td className={`py-3 px-4 ${artist.trend === "up" ? "text-green-500" : "text-red-500"}`}>
                {artist.trend === "up" ? "📈 Rising" : "📉 Falling"}
              </td>
              <td className={`py-3 px-4 ${artist.trend === "up" ? "text-green-500" : "text-red-500"}`}>
                {artist.change}%
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MarketTable;
