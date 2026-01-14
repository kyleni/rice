// Purpose: 

'use client';

import React, { useEffect } from 'react';
import { useRiceStore } from '@/store/rice-store';
// import { themes } from '@/lib/themes';

export default function ThemeProvider({ 
  children 
}: { 
  children: React.ReactNode 
}) {
  const selectedRice = useRiceStore((state) => state.selectedRice);
  
  useEffect(() => {
    // const theme = themes[selectedRice];
    
    // const root = document.documentElement;
    
    // root.style.setProperty('--color-primary', theme.colors.primary);
    // root.style.setProperty('--color-social', theme.colors.social);
    // root.style.setProperty('--color-accent', theme.colors.accent);
    // root.style.setProperty('--color-background', theme.colors.background);
    // root.style.setProperty('--color-text', theme.colors.text);
    // root.style.setProperty('--color-light-text', theme.colors.lightText);
    // root.style.setProperty('--color-big-text', theme.colors.bigText);
    // root.style.setProperty('--color-tertriary', theme.colors.tertriary);    
    
    document.body.className = document.body.className
      .replace(/rice-theme-\w+/g, '') 
      .concat(` rice-theme-${selectedRice}`);
      
  }, [selectedRice]);
  
  return <>{children}</>;
}