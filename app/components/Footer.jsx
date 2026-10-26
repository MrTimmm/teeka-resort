import React from 'react';

/*
  bark #3B1D12 | deep #2B140C | leaf #8DC63F | moss #6FA83A | cream #F6F3EC
*/

const columns = [
  {
    heading: 'Reservations',
    links: [
      { label: 'Online check-in', href: '#' },
      { label: 'Rewards', href: '#' },
    ],
  },
  {
    heading: 'Explore',
    links: [
      { label: 'Our Resort', href: '#' },
      { label: 'Rooms & Suites', href: '#' },
      { label: 'Spa', href: '#' },
      { label: 'Dining', href: '#' },
    ],
  },
];

const teekaLinks = [
  [
    { label: 'Promotions', href: '#' },
    { label: 'Contact', href: '#' },
    { label: 'Press', href: '#' },
  ],
  [
    { label: 'About us', href: '#' },
    { label: 'Sustainability', href: '#' },
    { label: 'Work with us', href: '#' },
  ],
];

const legalLinks = [
  { label: 'Cookies Policy', href: '#' },
  { label: 'Privacy Policy', href: '#' },
  { label: 'Legal Notice', href: '#' },
];

const socials = [
  {
    label: 'Instagram',
    href: '#',
    icon: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" />
      </>
    ),
  },
  {
    label: 'Facebook',
    href: '#',
    icon: <path d="M14 8h3V4h-3a4 4 0 0 0-4 4v3H7v4h3v6h4v-6h3l1-4h-4V8z" />,
  },
  {
    label: 'YouTube',
    href: '#',
    icon: (
      <>
        <rect x="2.5" y="5.5" width="19" height="13" rx="4" />
        <path d="M10 9.5v5l4.5-2.5z" />
      </>
    ),
  },
];

const linkClass =
  'text-[16px] text-[#3B1D12] transition-colors hover:text-[#6FA83A] focus-visible:text-[#6FA83A] focus-visible:outline-none';

const Footer = () => {
  return (
    <footer className="w-full  bg-[#F6F3EC] font-sans text-[#3B1D12]">
      {/* Main footer */}
      <div className="mx-auto max-w-[1700px] px-5 pb-16 pt-14 sm:px-8 md:pb-24 md:pt-[72px] lg:px-[6%]">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-[1.25fr_1fr_1fr_1.3fr_0.7fr] lg:gap-8">
          {/* Logo */}
          <a href="/" aria-label="Teeka Resort home" className="block w-44 sm:w-52">
            <img
              src="/images/logo.png"
              alt="Teeka Resort Suites & Spa"
              className="w-full"
            />
          </a>

          {/* Reservations + Explore */}
          {columns.map((col) => (
            <div key={col.heading}>
              <h3 className="mb-6 text-[15px] font-semibold uppercase tracking-[-0.2px]">
                {col.heading}
              </h3>
              <ul className="space-y-[10px]">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className={linkClass}>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Teeka links (two sub-columns) */}
          <div>
            <h3 className="mb-6 text-[15px] font-semibold uppercase tracking-[-0.2px]">
              Teeka Resort
            </h3>
            <div className="flex gap-10 xl:gap-16">
              {teekaLinks.map((group, i) => (
                <ul key={i} className="space-y-[10px]">
                  {group.map((link) => (
                    <li key={link.label}>
                      <a href={link.href} className={linkClass}>
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <h3 className="mb-6 text-[15px] font-semibold uppercase tracking-[-0.2px]">
              Follow Teeka
            </h3>
            <ul className="flex gap-3">
              {socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    aria-label={s.label}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-[#3B1D12]/25 text-[#3B1D12] transition-colors hover:border-[#8DC63F] hover:bg-[#8DC63F] focus-visible:border-[#8DC63F] focus-visible:bg-[#8DC63F] focus-visible:outline-none"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      {s.icon}
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Legal bar */}
      <div className="bg-[#3B1D12] text-[#F6F3EC]">
        <div className="mx-auto flex max-w-[1700px] flex-col gap-4 px-5 py-6 sm:px-8 md:h-[77px] md:flex-row md:items-center md:justify-between md:py-0 lg:px-[6%]">
          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-[15px]">
            {legalLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="transition-colors hover:text-[#8DC63F] focus-visible:text-[#8DC63F] focus-visible:outline-none"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <p className="text-[15px] font-semibold md:mr-24">
            © 2026 Teeka Resort Suites &amp; Spa
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;