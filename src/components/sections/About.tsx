// Purpose: About section

'use client';

import React from 'react';
import { useRiceStore } from '@/store/rice-store';
import { themes } from '@/lib/themes';

export default function About() {
  // Get current rice selection to apply theme colors
  const selectedRice = useRiceStore((state) => state.selectedRice);
  const theme = themes[selectedRice];

  return (
    <section 
      id="about" 
      className="min-h-screen py-20 px-4 pl-32 md:pl-6 md:px-6 lg:px-8"
      style={{ backgroundColor: theme.colors.background }}
    >
      <div className="max-w-4xl mx-auto">

        {/* Our Story */}
        <div className="mb-8 md:mb-8">
          <h3 
            className="text-sm md:text-xl font-semibold mb-2 md:mb-4 text-center"
            style={{ color: theme.colors.text }}
          >
            Our Story
          </h3>
          <p className="text-xs md:text-base leading-relaxed mb-4 text-center" style={{ color: theme.colors.text }}>
            We're bringing the vibrant flavors of West African rice dishes to the heart of Houston. 
            Born from a passion to share our heritage through food, our restaurant celebrates the 
            rich traditions of Nigerian cuisine while adding contemporary twists that reflect our Houston home.
          </p>
        </div>

        {/* Our Rice */}
        <div className="mb-8 md:mb-12">
          <h3 
            className="text-sm md:text-xl font-semibold mb-2 md:mb-4 text-center"
            style={{ color: theme.colors.text }}
          >
            Our Rice
          </h3>
          <p className="text-xs md:text-base leading-relaxed mb-4 text-center" style={{ color: theme.colors.text }}>
            Each grain tells a story. From the bold spices of our Jollof rice to the aromatic 
            Coconut rice, we source local premium ingredients to create authentic dishes that 
            honor West African culinary traditions while supporting local Texas farmers. Our 
            signature Iwuk Edesi pays homage to traditional Nigerian cooking methods, while our 
            Jeweled rice showcases the diverse influences across African cuisine.
          </p>
        </div>

        {/* Our Kitchen */}
        <div className="mb-8 md:mb-12">
          <h3 
            className="text-sm md:text-xl font-semibold mb-2 md:mb-4 text-center"
            style={{ color: theme.colors.text }}
          >
            Our Kitchen
          </h3>
          <p className="text-xs md:text-base leading-relaxed mb-4 text-center" style={{ color: theme.colors.text }}>
            Our commitment to inclusivity and tradition starts with our 100% halal kitchen. 
            Our chefs blend time-honored cooking techniques with modern culinary innovation, 
            ensuring all dishes meet halal standards while preserving authentic flavors. 
            Every dish is crafted with respect for tradition while embracing Houston's dynamic 
            food culture. We carefully select our spices and ingredients from both local Houston 
            vendors and specialized African suppliers to ensure the most authentic flavors.
          </p>
        </div>

        {/* Our Community */}
        <div className="mb-8 md:mb-12">
          <h3 
            className="text-sm md:text-xl font-semibold mb-2 md:mb-4 text-center"
            style={{ color: theme.colors.text }}
          >
            Our Community
          </h3>
          <p className="text-xs md:text-base leading-relaxed mb-4 text-center" style={{ color: theme.colors.text }}>
            Located in 3rd Ward, we're more than just a restaurant – we're a gathering place 
            where Houston's diverse community comes together to experience the warmth of African 
            hospitality. Whether you're familiar with West African cuisine or trying it for the 
            first time, our team is here to guide you through a memorable dining experience.
          </p>
        </div>

        {/* Halal Certification */}
        <div className="mb-8 md:mb-12">
          <h3 
            className="text-sm md:text-xl font-semibold mb-2 md:mb-4 text-center"
            style={{ color: theme.colors.text }}
          >
            Halal Certification
          </h3>
          <p className="text-xs md:text-base leading-relaxed text-center" style={{ color: theme.colors.text }}>
            We take pride in serving 100% halal dishes, certified by [Certification Body]. 
            Our dedication to halal preparation extends from our ingredients sourcing to our 
            cooking methods, ensuring a dining experience that aligns with Islamic dietary 
            guidelines while delivering authentic West African flavors.
          </p>
        </div>
      </div>
    </section>
  );
}