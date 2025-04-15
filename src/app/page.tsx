'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import MapComponent from '@/components/Map';

export default function LandingPage() {
  const router = useRouter();

  return (
    <div className="relative h-screen w-screen overflow-hidden text-white font-isocpeur">
      <div className="absolute inset-0 z-0">
        <MapComponent />
      </div>

      {/* Main content container */}
      <div className="relative z-10 flex flex-col justify-between items-center h-full text-center pointer-events-none">
        <h1 className="py-4 text-white text-lg">
          NONTERRITORIAL
        </h1>
        <div className="flex flex-col items-center px-4 py-8 rounded-lg pointer-events-auto">
          <Image
            src="/logo.png"
            alt="Arrows and Circle"
            width={300}
            height={300}
            className="object-contain max-w-[70%] sm:max-w-[50%] md:max-w-[40%] lg:max-w-[30%]"
          />
          <span
            className="mt-8 text-white text-lg sm:text-xl md:text-xl hover:text-gray-300 cursor-pointer"
            onClick={() => router.push('/home')}
          >
            ENTER
          </span>
        </div>
        <footer className="text-gray-500 text-xs sm:text-sm pb-8 pointer-events-auto">
          REDUCING THE DISTANCE BETWEEN ART AND LIFE
        </footer>
      </div>
    </div>
  );
}