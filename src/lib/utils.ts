import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function scrollToSection(sectionId: string) {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}

export function formatRiceName(riceType: string): string {
  const names: Record<string, string> = {
    jollof: 'Jollof Rice',
    coconut: 'Coconut Rice',
    fried: 'Fried Rice',
    iwuk: 'Iwuk Edesi',
    jeweled: 'Jeweled Rice',
  };
  return names[riceType] || riceType;
}