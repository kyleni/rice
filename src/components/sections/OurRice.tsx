// Purpose: Interactive rice customization section using pre-rendered PNG images 

'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useRiceStore } from '@/store/rice-store';
import { themes } from '@/lib/themes';
import { RiceType } from '@/lib/constants';

type FriedRiceStyle = 'rice' | 'nigerian' | null;

interface IngredientOption {
  id: string;
  name: string;
  isCore: boolean;
  isLiquid?: boolean;
  exclusive?: string[]; 
}

const riceConfigurations: Record<RiceType, {
  core: IngredientOption[];
  optional: IngredientOption[];
  hasStyleSelection?: boolean;
}> = {
  jollof: {
    core: [
      { id: 'rice', name: 'Long-grain rice', isCore: true },
      { id: 'tomatoes', name: 'Fresh tomatoes', isCore: true },
      { id: 'paste', name: 'Tomato paste', isCore: true },
      { id: 'onions', name: 'Onions', isCore: true },
      { id: 'peppers', name: 'Scotch bonnet peppers', isCore: true },
      { id: 'curry', name: 'Curry powder', isCore: true },
      { id: 'thyme', name: 'Fresh thyme', isCore: true },
      { id: 'bay', name: 'Bay leaves', isCore: true },
    ],
    optional: [
      { id: 'plantains', name: 'Dodo', isCore: false },
      { id: 'chicken', name: 'Smoked chicken', isCore: false, isLiquid: true, exclusive: ['fish'] },
      { id: 'fish', name: 'Smoked fish', isCore: false, isLiquid: true, exclusive: ['chicken']},
      { id: 'vegetableStock', name: 'Vegetable stock', isCore: false, isLiquid: true, exclusive: ['chickenStock'] },
      { id: 'chickenStock', name: 'Chicken stock', isCore: false, isLiquid: true, exclusive: ['vegetableStock'] },
    ]
  },
  coconut: {
    core: [
      { id: 'rice', name: 'Long-grain rice', isCore: true },
      { id: 'coconutMilk', name: 'Coconut milk', isCore: true },
      { id: 'curry', name: 'Curry powder', isCore: true },
      { id: 'carrots', name: 'Carrots', isCore: true },
      { id: 'greenBeans', name: 'Green beans', isCore: true },
      { id: 'corn', name: 'Sweet corn', isCore: true },
      { id: 'onions', name: 'Onions', isCore: true },
      { id: 'peppers', name: 'Scotch bonnet peppers', isCore: true },
    ],
    optional: [
      { id: 'kip', name: 'Smoked chicken', isCore: false },
      { id: 'shrimp', name: 'Sautéed shrimp', isCore: false },
      { id: 'plantains', name: 'Plantains', isCore: false },
      { id: 'coconut', name: 'Toasted coconut', isCore: false },
      { id: 'filler', name: 'Filler', isCore: false },
    ]
  },
  fried: {
    core: [],
    optional: [],
    hasStyleSelection: true
  },
  iwuk: {
    core: [
      { id: 'rice', name: 'Long-grain rice', isCore: true },
      { id: 'palmOil', name: 'Palm oil', isCore: true },
      { id: 'driedFish', name: 'Dried fish', isCore: true },
      { id: 'crayfish', name: 'Crayfish', isCore: true },
      { id: 'uziza', name: 'Uziza leaves', isCore: true },
      { id: 'nutmeg', name: 'Calabash nutmeg', isCore: true },
      { id: 'spices', name: 'Local spices', isCore: true },
      { id: 'peppers', name: 'Scotch bonnet peppers', isCore: true },
    ],
    optional: [
      { id: 'leaves', name: 'Uziza leaves', isCore: false },
      { id: 'stock', name: 'Stockfish', isCore: false },
      { id: 'periwinkle', name: 'Periwinkle', isCore: false },
      { id: 'extra crayfish', name: 'Extra Crayfish', isCore: false },
      { id: 'extra dried fish', name: 'Extra Dried Fish', isCore: false },
    ]
  },
  jeweled: {
    core: [
      { id: 'rice', name: 'Basmati rice', isCore: true },
      { id: 'saffron', name: 'Saffron', isCore: true },
      { id: 'butter', name: 'Butter', isCore: true },
      { id: 'cardamom', name: 'Cardamom', isCore: true },
      { id: 'cinnamon', name: 'Cinnamon', isCore: true },
      { id: 'roseWater', name: 'Rose water', isCore: true },
    ],
    optional: [
      { id: 'almonds', name: 'Almonds', isCore: false },
      { id: 'oranges', name: 'Candied orange', isCore: false },
      { id: 'pistachios', name: 'Pistachios', isCore: false },
      { id: 'raisins', name: 'Golden raisins', isCore: false },
      { id: 'zereshk', name: 'Zereshk', isCore: false },
    ]
  }
};

