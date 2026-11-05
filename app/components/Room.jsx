
"use client";

import React, { useState } from "react";
import Link from "next/link";
import { rooms } from "../lib/rooms";

/*
  bark #3B1D12
  deep #2B140C
  leaf #8DC63F
  moss #6FA83A
  cream #F6F3EC
  sand #EBE5D8
*/

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
      {/* Section Heading */}
      <h2 className="mb-10 text-center font-serif text-[42px] font-normal leading-none tracking-[-1.5px] text-[#3B1D12] sm:mb-12 sm:text-6xl md:mb-[62px] md:text-[80px] md:tracking-[-2px]">
        SUITES &amp; ROOMS
      </h2>

      {/* Room Carousel */}
      <div className="relative h-[420px] w-full sm:h-[500px] md:h-[600px] lg:h-[650px]">

        {/* Previous Room Preview */}
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

        {/* Left Arrow */}
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

        {/* Main Room - Links to Dynamic Detail Page */}
        <Link
          href={`/rooms/${getRoom(0).slug}`}
          className="group absolute left-1/2 top-0 z-20 block h-full w-[78%] -translate-x-1/2 overflow-hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8DC63F] sm:w-[71%]"
        >
          <img
            key={getRoom(0).image}
            src={getRoom(0).image}
            alt={getRoom(0).name}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
          />

          {/* Warm Brand Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#2B140C]/55 via-[#2B140C]/20 to-[#2B140C]/30" />

          {/* Room Title */}
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-5">

            <h3 className="px-4 text-center font-serif text-[38px] font-normal tracking-[-1px] text-white sm:text-5xl md:text-[76px] md:tracking-[-2px]">
              {getRoom(0).title || getRoom(0).name.toUpperCase()}
            </h3>

            <span className="h-[2px] w-16 bg-[#8DC63F] transition-all duration-500 group-hover:w-28" />

            <span className="mt-2 text-xs font-medium uppercase tracking-[3px] text-white opacity-0 transition-opacity duration-500 group-hover:opacity-100">
              Explore Room →
            </span>

          </div>
        </Link>

        {/* Next Room Preview */}
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

        {/* Right Arrow */}
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

      {/* Room Navigation Indicators */}
      <div className="mt-9 flex items-center justify-center gap-3">
        {rooms.map((room, index) => (
          <button
            key={room.slug}
            type="button"
            onClick={() => setActiveIndex(index)}
            aria-label={`Show ${room.name}`}
            aria-current={activeIndex === index ? "true" : undefined}
            className={`h-[3px] transition-all duration-300 ${
              activeIndex === index
                ? "w-10 bg-[#3B1D12]"
                : "w-5 bg-[#3B1D12]/30 hover:bg-[#3B1D12]"
            }`}
          />
        ))}
      </div>

    </section>
  );
}
