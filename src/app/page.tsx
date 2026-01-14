// Purpose: My landing page that renders all sections in vertical scroll layout

import About from '@/components/sections/About';
import Home from '@/components/sections/Home';
import Location from '@/components/sections/Location';
import Menu from '@/components/sections/Menu';
import OurRice from '@/components/sections/OurRice';
import Reviews from '@/components/sections/Reviews';

export default function Page() {
  return (
    <div className="min-h-screen">
      <Home />
      <About />

      <OurRice />

      <Menu />

      <Location />
      
      <Reviews />

    </div>
  );
}