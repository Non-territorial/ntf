
"use client";

import MarketTable from "@/components/MarketTable";
import MarketGraph from "@/components/MarketGraph";
import { useEffect, useState } from "react";

interface Artist {
  id: string;
  name: string;
  value: number;
  unit: "g" | "kg" | "ton";
}

export default function Home() {
  const [data, setData] = useState<Artist[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/api/market-data");
      if (response.ok) {
        const result: Artist[] = await response.json();
        setData(result);
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">BAI UEIT</h1>
      <MarketTable />
      <MarketGraph data={data} />
    </div>
  );
}