// Fried rice
const friedRiceStyles = {
  rice: {
    core: [
      { id: 'rice', name: 'Long-grain white rice', isCore: true },
      { id: 'eggs', name: 'Eggs', isCore: true },
      { id: 'soySauce', name: 'Soy sauce', isCore: true },
      { id: 'onions', name: 'Green onions', isCore: true },
      { id: 'carrots', name: 'Shredded carrots', isCore: true },
      { id: 'garlic', name: 'Garlic', isCore: true },
      { id: 'onion', name: 'white onion', isCore: true },
      { id: 'sesameOil', name: 'Sesame oil', isCore: true },
      { id: 'pepper', name: 'White pepper', isCore: true },
      { id: 'chestnuts', name: 'Water chestnuts', isCore: true },
      // { id: 'broccoli', name: 'Broccoli', isCore: true },
      // { id: 'mushrooms', name: 'Mushrooms', isCore: true },
    ],
    optional: [
      { id: 'beans', name: 'Bean sprouts', isCore: false },
      { id: 'broccoli', name: 'Broccoli', isCore: false },
      { id: 'tofu', name: 'Tofu', isCore: false },
      { id: 'shrimp', name: 'Sautéed shrimp', isCore: false },
      { id: 'chicken', name: 'Smoked chicken', isCore: false },
    ]
  },
  nigerian: {
    core: [
      { id: 'rice', name: 'Long-grain rice', isCore: true },
      { id: 'carrots', name: 'Carrots', isCore: true },
      { id: 'greenBeans', name: 'Green beans', isCore: true },
      { id: 'curry', name: 'Curry powder', isCore: true },
      { id: 'thyme', name: 'Fresh thyme', isCore: true },
      { id: 'onions', name: 'Spring onions', isCore: true },
      { id: 'stock', name: 'Premium stock cubes', isCore: true },
    ],
    optional: [
      { id: 'peas', name: 'Green peas', isCore: false },
      { id: 'egg', name: 'Egg', isCore: false },
      { id: 'shrimp', name: 'Sautéed shrimp', isCore: false },
      { id: 'chicken', name: 'Smoked chicken', isCore: false },
      { id: 'liver', name: 'Chicken liver', isCore: false },
    ]
  }
};

