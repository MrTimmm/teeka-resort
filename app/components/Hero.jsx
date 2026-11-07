'use client';

import Navbar from './Navbar';

/*
  bark #3B1D12 | deep #2B140C | leaf #8DC63F | moss #6FA83A | cream #F6F3EC
*/

const Hero = () => {
  return (
    <main className="relative flex min-h-[100svh] w-full flex-col overflow-hidden bg-[#2B140C] font-sans text-white">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/resort.webp')" }}
      />

      {/* Warm brown overlays */}
      <div className="absolute inset-0 bg-[#2B140C]/45" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#2B140C]/35 via-transparent to-[#2B140C]/85" />

      {/* Navbar */}
      <Navbar />

      {/* Title — centered at bottom */}
      <section className="relative z-10 mt-auto px-5 pb-12 text-center sm:px-8 sm:pb-16 md:px-10 md:pb-24">
        {/* <p className="mb-3 text-[12px] font-medium uppercase tracking-[0.35em] text-[#8DC63F] sm:text-[13px]">
          Family Atmosphere Hospitality
        </p> */}

        <h1 className="mx-auto max-w-[1100px] text-balance font-serif text-[34px] uppercase leading-[1.15] tracking-[-1px] sm:text-[46px] md:text-[56px] lg:text-[64px] lg:tracking-[-1.5px]">
          Welcome to Teeka Resort
        </h1>

        <p className="mx-auto mt-4 max-w-2xl text-[15px] font-normal leading-relaxed tracking-[-0.3px] text-[#F6F3EC]/90 sm:mt-5 sm:text-[17px] md:text-[18px]">
          One of the unique properties with international-standard, personalized
          services that reflect our Nepali hospitality, in the heart of Lakeside Pokhara.
        </p>
      </section>
    </main>
  );
};

export default Hero;