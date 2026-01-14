// Purpose: Reviews section with rotating quotes that change based on global rice selection

'use client';

import { useState, useEffect, useRef } from 'react';
import { useRiceStore } from '@/store/rice-store';
import { themes } from '@/lib/themes';
import { RiceType } from '@/lib/constants';
import Image from 'next/image';

// Quotes for each rice type
const riceQuotes: Record<RiceType, string[]> = {
  jollof: [
    "Another jeweled gem added to Houston's food scene",
    "Can a rice restaurant earn a Michellin star?", 
    "The best rice in the world!"
  ],
  coconut: [
    "The coconut rice alone is worth crossing Houston for!",
    "I'd give this place six stars if I could!",
    "Rice has a new gold standard!"
  ],
  fried: [
    "Third Ward's newest treasure serves up halal heaven!",
    "Houston's rice game just leveled up!", 
    "The spice blend had me speechless!"
  ],
  iwuk: [
    "This iwuk edesi transported me straight back to Nigeria!",
    "Reminds me of home",
    "A flavor explosion in every bite!"
  ],
  jeweled: [
    "Each rice dish tells a different story of flavor and heritage!",
    "This is what flavor paradise tastes like!",
    "Houston's tastiest hidden treasure!"
  ]
};

export default function Reviews() {
  const { selectedRice } = useRiceStore();
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const theme = themes[selectedRice] || themes.jollof;
  
  const currentQuotes = riceQuotes[selectedRice] || riceQuotes.jollof;

  const [prevRice, setPrevRice] = useState(selectedRice);

  if (prevRice !== selectedRice) {
    setPrevRice(selectedRice);
    setCurrentQuoteIndex(0);
  }
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentQuoteIndex((prevIndex) => (prevIndex + 1) % 3);
  //   }, 5000);
    
  //   return () => clearInterval(interval);
  // }, []);
  
  // useEffect(() => {
  //   setCurrentQuoteIndex(0);
  // }, [selectedRice]);


  // Instagram posts
  const instagramPosts = [
    'post1.webp', 'post2.webp', 'post3.webp',
    'post4.webp', 'post5.webp', 'post6.webp',
    'post7.webp', 'post8.webp', 'post9.webp',
    'post1.webp', 'post2.webp', 'post3.webp',
    'post4.webp', 'post5.webp', 'post6.webp',
    'post7.webp', 'post8.webp', 'post9.webp'
  ];

  // Instagram carousel
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollPos = 0;
    let animationId: number;
    
    const scroll = () => {
      scrollPos += 0.5; 
      
      if (scrollPos >= scrollContainer.scrollWidth / 2) {
        scrollPos = 0;
      }
      
      scrollContainer.scrollLeft = scrollPos;
      animationId = requestAnimationFrame(scroll);
    };
    
    animationId = requestAnimationFrame(scroll);
    
    // Pause on hover
    const handleMouseEnter = () => {
      cancelAnimationFrame(animationId);
    };
    
    const handleMouseLeave = () => {
      animationId = requestAnimationFrame(scroll);
    };
    
    scrollContainer.addEventListener('mouseenter', handleMouseEnter);
    scrollContainer.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      cancelAnimationFrame(animationId);
      if (scrollContainer) {
        scrollContainer.removeEventListener('mouseenter', handleMouseEnter);
        scrollContainer.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  return (
    <section 
      id="reviews" 
      className="min-h-screen flex flex-col transition-colors duration-500"
      style={{ backgroundColor: theme.colors.background }}
    >
      <div className="flex-1 flex flex-col">
        
        {/* Quotes */}
        <div className="flex-1 flex items-center justify-center px-4 pl-28 md:pl-6 md:px-6 relative">
          <div className="max-w-5xl mx-auto text-center">
            {/* Quote 1 */}
            {currentQuoteIndex === 0 && (
              <h1 
                className="text-xl md:text-5xl lg:text-7xl font-bold leading-tight"
                style={{ 
                  color: theme.colors.review,
                  transform: 'translateY(-40px)'
                }}
              >
                <span style={{ color: theme.colors.quotes }}>&ldquo;</span>
                {currentQuotes[0]}
                <span style={{ color: theme.colors.quotes }}>&rdquo;</span>
              </h1>
            )}
            
            {/* Quote 2 */}
            {currentQuoteIndex === 1 && (
              <h1 
                className="text-xl md:text-5xl lg:text-7xl font-bold leading-tight md:translate-y-[120px]"
                style={{ 
                  color: theme.colors.review,
                  transform: 'translateY(40px)'
                }}
              >
                <span style={{ color: theme.colors.quotes }}>&ldquo;</span>
                {currentQuotes[1]}
                <span style={{ color: theme.colors.quotes }}>&rdquo;</span>
              </h1>
            )}
            
            {/* Quote 3 */}
            {currentQuoteIndex === 2 && (
              <h1 
                className="text-xl md:text-5xl lg:text-7xl font-bold leading-tight md:translate-y-[240px]"
                style={{ 
                  color: theme.colors.review,
                  transform: 'translateY(60px)'
                }}
              >
                <span style={{ color: theme.colors.quotes }}>&ldquo;</span>
                {currentQuotes[2]}
                <span style={{ color: theme.colors.quotes }}>&rdquo;</span>
              </h1>
            )}
          </div>
        </div>

        {/* Instagram Section */}
        <div className="pb-16 lg:pb-0">
          <div className="text-center mb-4 pl-28 md:pl-0">
            <p 
              className="text-xs md:text-base font-medium mb-1"
              style={{ color: theme.colors.social }}
            >
              Instagram
            </p>
            <a
              href="https://www.instagram.com/lena_benaa"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs md:text-base font-extralight transition-colors duration-300"
              style={{ color: theme.colors.handle }}
            >
              @rice
            </a>
          </div>
          
          <div className="relative overflow-hidden">
            <div 
              ref={scrollRef}
              className="flex gap-2 px-2 md:px-6 overflow-x-hidden" 
              style={{ 
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
              }}
            >
              <style jsx>{`
                div::-webkit-scrollbar {
                  display: none; /* Chrome/Safari/Opera */
                }
              `}</style>
              
              {instagramPosts.map((post, index) => (
                <div 
                  key={index}
                  className="relative w-16 h-16 md:w-20 md:h-20 lg:h-28 lg:w-28 flex-shrink-0 overflow-hidden rounded-lg md:rounded-xl hover:opacity-90 transition-opacity duration-300 cursor-pointer"
                >
                  <Image
                    src={`/images/instagram/${post}`}
                    alt={`Instagram post ${(index % 9) + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 64px, (max-width: 1024px) 80px, 112px"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>

      {/* Footer */}
      <footer className="py-4 md:py-6">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="flex flex-wrap justify-center gap-6 md:gap-11 text-xs md:text-sm"
            style={{ color: theme.colors.footer }}
          >
            <a 
              href="#" 
            >
              contact
            </a>
            <a 
            >
              terms
            </a>
            <a 
              href="https://github.com/kyleni" 
            >
              github
            </a>
            <a 
              href="https://www.kyleni.com"
            >
              designed + developed by kyleni
            </a>
          </div>
        </div>
      </footer>
      
    </section>
  );
}