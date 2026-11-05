
"use client";

import React, { useState } from "react";

const events = [
  {
    category: "OFFER",
    title: "STAY LONGER OFFER",
    action: "BOOK NOW",
    image:
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=900&q=85",
    href: "#stay-longer",
  },
  {
    category: "ANNIVERSARY",
    title: "100 YEARS OF HISTORY",
    action: "MORE INFO",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=900&q=85",
    href: "#anniversary",
  },
  {
    category: "SPECIAL MENU",
    title: "THANKSGIVING DAY",
    action: "MORE INFO",
    image:
      "https://images.unsplash.com/photo-1515003197210-e0cd7184f8b5?auto=format&fit=crop&w=900&q=85",
    href: "#thanksgiving",
  },
  {
    category: "EXPERIENCE",
    title: "A PEACEFUL ESCAPE",
    action: "MORE INFO",
    image:
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=900&q=85",
    href: "#experience",
  },
];

export default function WhatsOn() {
  const [activeIndex, setActiveIndex] = useState(0);

  const previous = () => {
    setActiveIndex((current) =>
      (current - 1 + events.length) % events.length
    );
  };

  const next = () => {
    setActiveIndex((current) => (current + 1) % events.length);
  };

  // Keep three cards visible and rotate the selected group.
  const visibleEvents = [0, 1, 2].map(
    (offset) => events[(activeIndex + offset) % events.length]
  );

  return (
    <section
      id="whats-on"
      className="w-full overflow-hidden bg-[#F6F3EC] px-5 text-[#111111] sm:px-8 py-20 md:py-24"
    >
      {/* Heading */}
      <h2 className="mb-8 text-center text-[40px] font-normal leading-tight tracking-[1px] sm:mb-9 sm:text-5xl md:text-[48px]">
        WHAT&apos;S ON
      </h2>

      {/* Carousel */}
      <div className="relative mx-auto max-w-7xl">
        {/* Previous arrow */}
        <button
          type="button"
          onClick={previous}
          aria-label="Previous events"
          className="absolute -left-5 top-[125px] z-20 flex h-10 w-8 items-center justify-center text-[#292929] transition-opacity hover:opacity-50 sm:-left-8 md:-left-12"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.2"
            className="h-5 w-5"
          >
            <path d="m15 4-8 8 8 8" />
          </svg>
        </button>

        {/* Event cards */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-[18px]">
          {visibleEvents.map((event, index) => (
            <article key={event.title} className="min-w-0">
              {/* Event image */}
              <a
                href={event.href}
                aria-label={event.title}
                className="group block aspect-[0.75/1] overflow-hidden bg-[#d4d1c8] sm:aspect-[0.75/1]"
              >
                <img
                  src={event.image}
                  alt={event.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  loading="lazy"
                />
              </a>

              {/* Category label */}
              <div className="mt-3 min-h-[23px]">
                {index !== 0 && (
                  <span className="inline-flex min-h-[23px] items-center border border-[#89877f] px-3 font-raleway text-[10px] leading-none">
                    {event.category}
                  </span>
                )}
              </div>

              {/* Event title */}
              <h3 className="mt-2 max-w-[300px] font-joane text-[26px] font-normal leading-[1.12] tracking-[-0.3px] sm:text-[27px] md:text-[30px]">
                {event.title}
              </h3>

              {/* Action link */}
              <a
                href={event.href}
                className="mt-4 inline-flex items-center gap-1 font-raleway text-[11px] font-medium transition-opacity hover:opacity-50 sm:text-xs"
              >
                {event.action}
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.3"
                  className="h-4 w-4"
                  aria-hidden="true"
                >
                  <path d="M4 12h15M13 5l7 7-7 7" />
                </svg>
              </a>
            </article>
          ))}
        </div>

        {/* Next arrow */}
        <button
          type="button"
          onClick={next}
          aria-label="Next events"
          className="absolute -right-5 top-[125px] z-20 flex h-10 w-8 items-center justify-center text-[#292929] transition-opacity hover:opacity-50 sm:-right-8 md:-right-12"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.2"
            className="h-5 w-5"
          >
            <path d="m9 4 8 8-8 8" />
          </svg>
        </button>
      </div>
    </section>
  );
}
