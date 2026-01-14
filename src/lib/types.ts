import { RiceType } from './constants';

// Theme type definitions
export interface RiceTheme {
  name: RiceType;
  // colors: {
  //   primary: string;
  //   social: string;
  //   accent: string;
  //   background: string;
  //   text: string;
  //   lightText: string;
  //   bigText: string;
  //   tertriary: string;
  // };
  colors: {
    background: string;
    topNav: string;
    topSVG: string;
    sideNav: string;
    sideSVG: string;
    text: string;
    bigRice: string;
    menu: string;
    location: string;
    review: string;
    quotes: string;
    footer: string;
    social: string;
    handle: string;
    choices?: string;
  };
}

// Ingredient type
export interface Ingredient {
  id: string;
  name: string;
  displayName: string;
}

// Section type
export interface Section {
  id: string;
  label: string;
  icon: string;
}

// Review type
export interface Review {
  id: string;
  text: string;
  author: string;
  rating: number;
}