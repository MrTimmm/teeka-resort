import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const page = () => {
  return (
    <>
      <Navbar />

      <main className="relative min-h-[830px] w-full overflow-hidden bg-[#2B140C] font-sans text-white md:h-screen md:min-h-[700px]">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/lobby.jpg')" }}
        />

        {/* Image overlays: warm brown tint instead of neutral black */}
        <div className="absolute inset-0 bg-[#2B140C]/40" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#2B140C]/30 via-transparent to-[#2B140C]/60" />

        <section className="absolute inset-x-0 bottom-0 z-10 px-5 pb-12 text-center sm:pb-16 md:pb-20 md:px-10">
          <h1 className="mx-auto max-w-[1570px] font-serif text-[36px] uppercase leading-[1.16] tracking-[-1.5px] sm:text-[46px] md:text-[50px] lg:text-[60px] xl:text-5xl xl:tracking-[-2px]">
            A lakeside retreat steeped in Nepali hospitality in the heart
            <span className="block">of Pokhara</span>
          </h1>

          <p className="mt-[18px] text-[16px] font-normal tracking-[-0.5px] text-[#F6F3EC] sm:text-[19px] md:text-md">
            Family atmosphere hospitality near Phewa Lake and the Annapurna range.
          </p>
        </section>
      </main>

      <section className="w-full bg-[#F4F4F3] px-5 py-16 text-[#3B1D12] sm:px-8 md:py-20 lg:px-12">
        <div className="mx-auto max-w-7xl">

          {/* About heading and description */}
          <div className="mx-auto max-w-[1320px] text-center">
            <p className=" text-xl font-normal">
              About Teeka Resort
            </p>

            <h2 className="mx-auto mb-6 max-w-4xl font-serif text-3xl uppercase leading-tight md:text-6xl">
              WELCOME TO TEEKA RESORT
            </h2>

            <p className="mx-auto max-w-5xl text-lg leading-relaxed md:text-xl">
              Teeka Resort is one of the unique properties with international
              standard, personalized services that reflect our Nepali Hospitality.
              Teeka Resort is unique in itself with prime location to Phewa Lake
              and spacious, luxurious rooms that make guest stay more pleasant
              and memorable. With 65 rooms, 03 halls, and over 20 years in
              hospitality, we are ideally suited for both business and leisure
              travelers in Pokhara.
            </p>

            <button
              type="button"
              className=" border-b border-transparent pb-1 text-lg font-medium transition-colors duration-300 hover:border-[#8DC63F] hover:text-[#6FA83A] focus-visible:border-[#8DC63F] focus-visible:text-[#6FA83A] focus-visible:outline-none mt-4 md:text-lg"
            >
              Read more
            </button>
          </div>

          <div className="mt-32 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
            <div className="">
              <h2 className="font-serif text-3xl uppercase leading-tight md:text-5xl">ACCOMMODATION</h2>
              <p className="mt-4 text-lg max-w-xl md:text-lg">
                Teeka Resort is all set to engage you in one of the finest
                vibrant Hospitality Experiences in Pokhara. Teeka Resort is
                ideally suited for business &amp; leisure travelers in Pokhara,
                as it is located in Lakeside with a proximity of activities,
                restaurants and shopping. Teeka Resort hopes to fulfill your
                need by providing superior hospitality at very competitive
                pricing — making your stay truly pleasant and memorable.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <img
                src="/images/about.jfif"
                alt="Teeka Resort accommodation"
                className="h-[60vh] object-cover md:h-[80vh] md:w-full"
              />
            </div>

          </div>

        </div>
      </section>

    </>
  );
};

export default page;