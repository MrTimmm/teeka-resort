'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'



// Data for the detailed list format
const hallsData = [
  {
    id: 'mahima',
    name: 'Mahima Hall',
    subtitle: 'Where Grand Celebrations Meet The Lake',
    image: '/images/hall.jpg', // Replace with your Mahima Hall image
    description: 'Step into Mahima Hall, the grand signature venue of Teeka Resort Suites & Spa. With floor-to-ceiling windows framing a clear, uninterrupted view of Phewa Lake, every celebration becomes a breathtaking experience. The warm glow of chandeliers, elegant decor, and spacious layout create an atmosphere of luxury, comfort, and timeless beauty.',
    features: [
      'Clear Phewa Lake View From Inside the Hall',
      'Grand Stage, Podium & Projector Screen',
      'Premium Sound System',
      'Elegant Chandelier & Warm Lighting',
      'Spacious Seating - Comfortable in Every Set-up',
      'Dedicated Event Team & Customized Decoration'
    ],
    perfectFor: ['Wedding', 'Reception', 'Anniversary', 'Grand Seminar', 'Corporate Event', 'Gala Evening'],
    capacity: [
      { setup: 'U-Shape Setup', guests: '60 - 70 Guests' },
      { setup: 'Round Table Setup', guests: '80 - 100 Guests' },
      { setup: 'Theatre Setup', guests: '150 - 200 Guests' },
    ]
  },
  {
    id: 'prakriti',
    name: 'Prakriti Hall',
    subtitle: 'Where Intimate Moments Feel Extraordinary',
    image: '/images/meeting.jpeg', // Replace with your Prakriti Hall image
    description: 'Discover Prakriti Hall, the private boutique venue designed for moments that matter. It offers the same stunning Phewa Lake view in a calm, cozy, and private setting. Soft natural lights, peaceful ambience, and thoughtful details make it ideal for focused meetings and heartfelt celebrations. Here, every gathering feels personal, and every moment feels special.',
    features: [
      'Clear Phewa Lake View from Inside the Hall',
      'Private, Cozy & Peaceful Ambience',
      'Projector, Mic, Premium Sound System & High-speed Wifi',
      'Flexible Seating - Designed Around You',
      'Personalized Service & Attention to Detail'
    ],
    perfectFor: ['Business Meeting', 'Training & Workshop', 'Birthday', 'Pasni', 'Engagement', 'Family Gathering'],
    capacity: [
      { setup: 'U-Shaped Set-up', guests: '25 pax' },
      { setup: 'Round Table Set-up', guests: '40 pax' },
      { setup: 'Theatre Setup', guests: '50 pax' },
    ]
  }
]

