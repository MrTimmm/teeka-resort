import React from "react";

/*
  bark #3B1D12 | deep #2B140C | leaf #8DC63F | moss #6FA83A | cream #F6F3EC
*/

const services = [
  {
    title: "DINING",
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1000&q=85",
    href: "#dining",
  },
  {
    title: "SPA",
    image:
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1000&q=85",
    href: "#spa",
  },
  {
    title: "HALL",
    image:
      "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1000&q=85",
    href: "#hall",
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="w-full bg-[#F6F3EC] px-[18px] py-14 text-[#3B1D12] sm:px-6 md:py-16 lg:px-8"
    >
      {/* Heading */}
      <h2 className="mb-8 text-center font-joane text-4xl font-normal tracking-wide sm:text-5xl md:mb-8 md:text-[48px]">
        SERVICES
      </h2>

      {/* Service cards */}
      <div className="grid grid-cols-1 gap-x-[18px] gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <article key={service.title} className="min-w-0">
            {/* Image */}
            <a
              href={service.href}
              className="group relative block aspect-[0.96/1] overflow-hidden bg-[#3B1D12]/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8DC63F]"
              aria-label={`Explore ${service.title.toLowerCase()}`}
            >
              <img
                src={service.image}
                alt={service.title}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              {/* Warm brand tint, fades on hover */}
              <div className="absolute inset-0 bg-[#2B140C]/15 transition-opacity duration-500 group-hover:opacity-0" />
            </a>

            {/* Title */}
            <h3 className="mt-3 font-joane text-[25px] font-normal leading-tight text-[#3B1D12] sm:text-[27px] md:text-[29px]">
              {service.title}
            </h3>

            {/* Link */}
            <a
              href={service.href}
              className="mt-5 inline-flex items-center gap-1.5 border-b border-transparent pb-2 font-raleway text-md font-medium text-[#3B1D12] transition-colors duration-300 hover:border-[#8DC63F] hover:text-[#6FA83A] focus-visible:border-[#8DC63F] focus-visible:text-[#6FA83A] focus-visible:outline-none"
            >
              FIND OUT MORE
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
    </section>
  );
};

export default Services;