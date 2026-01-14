// Purpose: Menu section with carousel navigation using arrows or swipe gestures [on mobile]
// for different rice types; syncs with top nav, displays rice images and names

'use client';

import { useState, useRef } from 'react';
import { useRiceStore } from '@/store/rice-store';
import { themes } from '@/lib/themes';
import { RiceType } from '@/lib/constants';
import Image from 'next/image';

const riceTypes: { type: RiceType; label: string; imageName: string }[] = [
  { type: 'jollof', label: 'Nigerian Jollof Rice', imageName: 'jollofRice.webp' },
  { type: 'coconut', label: 'Coconut Rice', imageName: 'coconutRice.webp' },
  { type: 'fried', label: 'Nigerian Fried Rice', imageName: 'friedRice.webp' },
  { type: 'iwuk', label: 'Iwuk Edesi', imageName: 'iwukEdesi.webp' },
  { type: 'jeweled', label: 'Jeweled Rice', imageName: 'jeweledRice.webp' }
];

export default function Menu() {
  const { selectedRice, setSelectedRice } = useRiceStore();
  const theme = themes[selectedRice] || themes.jollof;
  
  const currentIndex = riceTypes.findIndex(rice => rice.type === selectedRice);
  
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);
  const minSwipeDistance = 50;
  
  const goToPrevious = () => {
    const newIndex = currentIndex === 0 ? riceTypes.length - 1 : currentIndex - 1;
    setSelectedRice(riceTypes[newIndex].type);
  };
  
  const goToNext = () => {
    const newIndex = currentIndex === riceTypes.length - 1 ? 0 : currentIndex + 1;
    setSelectedRice(riceTypes[newIndex].type);
  };
  
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchEndX.current = null;
  };
  
  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };
  
  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    
    const distance = touchStartX.current - touchEndX.current;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    
    if (isLeftSwipe) {
      goToNext();
    } else if (isRightSwipe) {
      goToPrevious();
    }
    
    // Reset values
    touchStartX.current = null;
    touchEndX.current = null;
  };
  
  // Get current rice data
  const currentRice = riceTypes[currentIndex] || riceTypes[0];

  return (
    <section 
      id="menu" 
      className="min-h-screen flex flex-col justify-center py-20 pl-28 md:pl-0 lg:pl-72 transition-colors duration-500"
      style={{ backgroundColor: theme.colors.background }}
    >
      <div className="max-w-6xl mx-auto px-4 md:px-6 w-full">
        
        {/* Main Carousel Container */}
        <div 
          className="flex items-center justify-center gap-2 md:gap-16 lg:gap-52"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          
          {/* Left Arrow */}
          <button
            onClick={goToPrevious}
            className="p-1 md:p-2 hover:opacity-70 transition-opacity"
            aria-label="Previous rice type"
          >
            <svg 
              className="w-[30px] h-[30px] md:w-[80px] md:h-[80px]"
              viewBox="0 0 24 24" 
              fill="none"
              stroke={theme.colors.menu}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>
          
          {/* Rice Bowl Image */}
          <div className="flex flex-col items-center">
            <div className="relative w-40 h-40 md:w-64 md:h-64 lg:w-[500px] lg:h-[500px]">
              <Image
                src={`/images/menu/${currentRice.imageName}`}
                alt={currentRice.label}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 160px, (max-width: 1024px) 256px, 500px"
                priority
              />
            </div>
            
            {/* Rice Name */}
            <h2 
              className="mt-4 md:mt-8 text-xs md:text-sm lg:text-base font-medium text-center"
              style={{ color: theme.colors.menu }}
            >
              {currentRice.label}
            </h2>
          </div>
          
          {/* Right Arrow */}
          <button
            onClick={goToNext}
            className="p-1 md:p-2 hover:opacity-70 transition-opacity"
            aria-label="Next rice type"
          >
            <svg 
              className="w-[30px] h-[30px] md:w-[80px] md:h-[80px]"
              viewBox="0 0 24 24" 
              fill="none"
              stroke={theme.colors.menu}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
          
        </div>
        
      </div>
    </section>
  );
}