export default function HallsPage() {
  // State to track which hall's details are expanded. 
  // We use an object so multiple can be open at once if desired, or you can use a single string for only one open at a time.
  const [expandedHall, setExpandedHall] = useState(null)

  const toggleDetails = (id) => {
    setExpandedHall(expandedHall === id ? null : id)
  }

  return (
    <>
      <Navbar />

      <main className={` bg-[#F4F4F3] text-[#3B1D12] pb-24`}>
        
        {/* 1. HERO SECTION */}
        <section className="relative min-h-[600px] w-full overflow-hidden bg-[#2B140C] md:h-[70vh] md:min-h-[700px]">
          <div className="absolute inset-0 bg-cover bg-center opacity-60" style={{ backgroundImage: "url('/images/hall.jpg')" }} />
          <div className="absolute inset-0 bg-gradient-to-t from-[#2B140C] via-[#2B140C]/20 to-transparent" />
          
          <div className="absolute inset-x-0 bottom-0 z-10 px-5 pb-16 text-center text-white md:px-10 md:pb-24">
            <p className="text-[#D4A373] text-lg uppercase tracking-wider mb-4">Events, Weddings & Meetings</p>
            <h1 className={` mx-auto max-w-5xl text-[36px] uppercase leading-[1.16] tracking-[-1.5px] sm:text-[46px] md:text-[50px] lg:text-[60px] xl:text-5xl xl:tracking-[-2px]`}>
              Our Halls
              <span className="block mt-2">At Teeka Resort</span>
            </h1>
            <p className="mx-auto mt-[18px] max-w-2xl text-[16px] font-normal tracking-[-0.5px] text-[#F6F3EC] sm:text-[19px]">
              Host your most beautiful moments where grand celebrations meet the lake.
            </p>
          </div>
        </section>

        {/* 2. HALLS LISTINGS */}
        <section className="mx-auto max-w-7xl px-5 py-16 md:px-10 md:py-24 space-y-32">
          
          {hallsData.map((hall, index) => {
            const isExpanded = expandedHall === hall.id;

            return (
              <div 
                key={hall.id} 
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-start`}
              >
                {/* Image - Alternates left/right based on index */}
                <div className={`relative h-[50vh] lg:h-[70vh] w-full overflow-hidden ${index % 2 !== 0 ? 'lg:order-2' : ''}`}>
                  <Image
                    src={hall.image}
                    alt={hall.name}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Text Content */}
                <div className={`py-4 ${index % 2 !== 0 ? 'lg:order-1' : ''}`}>
                  <p className="text-[#8B5A2B] uppercase tracking-widest text-sm mb-2">{hall.subtitle}</p>
                  <h2 className={` text-4xl md:text-5xl uppercase text-[#2B140C] mb-6`}>
                    {hall.name}
                  </h2>
                  <p className="text-lg leading-relaxed text-[#4A2C22] mb-6">
                    {hall.description}
                  </p>

                  {/* Individual View Details Button */}
                  <button
                    onClick={() => toggleDetails(hall.id)}
                    className={` inline-flex items-center gap-2 text-base font-medium uppercase tracking-[0.18em] text-[#8B5A2B] transition-colors hover:text-[#2B140C] mb-8`}
                  >
                    {isExpanded ? 'Hide Details' : 'View Details'}
                    <svg 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {/* Expandable Details Section */}
                  {isExpanded && (
                    <div className="animate-fadeIn">
                      {/* Grid for Features and Capacity */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 border-t border-stone-200 pt-8">
                        <div>
                          <h3 className={` text-xl uppercase tracking-wider text-[#2B140C] mb-4 border-b border-stone-300 pb-2`}>
                            Included Features
                          </h3>
                          <ul className="space-y-2">
                            {hall.features.map((feature, idx) => (
                              <li key={idx} className="flex items-start text-sm text-[#4A2C22]">
                                <span className="text-[#8B5A2B] mr-2 mt-0.5">✦</span>
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h3 className={` text-xl uppercase tracking-wider text-[#2B140C] mb-4 border-b border-stone-300 pb-2`}>
                            Capacity
                          </h3>
                          <ul className="space-y-3">
                            {hall.capacity.map((cap, idx) => (
                              <li key={idx} className="flex justify-between items-center text-sm border-b border-stone-200 pb-2">
                                <span className="text-[#5A3A2E]">{cap.setup}</span>
                                <span className="font-semibold text-[#2B140C]">{cap.guests}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Perfect For Tags */}
                      <div className="mb-8">
                        <h3 className={` text-xl uppercase tracking-wider text-[#2B140C] mb-4`}>Perfect For</h3>
                        <div className="flex flex-wrap gap-2">
                          {hall.perfectFor.map((item, idx) => (
                            <span key={idx} className="bg-white text-[#8B5A2B] px-3 py-1 text-sm border border-stone-200">
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                  
                  <div className="mt-4">
                    <Link href="/contact" className={` inline-block bg-[#2B140C] text-white uppercase tracking-widest px-8 py-3 text-sm transition-colors hover:bg-[#8B5A2B]`}>
                      Enquire About {hall.name}
                    </Link>
                  </div>
                </div>
              </div>
            )
          })}

        </section>

        {/* 3. WHY BOOK SECTION */}
        <section className="bg-[#2B140C] text-[#F4F4F3] py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-5 md:px-10 text-center">
            <h2 className={` text-3xl uppercase tracking-[0.05em] mb-12`}>
              Why Book Event Hall At Teeka Resort?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
              <div className="p-6 border border-white/20">
                <h4 className="font-semibold text-[#D4A373] mb-2">Only Hall in Pokhara</h4>
                <p className="text-sm opacity-80">With a clear, uninterrupted lake view for your guests.</p>
              </div>
              <div className="p-6 border border-white/20">
                <h4 className="font-semibold text-[#D4A373] mb-2">65 Rooms Available</h4>
                <p className="text-sm opacity-80">Special group rates for your out-of-town guests.</p>
              </div>
              <div className="p-6 border border-white/20">
                <h4 className="font-semibold text-[#D4A373] mb-2">Custom Decoration</h4>
                <p className="text-sm opacity-80">Customized buffets featuring Nepali, Indian, Chinese & Continental.</p>
              </div>
              <div className="p-6 border border-white/20">
                <h4 className="font-semibold text-[#D4A373] mb-2">Warm Welcome</h4>
                <p className="text-sm opacity-80">Welcome Tika, flower bouquet, and welcome drink for arrivals.</p>
              </div>
              <div className="p-6 border border-white/20">
                <h4 className="font-semibold text-[#D4A373] mb-2">Best Location</h4>
                <p className="text-sm opacity-80">Lakeside, Pokhara, Hallanchowk Street No-18.</p>
              </div>
              <div className="p-6 border border-white/20">
                <h4 className="font-semibold text-[#D4A373] mb-2">24 Hour Service</h4>
                <p className="text-sm opacity-80">Free Wifi and free parking for all event visitors.</p>
              </div>
            </div>
          </div>
        </section>

      </main>
      
      <Footer />
    </>
  )
}