import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


// Data for the detailed list format
const diningVenues = [
  {
    id: 'restaurant',
    name: 'Teeka Restaurant',
    subtitle: 'A Culinary Journey',
    description: 'From authentic Nepali Thakali to international favourites, our chefs craft every dish with fresh local ingredients and love. Dont miss our famous breakfast buffet and Dinner Buffet, loved by guests from around the world.',
    image: '/images/204850886 - Copy.jpg',
    highlights: [
      'Authentic Nepali Thakali',
      'International Favourites',
      'Famous Breakfast Buffet',
      'Dinner Buffet',
      'Fresh Local Ingredients',
      'Customized Event Menus'
    ]
  },
  {
    id: 'bar',
    name: 'Bar & Lounge',
    subtitle: 'Lakeside Sundowners',
    description: 'As the sun sets over Phewa Lake, unwind at our Bar & Lounge. Enjoy handcrafted coffees, cocktails, fine wines, and the soft buzz of lakeside conversations.',
    image: '/images/bar.jpg',
    highlights: [
      'Handcrafted Coffees',
      'Signature Cocktails',
      'Fine Wines',
      'Lakeside Seating',
      'Sunset Views'
    ]
  }
]

export default function DiningPage() {
  return (
    <>

      <main className={` bg-[#F4F4F3] text-[#3B1D12] pb-24`}>
        
        {/* 1. HERO SECTION */}
        <section className="relative min-h-[600px] w-full overflow-hidden bg-[#2B140C] md:h-[70vh] md:min-h-[700px]">
          <div className="absolute inset-0 bg-cover bg-center opacity-60" style={{ backgroundImage: "url('/images/restro.jpg')" }} />
          <div className="absolute inset-0 bg-gradient-to-t from-[#2B140C] via-[#2B140C]/20 to-transparent" />
          
          <div className="absolute inset-x-0 bottom-0 z-10 px-5 pb-16 text-center text-white md:px-10 md:pb-24">
            <p className="text-[#D4A373] text-lg uppercase tracking-wider mb-4">Teeka Resort</p>
            <h1 className={` mx-auto max-w-5xl text-[36px] uppercase leading-[1.16] tracking-[-1.5px] sm:text-[46px] md:text-[50px] lg:text-[60px] xl:text-5xl xl:tracking-[-2px]`}>
              Dining
              <span className="block mt-2">A Journey of Flavours</span>
            </h1>
            <p className="mx-auto mt-[18px] max-w-2xl text-[16px] font-normal tracking-[-0.5px] text-[#F6F3EC] sm:text-[19px]">
              From authentic Nepali Thakali to international favourites, crafted with fresh local ingredients and love.
            </p>
          </div>
        </section>

        {/* 2. DINING OVERVIEW SECTION */}
        <section className="mx-auto max-w-7xl px-5 py-16 md:px-10 md:py-24">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center">
            
            {/* Text Content */}
            <div className="py-4">
              <p className="text-[#8B5A2B] uppercase tracking-widest text-sm mb-4">Experience Teeka</p>
              <h2 className={` text-4xl md:text-5xl uppercase text-[#2B140C] mb-6`}>
                Teeka Restaurant & Bar
              </h2>
              <p className="text-lg leading-relaxed text-[#4A2C22] mb-8">
                As the sun sets over Phewa Lake, unwind at our Bar & Lounge with handcrafted coffees, cocktails, fine wines, and the soft buzz of lakeside. Dont miss our famous breakfast buffet and Dinner Buffet, loved by guests from around the world.
              </p>
            </div>

            {/* Image */}
            <div className="relative h-[50vh] lg:h-[70vh] w-full overflow-hidden">
              <Image
                src="/images/restro.jpg"
                alt="Teeka Restaurant"
                fill
                className="object-cover"
              />
            </div>

          </div>
        </section>

        {/* 3. DETAILED LISTINGS (Rooms Page Format) */}
        <section className="border-t border-stone-200 bg-white">
          <div className="mx-auto max-w-7xl px-5 py-16 md:px-10 md:py-24 space-y-32">
            
            {diningVenues.map((venue, index) => (
              <div 
                key={venue.id} 
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center`}
              >
                {/* Image - Alternates left/right based on index */}
                <div className={`relative h-[50vh] lg:h-[70vh] w-full overflow-hidden ${index % 2 !== 0 ? 'lg:order-2' : ''}`}>
                  <Image
                    src={venue.image}
                    alt={venue.name}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Text Content */}
                <div className={`py-4 ${index % 2 !== 0 ? 'lg:order-1' : ''}`}>
                  <p className="text-[#8B5A2B] uppercase tracking-widest text-sm mb-2">{venue.subtitle}</p>
                  <h3 className={` text-3xl md:text-4xl uppercase text-[#2B140C] mb-6`}>
                    {venue.name}
                  </h3>
                  <p className="text-lg leading-relaxed text-[#4A2C22] mb-8">
                    {venue.description}
                  </p>
                  
                  <h4 className={` text-xl uppercase tracking-wider text-[#2B140C] mb-4 border-b border-stone-300 pb-2`}>
                    Highlights
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                    {venue.highlights.map((highlight, hIndex) => (
                      <li key={hIndex} className="flex items-start text-sm text-[#4A2C22]">
                        <span className="text-[#8B5A2B] mr-2 mt-0.5">✦</span> 
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}

          </div>
        </section>

        {/* 4. CTA SECTION */}
        {/* <section className="mx-auto max-w-4xl px-5 py-16 text-center md:py-24">
          <h2 className={` text-3xl uppercase tracking-[0.05em] text-[#2B140C] mb-6`}>
            Reserve Your Table
          </h2>
          <p className="text-lg text-[#5A3A2E] mb-8">
            Whether it's a romantic dinner, a family gathering, or a quiet drink by the lake, we look forward to hosting you.
          </p>
          <Link href="/contact" className={` inline-block bg-[#2B140C] text-white uppercase tracking-widest px-8 py-4 text-sm transition-colors hover:bg-[#8B5A2B]`}>
            Contact Us
          </Link>
        </section> */}

      </main>
      
    </>
  )
}