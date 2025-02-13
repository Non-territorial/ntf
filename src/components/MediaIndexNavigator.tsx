"use client";

import React from "react";

type MediaIndexNavigatorProps = {
  currentIndex: number;
  totalSlides: number;
  onNavigate: (index: number) => void;
};

const MediaIndexNavigator: React.FC<MediaIndexNavigatorProps> = ({
  currentIndex,
  totalSlides,
  onNavigate,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newIndex = Number(e.target.value);
    onNavigate(newIndex); // Notify parent of the new index
  };

  return (
    <div className="flex items-center justify-center space-x-4 text-white py-2 px-4 rounded shadow-md">

      {/* Dropdown for Slide Selection */}
      <select
        value={currentIndex}
        onChange={handleChange}
        className="bg-black text-white border border-gray-700 px-6 py-1 rounded-md focus:outline-none focus:border-gray-500 focus:ring-0"
      >
        {Array.from({ length: totalSlides }, (_, i) => (
          <option key={i} value={i}>
           {i + 1}/{totalSlides} {/* Updated format */}
          </option>
        ))}
      </select>

    </div>
  );
};

export default MediaIndexNavigator;
