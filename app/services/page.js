import React from 'react'

const page = () => {
    return (
        <>


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
                        A tranquil lakeside retreat in the heart
                        <span className="block">of Pokhara</span>
                    </h1>

                    <p className="mt-[18px] text-[16px] font-normal tracking-[-0.5px] text-[#F6F3EC] sm:text-[19px] md:text-md">
                        Nestled beneath the Annapurna range, where the Himalayas meet Phewa Lake.
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
                            OUR SERVICES
                        </h2>

                        <p className="mx-auto max-w-5xl text-lg leading-relaxed md:text-xl">
                            At Teeka Resort, we go beyond a comfortable stay to make every
                            moment memorable. From relaxing spa therapies and authentic
                            dining to pet-friendly hospitality and around-the-clock
                            concierge service, our thoughtfully curated amenities are
                            designed to make your time in Pokhara effortless and
                            unforgettable.
                        </p>

                    </div>


                    <div className="mt-24 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">


                        <div className="flex flex-col">
                            <img
                                src="/images/lobby.jpg"
                                alt="Pet Friendly"
                                className="h-[60vh] object-cover md:h-[70vh] md:w-full"
                            />
                            <p className="text-md uppercase mt-4">We are </p>
                            <h2 className="text-2xl font-semibold mb-4 ">Pet Friendly</h2>
                            <p className="text-md">Your pet is one of our guests too, and we make sure they enjoy their lakeside stay just as much as you do. </p>
                        </div>

                        <div className="flex flex-col">
                            <img
                                src="/images/spa.jpg"
                                alt="Spa"
                                className="h-[60vh] object-cover md:h-[70vh] md:w-full"
                            />
                            <p className="text-md uppercase mt-4">Relax at our </p>
                            <h2 className="text-2xl font-semibold mb-4 ">Spa</h2>
                            <p className="text-md">Unwind with traditional Nepali therapies and signature treatments designed to restore your body and mind. </p>
                        </div>

                        <div className="flex flex-col">
                            <img
                                src="/images/restro.jpg"
                                alt="Restaurant"
                                className="h-[60vh] object-cover md:h-[70vh] md:w-full"
                            />
                            <p className="text-md uppercase mt-4">Dine at our </p>
                            <h2 className="text-2xl font-semibold mb-4 ">Restaurant</h2>
                            <p className="text-md">Savor authentic Nepali cuisine and international dishes crafted with fresh, locally sourced ingredients. </p>
                        </div>

                        <div className="flex flex-col">
                            <img
                                src="/images/lift.jfif"
                                alt="Lift"
                                className="h-[60vh] object-cover md:h-[70vh] md:w-full"
                            />
                            <p className="text-md uppercase mt-4">We have a </p>
                            <h2 className="text-2xl font-semibold mb-4 ">Lift</h2>
                            <p className="text-md">Effortless access to every floor, ensuring comfort and convenience throughout your stay. </p>
                        </div>

                        <div className="flex flex-col">
                            <img
                                src="/images/hall.jpg"
                                alt="Hall"
                                className="h-[60vh] object-cover md:h-[70vh] md:w-full"
                            />
                            <p className="text-md uppercase mt-4">Gather in our </p>
                            <h2 className="text-2xl font-semibold mb-4 ">Hall</h2>
                            <p className="text-md">A spacious venue for weddings, events, and gatherings, framed by the beauty of the Himalayas. </p>
                        </div>

                        {/* <div className="flex flex-col">
                            <img
                                src="/images/concierge.jpg"
                                alt="Concierge"
                                className="h-[60vh] object-cover md:h-[70vh] md:w-full"
                            />
                            <p className="text-md uppercase mt-4">We offer </p>
                            <h2 className="text-2xl font-semibold mb-4 ">Concierge</h2>
                            <p className="text-md">Our dedicated team is on hand around the clock to arrange treks, tours, and every detail of your stay. </p>
                        </div> */}

                    </div>





                </div>
            </section>


        </>
    )
}

export default page