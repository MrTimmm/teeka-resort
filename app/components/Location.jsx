
import React from "react";

const Location = () => {
    return (
        <section
            id="location"
            className="w-full bg-white px-5 py-16 text-[#153d35] sm:px-8 md:py-24 lg:px-16"
        >
            <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20 xl:gap-28">

                {/* Circular map */}
                <div className="flex justify-center">
                    <div className="relative aspect-square w-full max-w-[450px] overflow-hidden rounded-full bg-[#faf6f0] sm:max-w-[540px] lg:max-w-[650px]">
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
                    <p className="mb-6 font-raleway text-xs font-bold uppercase tracking-[0.45em] text-[#153d35] sm:text-sm">
                        Location
                    </p>

                    <h2 className="mb-10 font-joane text-4xl font-normal leading-[1.2] tracking-[-0.8px] text-[#181818] sm:text-5xl lg:text-[46px] xl:text-3xl">
                        Located in Pokhara, Teeka Resort Suites &amp; Spa offers a peaceful
                        retreat surrounded by the beauty of Nepal.
                    </h2>

                    {/* Contact card */}
                    <div className="bg-[#faf6f0] px-7 py-8 sm:px-9 sm:py-10">
                        <h3 className="mb-5 font-joane text-2xl font-normal text-[#181818] sm:text-[30px]">
                            Teeka Resort
                        </h3>

                        <div className="space-y-2 font-raleway text-sm leading-relaxed text-[#202020] sm:text-base">
                            <p>
                                <span className="font-medium">Phone: </span>
                                <a
                                    href="tel:+977"
                                    className="transition-opacity hover:opacity-60"
                                >
                                    Contact the resort
                                </a>
                            </p>

                            <p>
                                <span className="font-medium">Email: </span>
                                <a
                                    href="mailto:"
                                    className="transition-opacity hover:opacity-60"
                                >
                                    Get in touch with us
                                </a>
                            </p>

                            <p>
                                <span className="font-medium">Location: </span>
                                Pokhara, Nepal
                            </p>
                        </div>

                        <a
                            href="https://www.google.com/maps/search/?api=1&query=Teeka+Resort+Suites+and+Spa+Pokhara+Nepal"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-6 inline-flex items-center gap-2 border-b border-[#153d35] pb-1 font-raleway text-xs font-semibold uppercase tracking-wider transition-opacity hover:opacity-60"
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