// Function to generate image filename based on selections
function getImageFilename(riceType: RiceType, activeIngredients: Set<string>, friedStyle?: FriedRiceStyle): string {
  let baseName = riceType === 'iwuk' ? 'iwukEdesi' : riceType;
  
  // Handle fried rice styles
  if (riceType === 'fried') {
    if (!friedStyle) return 'friedRice.png';
    baseName = friedStyle === 'nigerian' ? 'nigeriaFried' : 'friedRice';
    
    if (friedStyle === 'nigerian') {
      return 'nigeriaFried.png';
    }
  }
  
  // Build filename based on active ingredients
  if (activeIngredients.size === 0) {
    // Just the base rice
    if (riceType === 'jollof') return 'jollof.png';
    if (riceType === 'coconut') return 'coconutRice.png';
    if (riceType === 'iwuk') return 'iwukEdesi.png';
    if (riceType === 'jeweled') return 'jeweled.png';
    return `${baseName}.png`;
  }
  
  // For Jollof rice combinations
  if (riceType === 'jollof') {
    let filename = 'jollof';
    if (activeIngredients.has('chicken')) filename += 'Chicken';
    if (activeIngredients.has('fish')) filename += 'Fish';
    if (activeIngredients.has('plantains')) {
      if (filename === 'jollof') filename += 'Plantains';
      else filename += 'Plantains';
    }
    return `${filename}.png`;
  }
  
  // For Coconut rice combinations
  if (riceType === 'coconut') {
    let filename = 'coconut';
    if (activeIngredients.has('kip')) filename += 'Kip';
    if (activeIngredients.has('shrimp')) filename += 'Shrimp';
    if (activeIngredients.has('plantains')) filename += 'Plantains';
    if (activeIngredients.has('plantains and kip')) filename += 'KipPlantains';
    if (filename === 'coconut') filename += 'Rice';
    return `${filename}.png`;
  }
  
  // For Iwuk Edesi
  if (riceType === 'iwuk') {
    if (activeIngredients.has('leaves')) return 'iwukLeaves.png';
    if (activeIngredients.has('leaves')) return 'iwukLeaves.png';
    return 'iwukEdesi.png';
  }
  
  // For Jeweled rice combos
  if (riceType === 'jeweled') {
    // Check for "All" option (all ingredients)
    if (activeIngredients.size === 5) return 'jeweledAll.png';
    
    const hasAlmonds = activeIngredients.has('almonds');
    const hasOranges = activeIngredients.has('oranges');
    const hasPistachios = activeIngredients.has('pistachios');
    const hasRaisins = activeIngredients.has('raisins');
    const hasZereshk = activeIngredients.has('zereshk');

    //  almonds and ornges
    if (!hasRaisins && hasAlmonds && hasOranges && !hasPistachios && !hasZereshk) return 'jewelAlmondOranges.png';
    // only almonds
    if (!hasRaisins && hasAlmonds && !hasOranges && !hasPistachios && !hasZereshk) return 'jewelAlmonds.png';
    // all
    if (hasZereshk && hasOranges && hasRaisins && hasAlmonds && hasPistachios) return 'jeweledAll.png';
    // Oranges, Pistachios, and Zereshk
    if (!hasRaisins && !hasAlmonds && hasOranges && hasPistachios && hasZereshk) return 'jewelNoRaisinsAlmonds.png';
    // jewelNoAlmondRaisins.png too
    // Almonds, Oranges, Pistachios, and Zereshk
    if (!hasRaisins && hasAlmonds && hasOranges && hasPistachios && hasZereshk) return 'jewelNoRaisinsPistachios.png';
    // Almonds, Oranges, Zereshk
    if (!hasRaisins && hasAlmonds && hasOranges && !hasPistachios && hasZereshk) return 'jewelNoRaisins.png';
    // Ornages, Almonds, Pistachios
    if (!hasZereshk && hasOranges && !hasRaisins && hasAlmonds && hasPistachios) return 'jewelNoRaisinsPistachios.png';
    // Zereshk and Oranges
    if (hasZereshk && hasOranges && !hasRaisins && !hasAlmonds && !hasPistachios) return 'jewelZereshkOranges.png';
    // Zereshk, Oranges, and Raisins
    if (hasZereshk && hasOranges && hasRaisins && !hasAlmonds && !hasPistachios) return 'jewelNoAlmondsPistachios.png';
    
    // Default
    return 'jeweled.png';
  }
  
  // Default fallback
  return `${baseName}.png`;
}

