// Video URLs from Vercel Blob Storage, for the home section for the video background
export const VIDEO_URLS = {
  jollof: 'https://mma8lcikv56kscpf.public.blob.vercel-storage.com/jollof.mp4',
  coconut: 'https://mma8lcikv56kscpf.public.blob.vercel-storage.com/coconut.mp4',
  fried: 'https://mma8lcikv56kscpf.public.blob.vercel-storage.com/fried.mp4',
  iwuk: 'https://mma8lcikv56kscpf.public.blob.vercel-storage.com/iwuk.mp4',
  jeweled: 'https://mma8lcikv56kscpf.public.blob.vercel-storage.com/jeweled.mp4',
} as const;

// Rice types
export const RICE_TYPES = ['jollof', 'coconut', 'fried', 'iwuk', 'jeweled'] as const;
export type RiceType = typeof RICE_TYPES[number];

// Navigation sections
export const SECTIONS = [
  { id: 'home', label: 'home', icon: 'home' },
  { id: 'about', label: 'about', icon: 'about' },
  { id: 'our-rice', label: 'our rice', icon: 'ourrice' },
  { id: 'menu', label: 'menu', icon: 'menu' },
  { id: 'location', label: 'location', icon: 'location' },
  { id: 'reviews', label: 'reviews', icon: 'reviews' },
] as const;

// Rice ingredients data
// export const RICE_INGREDIENTS = {
//   jollof: {
//     core: ['Long-grain rice', 'Fresh tomatoes', 'Tomato paste', 'Onions', 'Scotch bonnet peppers', 'Curry powder', 'Fresh thyme', 'Bay leaves'],
//     optional: [
//       { id: 'dodo', name: 'Dodo', displayName: 'Fried plantains' },
//       { id: 'chicken', name: 'Smoked chicken', displayName: 'Grilled chicken' },
//       { id: 'fish', name: 'Smoked fish', displayName: 'Smoked fish' },
//       { id: 'vegetables', name: 'Vegetable stock', displayName: 'Mixed vegetables' },
//       { id: 'stock', name: 'Chicken stock', displayName: 'Chicken stock' },
//     ]
//   },
//   coconut: {
//     core: ['Rice', 'Coconut milk', 'Curry powder', 'Onions', 'Scotch bonnet peppers'],
//     optional: [
//       { id: 'carrots', name: 'Carrots', displayName: 'Carrots' },
//       { id: 'greenbeans', name: 'Green beans', displayName: 'Green beans' },
//       { id: 'corn', name: 'Sweet corn', displayName: 'Sweet corn' },
//       { id: 'chicken', name: 'Chicken', displayName: 'Grilled chicken' },
//       { id: 'shrimp', name: 'Shrimp', displayName: 'Shrimp' },
//     ]
//   },
//   fried: {
//     core: ['Rice', 'Mixed vegetables', 'Curry powder', 'Thyme', 'Spring onions', 'Stock cubes'],
//     optional: [
//       { id: 'liver', name: 'Chicken liver', displayName: 'Chicken liver' },
//       { id: 'eggs', name: 'Eggs', displayName: 'Fried eggs' },
//       { id: 'chicken', name: 'Chicken', displayName: 'Chicken pieces' },
//       { id: 'shrimp', name: 'Shrimp', displayName: 'Shrimp' },
//       { id: 'peas', name: 'Green peas', displayName: 'Green peas' },
//     ]
//   },
//   iwuk: {
//     core: ['Rice', 'Palm oil', 'Dried fish', 'Crayfish', 'Uziza leaves', 'Calabash nutmeg', 'Hot peppers'],
//     optional: [
//       { id: 'periwinkles', name: 'Periwinkles', displayName: 'Periwinkles' },
//       { id: 'stockfish', name: 'Stockfish', displayName: 'Stockfish' },
//       { id: 'extrafish', name: 'Extra dried fish', displayName: 'Extra dried fish' },
//       { id: 'crayfish', name: 'Extra crayfish', displayName: 'Extra crayfish' },
//       { id: 'uziza', name: 'Fresh uziza', displayName: 'Fresh uziza leaves' },
//     ]
//   },
//   jeweled: {
//     core: ['Basmati rice', 'Saffron', 'Butter', 'Cardamom', 'Cinnamon', 'Rose water'],
//     optional: [
//       { id: 'orangepeel', name: 'Orange peel', displayName: 'Candied orange peel' },
//       { id: 'pistachios', name: 'Pistachios', displayName: 'Pistachios' },
//       { id: 'almonds', name: 'Almonds', displayName: 'Sliced almonds' },
//       { id: 'barberries', name: 'Barberries', displayName: 'Barberries (zereshk)' },
//       { id: 'carrots', name: 'Carrots', displayName: 'Caramelized carrots' },
//     ]
//   },
// } as const;