import React from "react";

const features = [
  {
    title: "Lift",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
        <rect x="14" y="6" width="36" height="52" rx="2" />
        <path d="M32 6v52M14 32h36" />
        <path d="M23 17l-4-4-4 4M15 13v10M41 47l4 4 4-4M49 51V41" />
        <circle cx="23" cy="24" r="2" />
        <circle cx="41" cy="40" r="2" />
      </svg>
    ),
  },
  {
    title: "Concierge",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="32" cy="20" r="7" />
        <path d="M18 40c0-7 6-12 14-12s14 5 14 12v3H18z" />
        <path d="M32 31v12M24 55h16M28 43h8v3a4 4 0 0 1-8 0z" />
        <path d="M43 18l3-3M21 18l-3-3" />
      </svg>
    ),
  },
  {
    title: "Parking",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="32" cy="32" r="24" />
        <path d="M24 18v28M24 18h10a7 7 0 0 1 0 14H24" />
      </svg>
    ),
  },
  {
    title: "24 hrs",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="32" cy="32" r="24" />
        <path d="M32 16v16l10 6" />
        <path d="M12 14l4 4M52 14l-4 4" />
      </svg>
    ),
  },
  {
    title: "Events",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 43h44M14 43l5-10 7-3 6-8 6 8 7 3 5 10M19 33l-6-5-5 3 6 8M45 33l6-5 5 3-6 8" />
        <path d="M23 23a9 9 0 0 1 18 0M23 23h18M32 14v9M26 16l6 7 6-7M17 38l7 5M47 38l-7 5" />
        <path d="M15 47h34M20 51h24" />
      </svg>
    ),
  },
  {
    title: "Restaurant",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 8v13M22 8v13M27 8v13M17 21c0 7 3 8 5 10v25M27 21c0 7-3 8-5 10M43 8c-7 4-8 17-3 22l3 2v24M43 8c6 1 8 12 4 20-1 2-3 3-4 2" />
      </svg>
    ),
  },
  {
    title: "Spa",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
        <path d="M32 48C20 48 12 40 8 32c9-1 17 3 24 16z" />
        <path d="M32 48C20 40 17 29 21 20c8 5 12 14 11 28z" />
        <path d="M32 48C25 35 28 23 32 15c7 9 7 22 0 33z" />
        <path d="M32 48c1-14 5-23 13-28 4 10-1 21-13 28z" />
        <path d="M32 48c7-13 15-17 24-16-4 9-12 16-24 16z" />
        <path d="M8 32c8 0 16 5 24 16M56 32c-8 0-16 5-24 16" />
      </svg>
    ),
  },
];

const About = () => {
  return (
    <section className="w-full px-5 py-16 text-[#3B1D12] sm:px-8 md:py-20 lg:px-12">
      <div className="mx-auto max-w-[1350px]">
        {/* About heading and description */}
        <div className="mx-auto max-w-[1320px] text-center">
          <p className="mb-6 text-xl font-normal">About Teeka Resort</p>

          <h2 className="mx-auto mb-6 max-w-4xl font-serif text-3xl uppercase leading-tight md:text-6xl">
            The place to be, an unbeatable location
          </h2>

          <p className="mx-auto max-w-5xl text-lg leading-relaxed md:text-xl">
            Teeka Resort is a luxurious retreat nestled in the heart of nature,
            offering an unparalleled experience of tranquility and elegance. Our
            resort combines modern amenities with the charm of traditional
            architecture, providing guests with a unique and memorable stay.
            Whether you're seeking relaxation, adventure, or a romantic getaway,
            Teeka Resort is the perfect destination for your next vacation.
          </p>

          <button
            type="button"
            className="mt-8 border-b border-transparent pb-1 text-lg font-medium transition-colors duration-300 hover:border-[#8DC63F] hover:text-[#6FA83A] focus-visible:border-[#8DC63F] focus-visible:text-[#6FA83A] focus-visible:outline-none md:mt-10 md:text-[22px]"
          >
            Read more
          </button>
        </div>

        {/* Services grid */}
        <div className="mx-auto mt-12 flex max-w-5xl flex-wrap justify-center gap-x-6 gap-y-8 md:mt-12 md:gap-y-[70px]">
          {features.map((feature, index) => (
            <a
              href="#"
              key={feature.title}
              className={[
                // Original sizing preserved for md+ (unchanged)
                "group flex h-[175px] flex-col items-center justify-center gap-7 bg-[#F6F3EC] transition-colors duration-300 hover:bg-[#EAF4D8] focus-visible:bg-[#EAF4D8] focus-visible:outline-none sm:h-[180px] md:h-[196px]",
                // Mobile: 2 per row (calc 50% minus half the gap), and hide items past the 6th
                "w-[calc(50%-12px)]",
                index >= 6 ? "hidden md:flex" : "flex",
                // Desktop widths — exactly as original
                "md:w-[calc(25%-18px)]",
              ].join(" ")}
            >
              <div className="h-[72px] w-[72px] text-[#3B1D12] transition-all duration-300 group-hover:-translate-y-1 group-hover:text-[#6FA83A]">
                {feature.icon}
              </div>

              <h3 className="text-lg font-medium tracking-[-0.6px] text-[#3B1D12] md:text-[22px]">
                {feature.title}
              </h3>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;