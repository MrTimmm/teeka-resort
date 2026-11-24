import Image from 'next/image'
import Link from 'next/link'

// Put your photos in /public/images and update the paths below.
const sections = [
  {
    id: 'events',
    title: 'Events, Weddings & Meetings',
    text: 'Host your most beautiful moments where the grandeur meets the lake. Our signature Mahima Hall offers floor-to-ceiling windows framing a clear, uninterrupted view of Phewa Lake. Featuring a grand stage, premium sound system, and elegant chandeliers, it is perfect for weddings, receptions, and corporate galas for up to 200 guests.',
    href: '/halls',
    image: '/images/meeting.jpeg', // Update with Mahima Hall image
    alt: 'Grand event hall with lake view and chandeliers',
    imageLeft: false,
  },
  {
    id: 'intimate-gatherings',
    title: 'Intimate Gatherings',
    text: 'Discover Prakriti Hall, our private boutique venue designed for moments that matter. Enjoy the same stunning lake view in a calm, cozy, and private setting with soft natural lights. It is ideal for focused business meetings, training sessions, workshops, and heartfelt family celebrations for up to 50 guests.',
    href: '/halls',
    image: '/images/meeting2.jpeg', // Update with Prakriti Hall image
    alt: 'Cozy private meeting room with natural light',
    imageLeft: true,
  },
  {
    id: 'dining',
    title: 'A Journey of Flavours',
    text: 'From authentic Nepali Thakali to international favourites, our chefs craft every dish with fresh local ingredients. Dont miss our famous breakfast and dinner buffets loved by guests from around the world. As the sun sets over Phewa Lake, unwind at our Bar & Lounge with handcrafted cocktails and fine wines.',
    href: '/dining',
    image: '/images/restro.jpg', // Update with restaurant image
    alt: 'Lakeside restaurant table set for dinner',
    imageLeft: false,
  },
]

const Arrow = () => (
  <svg
    viewBox="0 0 30 18"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    className="h-[18px] w-[30px] transition-transform duration-200 group-hover:translate-x-1 group-focus-visible:translate-x-1"
    aria-hidden="true"
  >
    <path d="M0 9h28M20 1l8 8-8 8" />
  </svg>
)

const Dining = () => {
  return (
    <main className={` relative overflow-x-hidden bg-[#F6F3EC] text-[#3B1D12]`}>

      {/* Added a section header to introduce the page */}
      <div className="mx-auto max-w-4xl px-5 pt-24 pb-12 text-center">
        <h1 className={` mb-4 text-4xl font-medium uppercase tracking-[0.06em] text-[#2B140C] md:text-5xl`}>
          Venues & Dining
        </h1>
        <p className="text-lg leading-relaxed text-[#5A3A2E]">
          Everything you need, all in one place. From grand celebrations to quiet moments by the lake.
        </p>
      </div>

      {sections.map(({ id, title, text, href, image, alt, imageLeft }) => (
        <section
          key={id}
          id={id}
          className="mx-auto grid max-w-[1840px] grid-cols-1 items-center gap-8 px-5 py-8 md:grid-cols-2 md:px-[60px] md:pb-24"
        >
          <div
            className={`px-2 py-5 md:py-0 ${
              imageLeft ? 'md:order-2 md:pl-[90px] md:pr-[72px]' : 'md:pl-[72px] md:pr-[90px]'
            }`}
          >
            <h2
              className={` mb-7 text-[28px] font-medium tracking-[0.06em] text-[#2B140C] md:text-[36px]`}
            >
              {title}
            </h2>
            <p className="mb-8 max-w-[540px] text-lg leading-[1.67] text-[#4A2C22]">{text}</p>
            <Link
              href={href}
              className={` group inline-flex items-center gap-3 py-1 text-base font-medium uppercase tracking-[0.18em] text-[#8B5A2B] transition-colors hover:text-[#2B140C] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8B5A2B]`}
            >
              View details
              <Arrow />
            </Link>
          </div>

          <div
            className={`relative aspect-[825/618] w-full overflow-hidden bg-stone-300 ${
              imageLeft ? 'md:order-1' : ''
            }`}
          >
            <Image
              src={image}
              alt={alt}
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
        </section>
      ))}

    </main>
  )
}

export default Dining