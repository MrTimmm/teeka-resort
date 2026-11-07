import React from 'react';

/*
  bark #3B1D12 | deep #2B140C | leaf #8DC63F | moss #6FA83A | cream #F6F3EC
*/

const Location = () => {
  return (
    <section
      id="location"
      className="w-full bg-white px-5 py-16 text-[#3B1D12] sm:px-8 md:py-24 lg:px-16"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20 xl:gap-28">

        {/* Circular map */}
        <div className="flex justify-center">
          <div className="relative aspect-square w-full max-w-[450px] overflow-hidden rounded-full bg-[#F6F3EC] sm:max-w-[540px] lg:max-w-[650px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3515.7585028213502!2d83.95595187499315!3d28.214648902935334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399594e18afccb67%3A0x1324a450f75d25c3!2sTeeka%20Resort%20Suites%20and%20Spa!5e0!3m2!1sen!2snp!4v1792911648921!5m2!1sen!2snp"
              title="Teeka Resort Suites and Spa location map"
              className="absolute inset-0 h-full w-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>
        </div>

        {/* Location details */}
        <div className="mx-auto w-full max-w-[650px] lg:mx-0">
          <p className="mb-6 font-raleway text-xs font-bold uppercase tracking-[0.45em] text-[#6FA83A] sm:text-sm">
            Location
          </p>

          <h2 className="mb-10 text-4xl font-normal leading-[1.2] tracking-[-0.8px] text-[#3B1D12] ">
            Located in Lakeside, Pokhara, Teeka Resort Suites &amp; Spa offers a peaceful
            retreat surrounded by the beauty of Phewa Lake and the Annapurna range.
          </h2>

          {/* Contact card */}
          <div className="bg-[#F6F3EC] px-7 py-8 sm:px-9 sm:py-10">
            <h3 className="mb-5 text-2xl font-normal text-[#3B1D12] sm:text-[30px]">
              Teeka Resort
            </h3>

            <div className="space-y-2 font-raleway text-sm leading-relaxed text-[#3B1D12]/85 sm:text-base">
              <p>
                <span className="font-medium">Address: </span>
                Hallan Chowk, Pokhara-6, Nepal
              </p>

              <p>
                <span className="font-medium">Phone: </span>
                <a
                  href="tel:+97761452033"
                  className="transition-colors hover:text-[#6FA83A]"
                >
                  +977-61-452033
                </a>
                <span className="text-[#3B1D12]/60"> · </span>
                <a
                  href="tel:+97761453986"
                  className="transition-colors hover:text-[#6FA83A]"
                >
                  453986
                </a>
                <span className="text-[#3B1D12]/60"> · </span>
                <a
                  href="tel:+97761456599"
                  className="transition-colors hover:text-[#6FA83A]"
                >
                  456599
                </a>
              </p>

              <p>
                <span className="font-medium">Email: </span>
                <a
                  href="mailto:sales@teekaresort.com"
                  className="transition-colors hover:text-[#6FA83A]"
                >
                  sales@teekaresort.com
                </a>
              </p>

              <p>
                <span className="font-medium">Front desk: </span>
                Open 24 hours, daily
              </p>
            </div>

            <a
              href="https://www.google.com/maps/search/?api=1&query=Teeka+Resort+Suites+and+Spa+Pokhara+Nepal"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 border-b border-[#3B1D12] pb-1 font-raleway text-xs font-semibold uppercase tracking-wider transition-colors hover:border-[#8DC63F] hover:text-[#6FA83A]"
            >
              Get directions
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.4"
                className="h-4 w-4"
                aria-hidden="true"
              >
                <path d="M7 17 17 7M7 7h10v10" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;