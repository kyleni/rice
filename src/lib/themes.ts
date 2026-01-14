// Purpose: Theme config for all 5 rice types with color schemes

// primary - side nav
// social - instragram
// accent - quotes and 
// text -
// lightText - for social text
// bigText - for "our rice" big text
// tertriary - footer and instagram handle, top nav

// background
// topNav - top nav wording
// sideNav - side nav wording
// sideSVG - side nav svg icons
// text - text in About section; Core in Our Rice section; footer in the review section
// bigRice - for "our rice" big text
// caption - arrows and caption in menu ssection
// textLocational - for location section texts
// quoteWording - the quoted wording in the review section
// quotes - the quotes in the review section
// footer - footer in the review section -- N/A anymore
// social - instragram word in the review section
// handle - instagram handle in the review section

import { RiceTheme } from '@/lib/types';

// Jollof Rice Theme
export const jollofTheme: RiceTheme = {
  name: 'jollof',
  // colors: {
  //   primary: '#932F34',      // Bold Red
  //   social: '#D64045',       // Coral
  //   accent: '#E8777F',       // Burnt Orange
  //   background: '#FFF5E6',   // Cream
  //   text: '#8B4513',         // Dark Brown
  //   lightText: '#4A5D4C',    // Muted Green
  //   bigText: '#4A5D4C',      // Forest Green
  //   tertriary: '#FF6B35',    // Bright Orange
  // },
  colors: {
    background: '#FFF5E6', 
    topNav: '#FF6B35', 
    topSVG: '#E8777F', 
    sideNav: '#932F34', 
    sideSVG: '#E8777F',
    text: '#8B4513',
    bigRice: '#4A5D4C',
    menu: '#932F34',
    location: '#932F34',
    review: '#932F34',
    quotes: '#E8777F',
    footer: '#8B4513',
    social: '#CC4A1B',
    handle: '#FF6B35',
  }
};

// Coconut Rice Theme
export const coconutTheme: RiceTheme = {
  name: 'coconut',
  colors: {
    background: '#F5F7F4',
    topNav: '#4F7942',
    topSVG: '#E5DED166',
    sideNav: '#7FA086',
    sideSVG: '#4A3C32', 
    text: '#B68F65',
    bigRice: '#ED9121',
    menu: '#7FA086',
    location: '#7FA086',
    review: '#2C4A3B',
    quotes: '#E5DED1',
    footer: '#B68F65',
    social: '#ED9121',
    handle: '#E4B04A',
  }
};

// Fried Rice Theme
export const friedTheme: RiceTheme = {
  name: 'fried',
  colors: {
    background: '#FFF8E7',
    topNav: '#8C6D3F',
    topSVG: '#FFE13533',
    sideNav: '#722F37',
    sideSVG: '#FFE135', 
    text: '#996515',
    choices: '#4A3C32',
    bigRice: '#2D2A26',
    menu: '#7C1F2D',
    location: '#2D2A26',
    review: '#3A1F23',
    quotes: '#F3D497',
    footer: '#B68F65',
    social: '#8C6D3F',
    handle: '#4A3C32',
  }
};

// Iwuk Edesi Theme
export const iwukTheme: RiceTheme = {
  name: 'iwuk',
  colors: {
    background: '#F9F6F2',
    topNav: '#D4B5A6',
    topSVG: '#F9F6F233',
    sideNav: '#A65D57',
    sideSVG: '#D4B5A6', 
    text: '#CC4E2D',
    bigRice: '#786D5F',
    menu: '#7C1F2D',
    location: '#754D42',
    review: '#F44006',
    quotes: '#CFDC70',
    footer: '#D4B5A6',
    social: '#754D42',
    handle: '#A65D57',
  }
};

// Jeweled Rice Theme
export const jeweledTheme: RiceTheme = {
  name: 'jeweled',
  colors: {
    background: '#F8F4FF',
    topNav: '#B8860B',
    topSVG: '#C44D56',
    sideNav: '#F4C430',
    sideSVG: '#B92E3C', 
    text: '#B91D47',
    bigRice: '#724E91',
    menu: '#7C1F2D',
    location: '#7C1F2D',
    review: '#724E91',
    quotes: '#C19BE2',
    // quotes: '#D13E3E',
    footer: '#3E2723',
    social: '#B91D47',
    handle: '#7C1F2D',
  }
};

export const themes = {
  jollof: jollofTheme,
  coconut: coconutTheme,
  fried: friedTheme,
  iwuk: iwukTheme,
  jeweled: jeweledTheme,
} as const;

export const getTheme = (riceType: keyof typeof themes) => themes[riceType];