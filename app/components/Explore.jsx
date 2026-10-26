import React from "react";

/*
  bark #3B1D12 | deep #2B140C | leaf #8DC63F | moss #6FA83A | cream #F6F3EC | sand #EBE5D8
*/

// Placeholder photos: replace with real photos of Pokhara and the surroundings.
// Images are served from the public/images folder.
const columns = [
  {
    offset: true,
    images: [
      { src: "/images/barahi.jpg", alt: "Historic architecture near the resort", height: "h-[190px] sm:h-[268px]" },
      { src: "/images/bazar.jpg", alt: "Old town street", height: "h-[190px] sm:h-[268px]" },
    ],
  },
  {
    offset: false,
    images: [
      { src: "/images/bindabasini.jpg", alt: "Lakeside view", height: "h-[160px] sm:h-[210px]" },
      { src: "/images/pagoda2.webp", alt: "View over the area", height: "h-[190px] sm:h-[268px]" },
    ],
  },
  {
    offset: true,
    images: [
      { src: "/images/phewa.jpg", alt: "Local promenade", height: "h-[190px] sm:h-[268px]" },
      { src: "/images/sarankot.jpg", alt: "Ornate local building", height: "h-[190px] sm:h-[268px]" },
    ],
  },
];

const Explore = () => {
  return (
    <section
      id="explore"
      className="w-full overflow-hidden  px-5 pb-16 pt-12 text-[#3B1D12] sm:px-8 md:pb-24 md:py-24"
    >
      {/* Intro */}
      <div className="mx-auto max-w-4xl text-center">
        <p className="mb-3 font-raleway text-xl">Explore the area</p>

        <h2 className="mb-5 font-joane text-4xl font-normal uppercase leading-[0.98] tracking-[-1px] sm:text-5xl md:text-6xl md:tracking-[-1.5px]">
          The place to be, an unbeatable location
        </h2>

        <p className="mx-auto max-w-3xl font-raleway text-sm leading-[1.3] sm:text-xl">
          In the heart of Pokhara, Teeka Resort is a wonderful destination
          for discovering the surrounding area. Explore nearby attractions,
          peaceful landscapes, local culture, and beautiful natural scenery
          while enjoying a relaxing stay.
        </p>

        <button
          type="button"
          className="mb-6 mt-6 border-b border-transparent pb-1 font-raleway text-sm font-medium transition-colors duration-300 hover:border-[#8DC63F] hover:text-[#6FA83A] focus-visible:border-[#8DC63F] focus-visible:text-[#6FA83A] focus-visible:outline-none sm:text-xl"
        >
          Read more
        </button>
      </div>

      {/* Explore image gallery */}
      <div className="mx-auto mt-10 grid w-full max-w-7xl grid-cols-2 items-start gap-x-3 gap-y-3 sm:grid-cols-3 sm:gap-x-[18px] sm:gap-y-5">
        {columns.map((column, columnIndex) => (
          <div
            key={columnIndex}
            className={`contents sm:flex sm:flex-col sm:gap-[18px] ${
              column.offset ? "mt-0 sm:mt-[58px]" : ""
            }`}
          >
            {column.images.map((image, imageIndex) => (
              <div
                key={imageIndex}
                className="group relative overflow-hidden bg-[#3B1D12]/15"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className={`${image.height} w-full object-cover transition-transform duration-700 group-hover:scale-105 lg:h-[60vh]`}
                  loading="lazy"
                />
                {/* Warm brand tint, fades on hover */}
                <div className="pointer-events-none absolute inset-0 bg-[#2B140C]/15 transition-opacity duration-500 group-hover:opacity-0" />
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Explore;