export default function OurRice() {
  const selectedRice = useRiceStore((state) => state.selectedRice);
  const theme = themes[selectedRice];
  
  const [activeIngredients, setActiveIngredients] = useState<Set<string>>(new Set());
  
  const [friedRiceStyle, setFriedRiceStyle] = useState<FriedRiceStyle>(null);
  
  let currentConfig = riceConfigurations[selectedRice];
  
  if (selectedRice === 'fried' && friedRiceStyle) {
    currentConfig = {
      core: friedRiceStyles[friedRiceStyle].core,
      optional: friedRiceStyles[friedRiceStyle].optional,
      hasStyleSelection: true
    };
  }
  
  const handleAddIngredient = (ingredientId: string, exclusive?: string[]) => {
    setActiveIngredients(prev => {
      const newSet = new Set(prev);
      
      if (exclusive) {
        exclusive.forEach(id => newSet.delete(id));
      }
      
      newSet.add(ingredientId);
      return newSet;
    });
  };
  
  const handleRemoveIngredient = (ingredientId: string) => {
    setActiveIngredients(prev => {
      const newSet = new Set(prev);
      newSet.delete(ingredientId);
      return newSet;
    });
  };
  
  React.useEffect(() => {
    setActiveIngredients(new Set());
    setFriedRiceStyle(null);
  }, [selectedRice]);
  
  const imageFilename = getImageFilename(selectedRice, activeIngredients, friedRiceStyle);
  
 return (
    <section 
      id="our-rice" 
      className="min-h-screen py-20 px-4 pl-28 md:pl-6 md:px-6 lg:px-8 lg:pl-96 lg:py-44 transition-colors duration-500"
      style={{ backgroundColor: theme.colors.background }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:grid md:grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          
          {/* Bowl Visualization - First on mobile (order-1), Second on desktop (order-2) */}
          <div className="flex justify-center lg:justify-end order-1 md:order-2">
            <div className="relative w-full max-w-[500px]">
              <Image
                src={`/images/ingredients/${imageFilename}`}
                alt={`${selectedRice} rice bowl`}
                width={500}
                height={500}
                className="w-full h-auto"
                priority
                key={imageFilename}
              />
            </div>
          </div>
          
          {/* Ingredient List - Second on mobile (order-2), First on desktop (order-1) */}
          <div className="space-y-6 md:space-y-8 order-2 md:order-1">
            
            {/* Fried Rice */}
            {selectedRice === 'fried' && !friedRiceStyle && (
              <div>
                <h3 
                  className="text-base md:text-xl font-medium mb-4 md:mb-6"
                  style={{ color: theme.colors.choices }}
                >
                  Select Style
                </h3>
                <div className="space-y-3 md:space-y-4">
                  <button
                    onClick={() => setFriedRiceStyle('rice')}
                    className="block w-full text-left py-2 px-3 md:py-3 md:px-4 rounded-lg transition-all duration-200 hover:scale-[1.02]"
                    style={{ 
                      color: theme.colors.choices
                    }}
                  >
                    <span className="font-normal text-sm md:text-base">Rice style</span>
                    <p className="text-xs md:text-sm mt-1" style={{ color: theme.colors.choices }}>
                      Asian-inspired preparation
                    </p>
                  </button>
                  
                  <button
                    onClick={() => setFriedRiceStyle('nigerian')}
                    className="block w-full text-left py-2 px-3 md:py-3 md:px-4 rounded-lg transition-all duration-200 hover:scale-[1.02]"
                    style={{ 
                      color: theme.colors.choices
                    }}
                  >
                    <span className="font-normal text-sm md:text-base">Nigerian style</span>
                    <p className="text-xs md:text-sm mt-1" style={{ color: theme.colors.choices }}>
                      West African preparation
                    </p>
                  </button>
                </div>
              </div>
            )}
            
            {(selectedRice !== 'fried' || friedRiceStyle) && (
              <>
                {/* Back button */}
                {selectedRice === 'fried' && friedRiceStyle && (
                  <button
                    onClick={() => setFriedRiceStyle(null)}
                    className="flex items-center gap-1 md:gap-2 mb-4 md:mb-6 transition-all duration-200 hover:opacity-70"
                    style={{ color: theme.colors.bigRice }}
                  >
                    <span className="text-lg md:text-2xl">←</span>
                    <span className="text-sm md:text-lg font-light">Back to style selection</span>
                  </button>
                )}
                
                {/* Optional Ingredients Section */}
                <div>
                  <ul className="space-y-4 md:space-y-7">
                    {currentConfig.optional.map((ingredient) => {
                      const isActive = activeIngredients.has(ingredient.id);
                      
                      return (
                        <li 
                          key={ingredient.id}
                          className="flex items-center justify-between"
                        >
                          {/* Minus button on the left */}
                          <button
                            onClick={() => handleRemoveIngredient(ingredient.id)}
                            className="text-xl md:text-5xl font-thin transition-all duration-200 hover:scale-110 px-1 md:px-2"
                            style={{ 
                              color: theme.colors.bigRice,
                              opacity: isActive ? 1 : 0.3,
                              cursor: isActive ? 'pointer' : 'not-allowed'
                            }}
                            disabled={!isActive}
                            aria-label={`Remove ${ingredient.name}`}
                          >
                            −
                          </button>
                          
                          {/* Ingredient name */}
                          <span 
                            className="text-lg md:text-6xl font-thin flex-1 px-2 md:px-4"
                            style={{ color: theme.colors.bigRice }}
                          >
                            {ingredient.name}
                          </span>
                          
                          {/* Plus button on the right */}
                          <button
                            onClick={() => handleAddIngredient(ingredient.id, ingredient.exclusive)}
                            className="text-xl md:text-5xl font-thin transition-all duration-200 hover:scale-110 px-1 md:px-2"
                            style={{ 
                              color: theme.colors.bigRice,
                              opacity: !isActive ? 1 : 0.3,
                              cursor: !isActive ? 'pointer' : 'not-allowed'
                            }}
                            disabled={isActive}
                            aria-label={`Add ${ingredient.name}`}
                          >
                            +
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                </div>
                
                {/* Core Ingredients */}
                <div className='px-7 lg:px-16'>
                  <h3 
                    className="text-base md:text-xl font-medium mb-2"
                    style={{ color: theme.colors.text }}
                  >
                    Core Ingredients
                  </h3>
                  <ul className="space-y-1 md:space-y-2">
                    {currentConfig.core.map((ingredient, index) => (
                      <li 
                        key={`core-${index}`}
                        className="flex items-center text-sm md:text-base"
                        style={{ color: theme.colors.text }}
                      >
                        {ingredient.name}
                      </li>
                    ))}
                  </ul>
                </div>
              </>
            )}
            
          </div>
          
        </div>
      </div>
    </section>
  );
}