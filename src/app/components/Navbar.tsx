'use client';

import React from 'react';
import Image from 'next/image';

const Navbar: React.FC = () => {
  const scrollToRegistration = () => {
    const element = document.getElementById('registration-section');
    if (element) {
      const navbarHeight = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="w-fit max-w-[92vw] fixed top-4 left-1/2 transform -translate-x-1/2 z-50 backdrop-blur-lg rounded-full shadow-md">
      <div className="py-2 px-4 md:px-6 flex justify-between items-center gap-6 md:gap-8">
        <div className="flex items-center">
          <a href="https://engg.cambridge.edu.in/" target="_blank" rel="noopener noreferrer">
            <Image
              src="/cit_navlogo.webp"
              alt="CIT Logo"
              width={110}
              height={45}
              className="object-contain"
            />
          </a>
        </div>

        <button
          onClick={scrollToRegistration}
          className="font-['OSK'] tracking-wider uppercase text-black hover:text-gray-600 transition-colors duration-200 whitespace-nowrap bg-transparent"
        >
          Register
        </button>
      </div>
    </div>
  );
};

export default Navbar;
