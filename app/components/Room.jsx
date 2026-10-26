"use client";

import React, { useState } from "react";

/*
  bark #3B1D12 | deep #2B140C | leaf #8DC63F | moss #6FA83A | cream #F6F3EC | sand #EBE5D8
*/

const rooms = [
  {
    title: "DELUXE ROOM",
    name: "Deluxe Room",
    image:
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=2000&q=85",
    href: "https://www.teekaresort.com/subpackage/deluxe-room",
  },
  {
    title: "SUPER DELUXE",
    name: "Super Deluxe",
    image:
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=2000&q=85",
    href: "#rooms",
  },
  {
    title: "FAMILY",
    name: "Family Room",
    image:
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=2000&q=85",
    href: "#rooms",
  },
  {
    title: "HONEYMOON",
    name: "Honeymoon Suite",
    image:
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=2000&q=85",
    href: "#rooms",
  },
];

const arrowClass =
  "absolute top-1/2 z-30 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full text-[#3B1D12] transition-colors hover:bg-[#8DC63F] focus-visible:bg-[#8DC63F] focus-visible:outline-none";

export default function Rooms() {
  const [activeIndex, setActiveIndex] = useState(0);

  const previousRoom = () => {
    setActiveIndex((current) => (current - 1 + rooms.length) % rooms.length);
  };

  const nextRoom = () => {
    setActiveIndex((current) => (current + 1) % rooms.length);
  };

  const getRoom = (offset) =>
    rooms[(activeIndex + offset + rooms.length) % rooms.length];

  return (
    <section
      id="rooms"
      className="relative w-full overflow-hidden bg-[#EBE5D8] pb-16 pt-14 sm:pb-20 sm:pt-16 md:pt-[78px]"
    >
      {/* Section heading */}
      <h2 className="mb-10 text-center font-serif text-[42px] font-normal leading-none tracking-[-1.5px] text-[#3B1D12] sm:mb-12 sm:text-6xl md:mb-[62px] md:text-[80px] md:tracking-[-2px]">
        SUITES &amp; ROOMS
      </h2>

      {/* Room carousel */}
      <div className="relative h-[420px] w-full sm:h-[500px] md:h-[600px] lg:h-[650px]">
        {/* Previous room preview */}
        <button
          type="button"
          onClick={previousRoom}
          aria-label={`Previous room: ${getRoom(-1).name}`}
          className="absolute left-[-75%] top-0 z-10 hidden h-full w-[71%] overflow-hidden sm:block md:left-[-67%] lg:left-[-63%]"
        >
          <img
            src={getRoom(-1).image}
            alt={getRoom(-1).name}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-[#2B140C]/35" />
        </button>

        {/* Left arrow */}
        <button
          type="button"
          onClick={previousRoom}
          aria-label="Previous room"
          className={`${arrowClass} left-[6%] sm:left-[8%] md:left-[8.5%]`}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.4"
            className="h-7 w-7"
            aria-hidden="true"
          >
            <path d="m15 4-8 8 8 8" />
          </svg>
        </button>

        {/* Main room */}
        <a
          href={getRoom(0).href}
          className="group absolute left-1/2 top-0 z-20 block h-full w-[78%] -translate-x-1/2 overflow-hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8DC63F] sm:w-[71%]"
        >
          <img
            key={getRoom(0).image}
            src={getRoom(0).image}
            alt={getRoom(0).name}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
          />

          {/* Warm brand overlay so the title stays legible */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#2B140C]/55 via-[#2B140C]/20 to-[#2B140C]/30" />

          {/* Room title */}
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-5">
            <h3 className="px-4 text-center font-serif text-[38px] font-normal tracking-[-1px] text-white sm:text-5xl md:text-[76px] md:tracking-[-2px]">
              {getRoom(0).title}
            </h3>
            <span className="h-[2px] w-16 bg-[#8DC63F] transition-all duration-500 group-hover:w-28" />
          </div>
        </a>

        {/* Next room preview */}
        <button
          type="button"
          onClick={nextRoom}
          aria-label={`Next room: ${getRoom(1).name}`}
          className="absolute right-[-75%] top-0 z-10 hidden h-full w-[71%] overflow-hidden sm:block md:right-[-67%] lg:right-[-63%]"
        >
          <img
            src={getRoom(1).image}
            alt={getRoom(1).name}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-[#2B140C]/35" />
        </button>

        {/* Right arrow */}
        <button
          type="button"
          onClick={nextRoom}
          aria-label="Next room"
          className={`${arrowClass} right-[6%] sm:right-[8%] md:right-[8.5%]`}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.4"
            className="h-7 w-7"
            aria-hidden="true"
          >
            <path d="m9 4 8 8-8 8" />
          </svg>
        </button>
      </div>
    </section>
  );
}