"use client";

import { Artist } from "@/app/types/artist";

interface MarketTableProps {
  data: Artist[];
}

const MarketTable: React.FC<MarketTableProps> = ({ data }) => {
  if (data.length === 0) {
    return <div className="p-6 text-gray-400">Loading data...</div>;
  }

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full table-fixed border-collapse text-lg">
        <thead>
          <tr className="bg-black text-white text-left border-b border-gray-500">
            <th className="py-2 px-4 w-1/5 text-xl font-semibold">Artist</th>
            <th className="py-2 px-4 w-1/5 text-xl font-semibold">Current Price</th>
            <th className="py-2 px-4 w-1/5 text-xl font-semibold">Unit</th>
            <th className="py-2 px-4 w-1/5 text-xl font-semibold">Trend</th>
            <th className="py-2 px-4 w-1/5 text-xl font-semibold">Change (%)</th>
          </tr>
        </thead>
        <tbody>
  {data.map((artist, index) => (
    <tr
      key={artist.id}
      className="bg-black text-gray-300 border-b border-gray-500"
    >
      <td className="py-1 px-4 w-1/5 text-xl">{artist.name}</td>
      <td className="py-1 px-4 w-1/5 text-xl font-semibold">
        ${artist.value.toLocaleString()}
      </td>
      <td className="py-1 px-4 w-1/5 text-xl">{artist.unit}</td>
      <td
        className={`py-1 px-4 w-1/5 text-xl ${
          artist.trend === "up" ? "text-green-500" : "text-red-500"
        }`}
      >
        {artist.trend === "up" ? "ʌ" : "V"}
      </td>
      <td
        className={`py-1 px-4 w-1/5 text-xl ${
          artist.trend === "up" ? "text-green-500" : "text-red-500"
        }`}
      >
        {artist.change.toFixed(2)}%
      </td>
    </tr>
  ))}
</tbody>
      </table>
    </div>
  );
};

export default MarketTable;
