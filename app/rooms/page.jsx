import React from "react";
import Navbar from "../components/Navbar";
import RoomsSection from "../components/RoomsSection";

const Page = () => {
  return (
    <>
      <Navbar />

      {/* Existing Hero Section */}
      <main className="relative min-h-[830px] w-full overflow-hidden bg-[#2B140C] font-sans text-white md:h-screen md:min-h-[700px]">

        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/img1.jpg')",
          }}
        />

        <div className="absolute inset-0 bg-[#2B140C]/40" />

        <div className="absolute inset-0 bg-gradient-to-b from-[#2B140C]/30 via-transparent to-[#2B140C]/60" />

        <section className="absolute inset-x-0 bottom-0 z-10 px-5 pb-12 text-center sm:pb-16 md:px-10 md:pb-20">
          <h1 className="mx-auto max-w-[1570px] font-serif text-[36px] uppercase leading-[1.16] tracking-[-1.5px] sm:text-[46px] md:text-[50px] lg:text-[60px] xl:text-5xl xl:tracking-[-2px]">
            A luxury hotel steeped in history in the heart
            <span className="block">of Barcelona</span>
          </h1>

          <p className="mt-[18px] text-[16px] font-normal tracking-[-0.5px] text-[#F6F3EC] sm:text-[19px]">
            A 1920s building by Noucentist architect Adolf Florensa.
          </p>
        </section>
      </main>

      {/* Rooms Section */}
      <RoomsSection />

    </>
  );
};

export default Page;