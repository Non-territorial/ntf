

// src/app/api/market-data/route.ts
import { NextResponse } from "next/server";
import { Artist } from "@/app/types/artist";

const artists: Artist[] = [
  { id: "1", name: "Maurizio Cattelan", value: 17656, unit: "g", trend: "up", change: 0 },
  { id: "2", name: "Marina Abramovich", value: 500, unit: "ton", trend: "down", change: 0 },
  { id: "3", name: "Banksy", value: 12789, unit: "g", trend: "up", change: 0 },
  { id: "4", name: "Yayoi Kusama", value: 5000, unit: "kg", trend: "down", change: 0 },
  { id: "6", name: "Andy Warhol", value: 12000, unit: "kg", trend: "up", change: 0 },
  { id: "7", name: "Ai Weiwei", value: 3000000, unit: "ton", trend: "down", change: 0 },
  { id: "8", name: "Olafur Eliasson", value: 1500, unit: "kg", trend: "up", change: 0 },
  { id: "9", name: "Jeff Koons", value: 80000, unit: "kg", trend: "down", change: 0 },
  { id: "10", name: "Kenny Scharf", value: 2856, unit: "kg", trend: "up", change: 0 },
  { id: "11", name: "Oscar Murillo", value: 10, unit: "g", trend: "down", change: 0 },
  { id: "12", name: "Carsten Höller", value: 600, unit: "kg", trend: "up", change: 0 },
  { id: "13", name: "Mark Bradford", value: 16667, unit: "kg", trend: "down", change: 0 },
  { id: "14", name: "Damien Hirst", value: 462963, unit: "ton", trend: "up", change: 0 },
  { id: "15", name: "Richard Prince", value: 266667, unit: "kg", trend: "down", change: 0 },
  { id: "16", name: "Peter Doig", value: 2140, unit: "g", trend: "up", change: 0 },
  { id: "17", name: "Anish Kapoor", value: 800000, unit: "ton", trend: "down", change: 0 },
  { id: "18", name: "Gerard Richter", value: 3380000, unit: "ton", trend: "up", change: 0 },
  { id: "19", name: "Takashi Murakami", value: 960, unit: "kg", trend: "down", change: 0 },
  { id: "20", name: "Christopher Wool", value: 500000, unit: "kg", trend: "up", change: 0 },
  { id: "21", name: "Joseph Kosuth", value: 5500, unit: "kg", trend: "down", change: 0 },
  { id: "22", name: "Nicolas Party", value: 1000, unit: "g", trend: "down", change: 0 },
  { id: "23", name: "Maya Lin", value: 25000, unit: "ton", trend: "down", change: 0 },
  { id: "24", name: "Julian Schnabel", value: 7000, unit: "kg", trend: "down", change: 0 },
  { id: "25", name: "David Hockney", value: 15573, unit: "g", trend: "down", change: 0 },
  { id: "26", name: "Cindy Sherman", value: 1800000000, unit: "ton", trend: "down", change: 0 },
  { id: "27", name: "Zeng Fanzhi", value: 770000, unit: "kg", trend: "down", change: 0 },
  { id: "28", name: "Kara Walker", value: 15000, unit: "kg", trend: "down", change: 0 },
  { id: "29", name: "Anselm Kiefer", value: 5, unit: "g", trend: "down", change: 0 },
  { id: "30", name: "Wolfgang Tillmans", value: 40000, unit: "kg", trend: "down", change: 0 },
  { id: "31", name: "Jenny Saville", value: 300000, unit: "kg", trend: "down", change: 0 },
  { id: "32", name: "William Kentridge", value: 50000000, unit: "ton", trend: "down", change: 0 },
  { id: "33", name: "Kiki Smith", value: 1500, unit: "kg", trend: "down", change: 0 },
  { id: "34", name: "Alex Katz", value: 44000, unit: "kg", trend: "down", change: 0 },
  { id: "35", name: "Isa Genzken", value: 2, unit: "g", trend: "down", change: 0 },
];

const getRandomChange = () => (Math.random() - 0.5) * 10;

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
