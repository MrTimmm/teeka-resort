import React from "react";

const galleryImages = [
  {
    src: "/images/img1.jpg",
    alt: "Elegant contemporary hotel living space",
    title: "The Art of Living",
    category: "INTERIORS",
  },
  {
    src: "/images/lobby.jpg",
    alt: "Beautiful historic European architecture",
    title: "Architectural Beauty",
    category: "ARCHITECTURE",
  },
  {
    src: "/images/resort.webp",
    alt: "Beautiful historic European architecture",
    title: "Architectural Beauty",
    category: "ARCHITECTURE",
  },
  {
    src: "/images/spa.jpg",
    alt: "Beautiful historic European architecture",
    title: "Architectural Beauty",
    category: "ARCHITECTURE",
  },
  {
    src: "/images/lift.jfif",
    alt: "An elegant fine dining experience",
    title: "A Taste of Luxury",
    category: "DINING",
  },
  {
    src: "/images/img4.jpg",
    alt: "Refined hotel bedroom with soft neutral tones",
    title: "Rest & Retreat",
    category: "ACCOMMODATION",
  },
  {
    src: "/images/about.jfif",
    alt: "Luxury resort swimming pool",
    title: "Moments of Serenity",
    category: "EXPERIENCES",
  },
  {
    src: "/images/hall2.jpg",
    alt: "Beautifully designed modern architectural interior",
    title: "Thoughtful Details",
    category: "DESIGN",
  },
];

const Page = () => {
  return (
    <>
      {/* Hero Section */}
 {/* Hero */}
<main className="relative min-h-[830px] w-full overflow-hidden bg-[#2B140C] font-sans text-white md:h-screen md:min-h-[700px]">
  {/* Background image */}
  <div
    className="absolute inset-0 bg-cover bg-center"
    style={{ backgroundImage: "url('/images/barahi.jpg')" }}
  />

  {/* Image overlays: warm brown tint instead of neutral black */}
  <div className="absolute inset-0 bg-[#2B140C]/40" />
  <div className="absolute inset-0 bg-gradient-to-b from-[#2B140C]/30 via-transparent to-[#2B140C]/60" />

  <section className="absolute inset-x-0 bottom-0 z-10 px-5 pb-12 text-center sm:pb-16 md:pb-20 md:px-10">
    <h1 className="mx-auto max-w-[1570px] font-serif text-[36px] uppercase leading-[1.16] tracking-[-1.5px] sm:text-[46px] md:text-[50px] lg:text-[60px] xl:text-5xl xl:tracking-[-2px]">
      Moments captured at Teeka
      <span className="block">Resort &amp; Spa</span>
    </h1>

    <p className="mt-[18px] text-[16px] font-normal tracking-[-0.5px] text-[#F6F3EC] sm:text-[19px] md:text-md">
      Explore our rooms, lakeside views, dining, spa, and the everyday charm of Pokhara.
    </p>
  </section>
</main>
      {/* Gallery */}
      <main className="min-h-screen bg-white text-[#242424]">
        <section
          aria-label="Our spaces gallery"
          className="mx-auto max-w-[1760px] px-5 pb-24 pt-24 sm:px-8 lg:px-10 lg:pb-32 lg:pt-32"
        >
          <div className="grid grid-cols-1 gap-x-5 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-y-16">
            {galleryImages.map((image, index) => (
              <article key={image.title} className="group">
                <div className="relative aspect-[4/5] overflow-hidden bg-[#f1eee9]">
                  <img
                    src={image.src}
                    alt={image.alt}
                    loading={index < 3 ? "eager" : "lazy"}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />

                  <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/10" />
                </div>

                {/* <div className="flex items-start justify-between gap-4 pt-5">
                  <div>
                    <p className="mb-2 text-[10px] font-medium uppercase tracking-[0.28em] text-[#777] sm:text-xs">
                      {image.category}
                    </p>

                    <h2 className="font-serif text-2xl font-normal tracking-tight sm:text-3xl">
                      {image.title}
                    </h2>
                  </div>

                  <span
                    aria-hidden="true"
                    className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#dedbd6] text-lg transition-all duration-300 group-hover:border-[#242424] group-hover:bg-[#242424] group-hover:text-white"
                  >
                    ↗
                  </span>
                </div> */}
              </article>
            ))}
          </div>
        </section>
      </main>
    </>
  );
};

export default Page;