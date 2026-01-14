import { create } from 'zustand';
import { RiceType } from '@/lib/constants';

interface RiceStore {
  selectedRice: RiceType;
  
  selectedIngredients: Record<RiceType, string[]>;
  
  setSelectedRice: (rice: RiceType) => void;
  toggleIngredient: (rice: RiceType, ingredientId: string) => void;
  clearIngredients: (rice: RiceType) => void;
}

export const useRiceStore = create<RiceStore>((set) => ({
  // Initial state
  selectedRice: 'jollof',
  
  selectedIngredients: {
    jollof: [],
    coconut: [],
    fried: [],
    iwuk: [],
    jeweled: [],
  },
  
  setSelectedRice: (rice) => set({ selectedRice: rice }),
  
  toggleIngredient: (rice, ingredientId) => set((state) => {
    const currentIngredients = state.selectedIngredients[rice];
    const newIngredients = currentIngredients.includes(ingredientId)
      ? currentIngredients.filter(id => id !== ingredientId)
      : [...currentIngredients, ingredientId];
    
    return {
      selectedIngredients: {
        ...state.selectedIngredients,
        [rice]: newIngredients,
      },
    };
  }),
  
  clearIngredients: (rice) => set((state) => ({
    selectedIngredients: {
      ...state.selectedIngredients,
      [rice]: [],
    },
  })),
}));