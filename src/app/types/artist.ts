// src/app/types/artist.ts
export interface Artist {
    id: string;
    name: string;
    value: number;
    unit: "g" | "kg" | "ton";
    trend: "up" | "down";
    change: number;
  }
  