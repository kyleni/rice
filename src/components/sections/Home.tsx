// Purpose: Home/landing section with full-screen continously looping video background 
// respective to rice choice

'use client';

import React, { useEffect, useRef } from 'react';
import { useRiceStore } from '@/store/rice-store';
import { VIDEO_URLS } from '@/lib/constants';

export default function Home() {
  // Get the current selected rice from the global store
  const selectedRice = useRiceStore((state) => state.selectedRice);
  
  const videoRef = useRef<HTMLVideoElement>(null);
  
  // When selected rice changes, reload and play the new video
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.play();
    }
  }, [selectedRice]);

  return (
    <section 
      id="home" 
      className="relative h-screen w-full overflow-hidden"
    >
      {/* Video Background */}
      <video
        ref={videoRef}
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        key={selectedRice}
      >
        <source src={VIDEO_URLS[selectedRice]} type="video/mp4" />
        {/* Fallback text if video doesn't load */}
        Your browser does not support the video tag.
      </video>
      
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/40" />
      
      {/* Content overlay - centered text */}
      {/* <div className="relative z-10 h-full flex flex-col items-center justify-center text-white px-4">
        <h1 className="text-6xl md:text-8xl font-bold mb-4 text-center animate-fade-in">
          {formatRiceName(selectedRice)}
        </h1>
        <p className="text-xl md:text-2xl text-center max-w-2xl animate-slide-up">
          Authentic West African Rice Dishes
        </p>
      </div> */}
    </section>
  );
}