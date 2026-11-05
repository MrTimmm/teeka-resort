
"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { rooms } from "../lib/rooms";

const RoomsSection = () => {
  const [activeServices, setActiveServices] = useState(null);

  return (
    <section
      id="rooms"
      className="w-full bg-white px-5 py-16 sm:px-8 lg:px-14 lg:py-20"
    >
      <div className="mx-auto max-w-[1660px]">

        {/* Rooms List */}
        <div className="space-y-24 lg:space-y-32">

          {rooms.map((room, index) => {
            const isOpen = activeServices === room.slug;

            return (
              <article
                key={room.slug}
                className="grid grid-cols-1 items-center gap-9 lg:grid-cols-[1.2fr_1fr] lg:gap-[110px]"
              >

                {/* LEFT: Room Image */}
                <Link
                  href={`/rooms/${room.slug}`}
                  className="group relative block aspect-[1.5/1] w-full overflow-hidden bg-[#F5F2ED]"
                >
                  <Image
                    src={room.image}
                    alt={room.name}
                    fill
                    priority={index === 0}
                    sizes="(max-width: 1024px) 100vw, 55vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />

                  {/* Image Overlay */}
                  <div className="absolute inset-0 bg-black/[0.02] transition group-hover:bg-black/[0.08]" />

                  {/* Image Number */}
                  <div className="absolute bottom-5 left-5 text-xs tracking-[3px] text-white">
                    0{index + 1} / 0{rooms.length}
                  </div>

                  {/* Expand Icon */}
                  {/* <div className="absolute right-6 top-6 flex h-9 w-9 items-center justify-center text-white">
                    <svg
                      width="30"
                      height="30"
                      viewBox="0 0 30 30"
                      fill="none"
                    >
                      <path
                        d="M10 4H4V10M20 4H26V10M4 20V26H10M26 20V26H20"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      />
                    </svg>
                  </div> */}
                </Link>

                {/* RIGHT: Room Information */}
                <div className="flex flex-col justify-center lg:py-10">

                  {/* Category */}
                  <span className="text-xs font-semibold uppercase tracking-[6px] text-[#1D1D1D]">
                    Room
                  </span>

                  {/* Room Title */}
                  <Link href={`/rooms/${room.slug}`}>
                    <h2 className="mt-2 text-3xl font-normal leading-[1.15] tracking-[-1.5px] text-[#252525] transition-colors hover:text-[#96734F] sm:text-[46px] lg:text-[52px] xl:text-5xl">
                      {room.name}
                    </h2>
                  </Link>

                  {/* Room Size and Guests */}
                  <div className="mt-7 flex items-center gap-6">

                    {room.size && (
                      <div className="flex items-center gap-3">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#41452D"
                          strokeWidth="1.5"
                        >
                          <rect x="2.5" y="2.5" width="19" height="19" />
                          <path d="M7 7H12V12" />
                        </svg>

                        <span className="text-sm font-semibold text-[#222]">
                          {room.size}
                        </span>
                      </div>
                    )}

                    {room.size && room.guests && (
                      <div className="h-6 w-px bg-[#D6D3CD]" />
                    )}

                    {room.guests && (
                      <div className="flex items-center gap-3">
                        <svg
                          width="25"
                          height="25"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#41452D"
                          strokeWidth="1.5"
                        >
                          <circle cx="12" cy="7" r="4" />
                          <path d="M3 21C3 16.5 7 14 12 14C17 14 21 16.5 21 21" />
                        </svg>

                        <span className="text-sm font-semibold text-[#222]">
                          {room.guests}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Description */}
                  <p className="mt-14 max-w-[690px] text-[15px] font-normal leading-[2.05] text-[#171717] sm:text-base">
                    {room.description}
                  </p>

                  {/* Services Toggle */}
                  {/* <div className="mt-11">

                    <button
                      type="button"
                      onClick={() =>
                        setActiveServices(isOpen ? null : room.slug)
                      }
                      aria-expanded={isOpen}
                      className="flex items-center gap-3 text-sm font-semibold text-[#171717] transition-colors hover:text-[#96734F]"
                    >
                      See services ({room.amenities.length})

                      <svg
                        className={`h-4 w-4 transition-transform duration-300 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <path
                          d="M4 7L10 13L16 7"
                          stroke="currentColor"
                          strokeWidth="1.5"
                        />
                      </svg>
                    </button>

                    <div
                      className={`grid transition-all duration-300 ${
                        isOpen
                          ? "mt-5 grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="flex flex-wrap gap-3 pb-2">
                          {room.amenities.map((amenity) => (
                            <span
                              key={amenity}
                              className="border border-[#E8E5DF] px-4 py-3 text-xs text-[#555148]"
                            >
                              {amenity}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div> */}

                  {/* Detail Link */}
                  <div className="mt-8">
                    <Link
                      href={`/rooms/${room.slug}`}
                      className="inline-flex items-center gap-4 border-b border-[#29241F] pb-2 text-xs font-semibold uppercase tracking-[2px] text-[#29241F] transition hover:border-[#96734F] hover:text-[#96734F]"
                    >
                      Explore Room
                      <span>→</span>
                    </Link>
                  </div>

                </div>
              </article>
            );
          })}

        </div>
      </div>
    </section>
  );
};

export default RoomsSection;
