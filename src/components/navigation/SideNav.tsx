// Purpose: Side navigation component with section links and active state 
// indicators, appears after scrolling past home

'use client';

import React, { useEffect, useState } from 'react';
import { SECTIONS } from '@/lib/constants';
import { scrollToSection } from '@/lib/utils';
import { cn } from '@/lib/utils';
import { useRiceStore } from '@/store/rice-store';
import { themes } from '@/lib/themes';

export default function SideNav() {
  // Them based on ice selection
  const selectedRice = useRiceStore((state) => state.selectedRice);
  const theme = themes[selectedRice];

  // Visible section tracking
  const [activeSection, setActiveSection] = useState<string>('');
  
  const [showSideNav, setShowSideNav] = useState(false);
  
  // adjusting the vectors' positions
  const vectorPositionsDesktop = {
    about: { left: '12px', top: '5px' },
    'our-rice': { left: '4px', top: '5px' },
    menu: { left: '108px', top: '5px' },
    location: { left: '-4px', top: '5px' },
    reviews: { left: '-10px', top: '5px' }
  };

  const vectorPositionsMobile = {
    about: { left: '4px', top: '2px' },
    'our-rice': { left: '2px', top: '2px' },
    menu: { left: '36px', top: '2px' },
    location: { left: '-2px', top: '2px' },
    reviews: { left: '-4px', top: 'px' }
  };

  // Custom scroll spy implementation
  useEffect(() => {
    const handleScroll = () => {
      // Show side nav when scrolled more than 100px from top
      const scrolled = window.scrollY > 100;
      setShowSideNav(scrolled);
      
      // Determine which section is active
      const scrollPosition = window.scrollY + 100;
      
      for (const section of SECTIONS) {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };
    
    // Checking initial scroll position
    handleScroll();
    
    // Scroll listener
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Don't render if at the home section
  if (!showSideNav) return null;

  return (
    <nav 
      className={cn(
        "fixed z-40 transition-all duration-500",

        "left-4 top-24",

        "md:left-8 md:top-1/2 md:-translate-y-1/2",
        showSideNav ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
      )}
    >
{/* Container with vertical separator line on mobile */}
      <div className="flex">
        <ul className="space-y-11 md:space-y-4">
          {SECTIONS.map((section) => (
            <li key={section.id}>
              <button
                onClick={() => scrollToSection(section.id)}
                className={cn(
                  "text-left transition-all duration-300 relative",
                  "hover:translate-x-1",
                )}
                style={{
                  color: theme.colors.sideNav
                }}
              >
                <span className="text-xl font-medium md:text-7xl md:font-bold">
                  {section.label}
                </span>
                
                {activeSection === section.id && section.id !== 'home' && (
                  <>
                    <div 
                      className="absolute inset-0 hidden md:flex items-center justify-center pointer-events-none"
                      style={{
                        transform: `translate(${vectorPositionsDesktop[section.id as keyof typeof vectorPositionsDesktop]?.left || '0px'}, ${vectorPositionsDesktop[section.id as keyof typeof vectorPositionsDesktop]?.top || '0px'})`
                      }}
                    >
                      <div
                        className="w-[300px] h-[100px]"
                        style={{
                          maskImage: `url(/icons/${section.id}-selector.svg)`,
                          WebkitMaskImage: `url(/icons/${section.id}-selector.svg)`,
                          maskSize: 'contain',
                          WebkitMaskSize: 'contain',
                          maskRepeat: 'no-repeat',
                          WebkitMaskRepeat: 'no-repeat',
                          maskPosition: 'center',
                          WebkitMaskPosition: 'center',
                          backgroundColor: theme.colors.sideSVG
                        }}
                      />
                    </div>

                    <div 
                      className="absolute inset-0 flex md:hidden items-center justify-center pointer-events-none"
                      style={{
                        transform: `translate(${vectorPositionsMobile[section.id as keyof typeof vectorPositionsMobile]?.left || '0px'}, ${vectorPositionsMobile[section.id as keyof typeof vectorPositionsMobile]?.top || '0px'})`
                      }}
                    >
                      <div
                        className="w-[100px] h-[34px]"
                        style={{
                          maskImage: `url(/icons/${section.id}-selector.svg)`,
                          WebkitMaskImage: `url(/icons/${section.id}-selector.svg)`,
                          maskSize: 'contain',
                          WebkitMaskSize: 'contain',
                          maskRepeat: 'no-repeat',
                          WebkitMaskRepeat: 'no-repeat',
                          maskPosition: 'center',
                          WebkitMaskPosition: 'center',
                          backgroundColor: theme.colors.sideSVG
                        }}
                      />
                    </div>
                  </>
                )}
              </button>
            </li>
          ))}
        </ul>

        {/* Vertical separator line that I have on mobile only */}
        <div 
          className="md:hidden w-px ml-4 self-stretch"
          style={{ backgroundColor: theme.colors.sideNav, opacity: 0.3 }}
        />
      </div>
    </nav>
  );
}