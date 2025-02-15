

import { NextResponse } from "next/server";

interface Artist {
  id: string;
  name: string;
  value: number;
  unit: "g" | "kg" | "ton";
  trend: "up" | "down";
  change: number;
}

const artists: Artist[] = [
  { id: "1", name: "Maurizio Cattelan", value: 5, unit: "g", trend: "up", change: 0 },
  { id: "2", name: "Marina Abramovich", value: 50, unit: "kg", trend: "down", change: 0 },
  { id: "3", name: "Banksy", value: 3, unit: "ton", trend: "up", change: 0 },
  { id: "4", name: "Yayoi Kusama", value: 7, unit: "g", trend: "down", change: 0 },
  { id: "5", name: "Andy Warhol", value: 100, unit: "kg", trend: "up", change: 0 },
];

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

