// Purpose: Top navigation bar component displaying all 5 rice options on desktop;
//  hamburger menu on mobile

'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useRiceStore } from '@/store/rice-store';
import { RICE_TYPES } from '@/lib/constants';
import { formatRiceName } from '@/lib/utils';
import { cn } from '@/lib/utils';
import { themes } from '@/lib/themes';

export default function TopNav() {
  const { selectedRice, setSelectedRice } = useRiceStore();
  
  // State for mobile menu open/close
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // Get the current theme
  const theme = themes[selectedRice];

  // Handle rice selection from mobile menu
  const handleRiceSelect = (riceType: typeof selectedRice) => {
    setSelectedRice(riceType);
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between md:justify-end items-center h-20">
            
            {/* Hamburger menu button - visible only on mobile */}
            <button
              onClick={() => setIsMenuOpen(true)}
              className="md:hidden p-2 transition-opacity hover:opacity-70"
              aria-label="Open menu"
            >
              <div
                className="w-8 h-8"
                style={{
                  maskImage: 'url(/icons/hamburger.svg)',
                  WebkitMaskImage: 'url(/icons/hamburger.svg)',
                  maskSize: 'contain',
                  WebkitMaskSize: 'contain',
                  maskRepeat: 'no-repeat',
                  WebkitMaskRepeat: 'no-repeat',
                  maskPosition: 'center',
                  WebkitMaskPosition: 'center',
                  backgroundColor: theme.colors.topNav
                }}
              />
            </button>

            {/* Rice type selector buttons */}
            <div className="hidden md:flex space-x-8">
              {RICE_TYPES.map((riceType) => {
                return (
                  <button
                    key={riceType}
                    onClick={() => setSelectedRice(riceType)}
                    className={cn(
                      "relative px-4 py-2 text-sm font-medium transition-all duration-300",
                      "hover:opacity-80"
                    )}
                    style={{
                      color: theme.colors.topNav,
                      fontWeight: 'normal',
                    }}
                  >
                    {/* Rice name text */}
                    <span className="relative z-10">
                      {formatRiceName(riceType)}
                    </span>

                    {/* Vector selector icon - the SVG I created */}
                    {selectedRice === riceType && (
                      <>
                        {/* SVG selector icon positioned around text */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <Image
                            src={`/icons/${riceType}-selector.svg`}
                            alt={`${riceType} selector`}
                            width={100}
                            height={40}
                            className="absolute animate-fade-in"
                          />
                        </div>
                        
                        {/* "Strikethrough" line effect  */}
                        <div 
                          className={cn(
                            "absolute top-1/2 left-0 right-0 h-[2px]",
                            "opacity-60 animate-slide-in"
                          )}
                          style={{
                            backgroundColor: theme.colors.topSVG,
                            left: '10px',
                            right: '10px',
                            transform: 'translateY(-50%)',
                          }}
                        />
                      </>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </nav>

      {/* mobile menu overlay */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 z-[100] md:hidden flex flex-col transition-colors duration-500"
          style={{ backgroundColor: theme.colors.background }}
        >
          {/* Exit button */}
          <div className="px-4 h-20 flex items-center">
            <button
              onClick={() => setIsMenuOpen(false)}
              className="p-2 transition-opacity hover:opacity-70"
              aria-label="Close menu"
            >
              <div
                className="w-8 h-8"
                style={{
                  maskImage: 'url(/icons/exit.svg)',
                  WebkitMaskImage: 'url(/icons/exit.svg)',
                  maskSize: 'contain',
                  WebkitMaskSize: 'contain',
                  maskRepeat: 'no-repeat',
                  WebkitMaskRepeat: 'no-repeat',
                  maskPosition: 'center',
                  WebkitMaskPosition: 'center',
                  backgroundColor: theme.colors.topNav
                }}
              />
            </button>
          </div>

          {/* Rice options - centered vertically */}
          <div className="flex-1 flex flex-col items-center justify-center space-y-8">
            {RICE_TYPES.map((riceType, index) => (
              <button
                key={riceType}
                onClick={() => handleRiceSelect(riceType)}
                className={cn(
                  "relative px-6 py-3 text-2xl font-medium transition-all duration-300",
                  "hover:opacity-80",
                  "animate-rice-fall"
                )}
                style={{
                  color: theme.colors.topNav,
                  animationDelay: `${index * 80}ms`,
                  animationFillMode: 'backwards'
                }}
              >
                {/* Rice name text */}
                <span className="relative z-10">
                  {formatRiceName(riceType)}
                </span>

                {/* Active state Vector selector icon -- vecotr and strikethrough */}
                {selectedRice === riceType && (
                  <>
                    {/* Vector */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Image
                        src={`/icons/${riceType}-selector.svg`}
                        alt={`${riceType} selector`}
                        width={140}
                        height={50}
                        className="absolute animate-fade-in"
                      />
                    </div>
                    
                    {/* "Strikethrough" line effect */}
                    <div 
                      className={cn(
                        "absolute top-1/2 left-0 right-0 h-[2px]",
                        "opacity-60"
                      )}
                      style={{
                        backgroundColor: theme.colors.topSVG,
                        left: '15px',
                        right: '15px',
                        transform: 'translateY(-50%)',
                      }}
                    />
                  </>
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
}