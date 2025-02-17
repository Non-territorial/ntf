

import { NextResponse } from "next/server";
import type { Artist } from "@/app/types/artist";
import artists from "@/data/artists"; // Make sure this path is correct

const getRandomChange = () => (Math.random() - 0.5) * 10; // Between -5% and +5%

export async function GET() {
  // Explicitly annotate updatedArtists as Artist[]
  const updatedArtists: Artist[] = artists.map((artist) => {
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
