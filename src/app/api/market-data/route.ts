

import { NextResponse } from "next/server";
import artists from "@/data/artists"; // Import the artists array
import { Artist } from "@/app/types/artist";

const getRandomChange = () => (Math.random() - 0.5) * 10; // Between -5% and +5%

export async function GET() {
  const updatedArtists = artists.map((artist) => {
    const change = getRandomChange();
    const newValue = Math.max(0.1, artist.value + (artist.value * change) / 100);
    return {
      ...artist,
      value: parseFloat(newValue.toFixed(2)),
      trend: change > 0 ? "up" : "down",
      change: parseFloat(change.toFixed(2)),
    };
  });

  return NextResponse.json(updatedArtists);
}
