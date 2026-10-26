import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const page = () => {
  return (


    <>

      <Navbar />






   <main className="relative min-h-[830px] w-full overflow-hidden bg-[#2B140C] font-sans text-white md:h-screen md:min-h-[700px]">
  {/* Background image */}
  <div
    className="absolute inset-0 bg-cover bg-center"
    style={{ backgroundImage: "url('/images/teeka-resort.jpg')" }}
  />

  {/* Image overlays: warm brown tint instead of neutral black */}
  <div className="absolute inset-0 bg-[#2B140C]/40" />
  <div className="absolute inset-0 bg-gradient-to-b from-[#2B140C]/30 via-transparent to-[#2B140C]/60" />

  <section className="absolute inset-x-0 bottom-0 z-10 px-5 pb-12 text-center sm:pb-16 md:pb-20 md:px-10">
    <h1 className="mx-auto max-w-[1570px] font-serif text-[36px] uppercase leading-[1.16] tracking-[-1.5px] sm:text-[46px] md:text-[50px] lg:text-[60px] xl:text-5xl xl:tracking-[-2px]">
      A luxury hotel steeped in history in the heart
      <span className="block">of Barcelona</span>
    </h1>

    <p className="mt-[18px] text-[16px] font-normal tracking-[-0.5px] text-[#F6F3EC] sm:text-[19px] md:text-md">
      A 1920s building by Noucentist architect Adolf Florensa.
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
              OUR HISTORY
            </h2>

            <p className="mx-auto max-w-5xl text-lg leading-relaxed md:text-xl">
              Teeka Resort is a luxurious retreat nestled in the heart
              of nature, offering an unparalleled experience of tranquility
              and elegance. Our resort combines modern amenities with the
              charm of traditional architecture, providing guests with a
              unique and memorable stay. Whether you're seeking relaxation,
              adventure, or a romantic getaway, Teeka Resort is the perfect
              destination for your next vacation.
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
              <h2 className="font-serif text-3xl uppercase leading-tight md:text-5xl">FRANCESC CAMBÓ</h2>
              <p className="mt-4 text-lg max-w-xl md:text-lg">
                Francesc Cambó was a prominent Catalan politician and lawyer,
                known for his significant contributions to the cultural and
                political landscape of Catalonia. Born in 1876, Cambó played
                a crucial role in advocating for Catalan autonomy and was a
                key figure in the establishment of the Lliga Regionalista,
                a political party that sought to promote Catalan interests
                within Spain. His legacy includes his efforts to preserve
                Catalan culture and language, as well as his involvement in
                various philanthropic endeavors.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <img
                src="/images/lobby.jpg"
                alt="About Teeka Resort"
                className="h-[60vh] object-cover md:h-[80vh] md:w-full"
              />
            </div>

          </div>





        </div>
      </section>






      <Footer />


    </>





  )
}

export default page