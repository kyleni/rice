// Purpose: Location section with Google Maps embed (no API key, i needed to pay, so didn't implement)

'use client';

import { useRiceStore } from '@/store/rice-store';
import { themes } from '@/lib/themes';

export default function Location() {
  // Get the current selected rice from the global store
  const { selectedRice } = useRiceStore();
  
  // Get the theme colors based on the selected rice type
  const theme = themes[selectedRice] || themes.jollof;

  return (
    <section 
      id="location" 
      className="min-h-screen flex flex-col justify-center py-20 pl-28 md:pl-0 transition-colors duration-500"
      style={{ backgroundColor: theme.colors.background }}
    >
      <div className="max-w-6xl mx-auto px-4 md:px-6 w-full">
        
        {/* Contact info */}
        <div className="text-center mb-8 md:mb-12">
          {/* Address */}
          <div className="mb-4 md:mb-8">
            <address 
              className="not-italic text-xs md:text-base leading-relaxed transition-colors duration-500"
              style={{ color: theme.colors.location }}
            >
              0000 Emancipation Avenue<br />
              Houston, TX 77004<br />
              Third Ward District
            </address>
          </div>

          {/* Phone Number */}
          <div className="mb-4 md:mb-8">
            <a 
              href="tel:+17135550123"
              className="text-xs md:text-base hover:underline transition-all duration-300"
              style={{ color: theme.colors.location }}
            >
              (713) 281-832X
            </a>
          </div>

          {/* Hours */}
          <div className="mb-4 md:mb-8">
            <div 
              className="text-xs md:text-base leading-relaxed transition-colors duration-500"
              style={{ color: theme.colors.location }}
            >
              <p>Monday - Thursday: 11:30 AM - 9:00 PM</p>
              <p>Friday - Saturday: 11:30 AM - 10:00 PM</p>
              <p>Sunday: 12:00 PM - 5:00 PM</p>
            </div>
          </div>

          {/* Email -clickable mailto link */}
          <div className="mb-4 md:mb-8">
            <a 
              href="#"
              className="text-xs md:text-base hover:underline transition-all duration-300"
              style={{ color: theme.colors.location }}
            >
              order@rice.bowl
            </a>
          </div>
        </div>

        {/* Google Map with Oval Shape */}
        <div className="relative max-w-4xl mx-auto mb-6 md:mb-8">
          {/* Oval-shaped map container */}
          <div 
            className="relative w-full h-[200px] md:h-[400px] overflow-hidden shadow-xl"
            style={{
              borderRadius: '50%/50%',
              backgroundColor: theme.colors.background,

            }}
          >
            <iframe
              // src="https://maps.google.com/maps?q=2425%20Emancipation%20Avenue,%20Houston,%20TX%2077004&t=&z=15&ie=UTF8&iwloc=&output=embed"
              src="https://maps.google.com/maps?q=1901%20Emancipation%20Ave%2C%20Houston%2C%20TX%2077003&z=15&output=embed"
              // <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3464.21897332114!2d-95.36112802401246!3d29.742375232818837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640bf1b97ca39cf%3A0xb25396b07b6c8b75!2s1901%20Emancipation%20Ave%2C%20Houston%2C%20TX%2077003!5e0!3m2!1sen!2sus!4v1768099209203!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
              width="100%"
              height="100%"
              frameBorder="0"
              style={{ 
                border: 0,
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%) scale(1.0)', // Scale up to fill oval
                width: '130%',
                height: '130%',
              }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Rice Restaurant Location"
              aria-label="Google Maps showing Rice Restaurant location at 2425 Emancipation Avenue"
            ></iframe>
          </div>
          
        </div>

        {/* Parking note */}
        <div className="text-center">
          <p 
            className="text-xs md:text-sm transition-colors duration-500"
            style={{ color: theme.colors.location }}
          >
            Free parking available in our dedicated lot. Additional street parking available on Emancipation Avenue.
          </p>
        </div>
      </div>
    </section>
  );
}