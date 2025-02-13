"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import Image from "next/image";
import mediaData from "@/data/media.json"; // Import JSON file for media
import worksData from "@/data/works.json";  // Import JSON file for works
import VideoPlayer from "@/components/VideoPlayer";
import MediaIndexNavigator from "@/components/MediaIndexNavigator";

type MediaItem = {
  id: string;
  type: "image" | "video" | "list";
  src?: string;
  title?: string;
  tags?: string[];
  titles?: { name: string; view: string }[];
};

type Work = {
  id: string;
  title: string;
  thumbnail: string;
};

// Ensure correct typing for media data
const mediaDataTyped = mediaData as Record<string, MediaItem[]>;

const GalleryDetailPage = () => {
  const params = useParams();
  const workId = params?.id as string;

  // Find work details
  const currentWork = (worksData as Work[]).find((work) => work.id === workId);
  let mediaItems: MediaItem[] = mediaDataTyped[workId] || [];

  // Ensure list slide appears only once at the end
  const listSlideIndex = mediaItems.findIndex(item => item.type === "list");
  if (listSlideIndex !== -1) {
    const listSlide = mediaItems[listSlideIndex];
    mediaItems = [...mediaItems.filter((_, index) => index !== listSlideIndex), listSlide];
  }

  // State for current slide
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentMedia = mediaItems[currentIndex] || {};

  // Next & Prev controls
  const goToNext = () => setCurrentIndex((prevIndex) => (prevIndex + 1) % mediaItems.length);
  const goToPrev = () => setCurrentIndex((prevIndex) => (prevIndex === 0 ? mediaItems.length - 1 : prevIndex - 1));
  const handleNavigate = (index: number) => setCurrentIndex(index);

  // Function to dynamically generate optimized image URL
  const customLoader = ({ src }: { src: string }) => {
    return `https://images.weserv.nl/?url=${encodeURIComponent(src)}&w=800&h=600&q=75`;
  };
  

  return (
    <div className="bg-black text-white flex flex-col items-center">
      {/* Navbar */}
      <nav className="w-full py-4 flex justify-center bg-black">
        <Link href="/gallery">
          <Image src="/logo.png" alt="Logo" width={40} height={40} className="cursor-pointer" />
        </Link>
      </nav>

      <h1 className="text-3xl font-bold mt-4">{currentWork?.title || "Untitled"}</h1>

      {/* Carousel */}
      <div className="relative w-full max-w-8xl mt-8">
        <div className="w-full h-[80vh] flex items-center justify-center bg-black">
          {currentMedia.type === "image" && currentMedia.src ? (
            <Image
            loader={customLoader}
            src={currentMedia.src || ""}
            alt={currentMedia.title || "Media"}
            width={800}
            height={600}
            className="w-auto h-full object-contain"
            priority
          />
          
          ) : currentMedia.type === "video" && currentMedia.src ? (
            <VideoPlayer playbackId={currentMedia.src} title={currentMedia.title} />
          ) : currentMedia.type === "list" ? (
            /* Render List Slide */
            <div className="max-h-[80vh] overflow-y-auto px-6 py-4 bg-black w-[60%] max-w-2xl mx-auto mt-24 mb-24">
              <ul className="text-left space-y-2 w-full">
                {Array.isArray(currentMedia.titles) && currentMedia.titles.length > 0 ? (
                  currentMedia.titles.map((item, index) => (
                    <li key={index} className="flex justify-between items-center text-lg border-b border-gray-600 py-2">
                      <span>{item.name}</span>
                      {item.view && item.view.trim() !== "" && (
                        <a href={item.view} target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400 no-underline">
                          View
                        </a>
                      )}
                    </li>
                  ))
                ) : (
                  <p className="text-gray-400 text-center">No titles available.</p>
                )}
              </ul>
            </div>
          ) : null}
        </div>

        {/* Subtitle Box */}
        {currentMedia.type !== "list" && (
          <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 bg-black/65 text-white text-center py-2 px-4 rounded-lg max-w-md">
            {currentMedia.title || "No title available"}
          </div>
        )}

        {/* Navigation Arrows */}
        <button className="absolute left-4 top-1/2 transform -translate-y-1/2 hover:scale-110 transition-transform" onClick={goToPrev}>
          <Image src="/icons/arrow-left.png" alt="Previous" width={40} height={40} className="object-contain" />
        </button>
        <button className="absolute right-4 top-1/2 transform -translate-y-1/2 hover:scale-110 transition-transform" onClick={goToNext}>
          <Image src="/icons/arrow-right.png" alt="Next" width={40} height={40} className="object-contain" />
        </button>

        {/* Media Index Navigator */}
        <div className="mt-4">
          <MediaIndexNavigator currentIndex={currentIndex} totalSlides={mediaItems.length} onNavigate={handleNavigate} />
        </div>
      </div>
    </div>
  );
};

export default GalleryDetailPage;
