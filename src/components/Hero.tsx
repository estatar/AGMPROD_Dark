import React from 'react';

export function Hero() {
  return (
    <header className="relative h-[60vh] flex items-center justify-center pt-16">
      <div className="absolute inset-0">
        <img
          src="https://st.depositphotos.com/1001855/3699/i/450/depositphotos_36991483-stock-photo-makeup-and-cosmetics-set.jpg"
          alt="Cosmetic products business"
          className="w-full h-full object-cover brightness-50"
        />
      </div>
      <div className="relative text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">AGMPROD</h1>
        <p className="text-xl md:text-2xl font-light max-w-3xl mx-auto">
          Elevating beauty standards worldwide. Trusted experts in cosmetic import and export.
        </p>
      </div>
    </header>
  );
}