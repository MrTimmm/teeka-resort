
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const leftLinks = [
    { name: 'HOME', href: '/' },
    { name: 'OUR RESORT', href: '/about' },
    { name: 'ROOMS', href: '/rooms' },
  ];

  const rightLinks = [
    { name: 'SERVICES', href: '/services' },
    { name: 'GALLERY', href: '/gallery' },
    { name: 'CONTACT US', href: '/contact' },
  ];

  const allLinks = [...leftLinks, ...rightLinks];

  // Lock body scroll while mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  // Close menu on Escape key
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setMenuOpen(false);
      }
    };

    window.addEventListener('keydown', onKey);

    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const navLinkClass =
    'flex h-8 shrink-0 items-center gap-[9px] whitespace-nowrap text-[15px] font-normal tracking-[-0.6px] text-white/95 transition-colors hover:text-[#8DC63F] xl:text-[17px]';

  return (
    <>
      {/* ================= HEADER ================= */}

      <header className="absolute inset-x-0 top-0 z-30 h-[185px] text-white">

        {/* Contact and Book Now */}
        <div className="absolute right-[7.25%] top-[26px] hidden h-[33px] items-center gap-[16px] md:flex">

          <a
            href="tel:+977-61-452033"
            className="flex h-[33px] items-center border border-[#8DC63F]/50 bg-[#3B1D12]/60 px-[11px] text-[14px] tracking-[-0.5px] transition-colors hover:border-[#8DC63F]"
          >
              +977-61-452033
          </a>

          <Link
            href="/contact"
            className="flex h-[33px] min-w-[90px] items-center justify-center gap-[10px] border border-[#8DC63F]/50 bg-[#3B1D12]/60 px-[10px] text-[14px] transition-colors hover:border-[#8DC63F]"
          >
            Book Now
          </Link>

        </div>

        {/* Logo */}
        <Link
          href="/"
          aria-label="Teeka Resort home"
          className="absolute left-[7.2%] top-0 z-10 rounded-b-[28px] bg-[#F6F3EC]/95 px-5 pb-2 pt-3 shadow-[0_8px_30px_rgba(59,29,18,0.35)] md:left-1/2 md:-translate-x-1/2"
        >
          <img
            src="/images/logo.png"
            className="w-28 sm:w-32 md:w-40"
            alt="Teeka Resort Suites & Spa"
          />
        </Link>

        {/* Desktop Left Navigation */}
        <nav className="absolute left-[7.25%] top-[80px] hidden w-[32%] items-center justify-between gap-4 lg:flex">

          {leftLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={navLinkClass}
            >
              {link.name}
            </Link>
          ))}

        </nav>

        {/* Desktop Right Navigation */}
        <nav className="absolute right-[7.5%] top-[80px] hidden w-[28%] items-center justify-between gap-4 lg:flex">

          {rightLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={navLinkClass}
            >
              {link.name}
            </Link>
          ))}

        </nav>

        {/* Mobile Menu Trigger */}
        <button
          type="button"
          onClick={() => setMenuOpen(true)}
          aria-expanded={menuOpen}
          aria-controls="mobile-offcanvas"
          className="absolute right-5 top-[38px] z-40 border border-[#8DC63F]/60 bg-[#3B1D12]/60 px-4 py-2 text-sm transition-colors hover:border-[#8DC63F] lg:hidden"
        >
          MENU ☰
        </button>

      </header>

      {/* ================= MOBILE BACKDROP ================= */}

      <div
        onClick={() => setMenuOpen(false)}
        aria-hidden="true"
        className={`fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          menuOpen
            ? 'visible opacity-100'
            : 'invisible opacity-0'
        }`}
      />

      {/* ================= MOBILE OFFCANVAS ================= */}

      <aside
        id="mobile-offcanvas"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        className={`fixed inset-y-0 right-0 z-50 flex w-[85%] max-w-[360px] flex-col bg-[#2B140C] text-white shadow-[-10px_0_40px_rgba(0,0,0,0.4)] transition-transform duration-300 ease-out lg:hidden ${
          menuOpen
            ? 'translate-x-0'
            : 'translate-x-full'
        }`}
      >

        {/* Drawer Header */}
        <div className="flex items-center justify-between border-b border-white/10 px-6 py-5">

          <span className="font-serif text-lg uppercase tracking-wide text-[#8DC63F]">
            Menu
          </span>

          <button
            type="button"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
            className="flex h-10 w-10 items-center justify-center border border-[#8DC63F]/50 text-2xl leading-none text-white transition-colors hover:border-[#8DC63F] hover:text-[#8DC63F]"
          >
            ×
          </button>

        </div>

        {/* Mobile Navigation Links */}
        <nav className="flex flex-1 flex-col gap-1 overflow-y-auto px-3 py-4">

          {allLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="border-b border-white/5 px-3 py-3 text-base tracking-wide text-white/90 transition-colors hover:bg-white/5 hover:text-[#8DC63F]"
            >
              {link.name}
            </Link>
          ))}

        </nav>

        {/* Drawer Footer */}
        <div className="flex flex-col gap-3 border-t border-white/10 px-6 py-5">

          <a
            href="tel:+34932957900"
            className="text-sm tracking-wide text-[#8DC63F] hover:underline"
          >
            +34 932 957 900
          </a>

          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="flex h-11 w-full items-center justify-center border border-[#8DC63F] bg-[#8DC63F] text-sm font-medium text-[#2B140C] transition-colors hover:bg-[#6FA83A]"
          >
            Book Now
          </Link>

        </div>

      </aside>
    </>
  );
};

export default Navbar;
