"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";

export default function LandingPage() {
  const router = useRouter();

  return (
    <div className="flex flex-col justify-between items-center h-screen bg-dark-grey text-center text-white font-isocpeur">
      {/* Top Navbar */}
      <nav className="w-full bg-black py-4 text-white text-lg tracking-wide">
        NONTERRITORIAL 
      </nav>

      {/* Main Content */}
      <div className="flex flex-col items-center">
  <Image
    src="/logo.png"
    alt="Arrows and Circle"
    width={300}
    height={300}
    className="object-contain"
  />
  <span
    className="mt-8 text-white text-xl hover:text-orange-400 cursor-pointer"
    onClick={() => router.push("/home")}
  >
    ENTER
  </span>
</div>


      {/* Bottom Tagline */}
      <footer className="text-gray-500 text-sm pb-8">
        REDUCING THE DISTANCE BETWEEN ART AND LIFE
      </footer>
    </div>
  );
}
