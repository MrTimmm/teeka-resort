'use client';

import React, { useState } from 'react';


/*
  bark #3B1D12 | deep #2B140C | leaf #8DC63F | moss #6FA83A | cream #F6F3EC
*/

const contactInfo = [
  {
    label: 'Address',
    lines: ['Hallan Chowk', 'Pokhara-6, Nepal'],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 21s7-6.5 7-12a7 7 0 1 0-14 0c0 5.5 7 12 7 12z" />
        <circle cx="12" cy="9" r="2.5" />
      </svg>
    ),
  },
  {
    label: 'Phone',
    lines: ['+977-61-452033', '453986', '456599'],
    href: 'tel:+97761452033',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />
      </svg>
    ),
  },
  {
    label: 'Email',
    lines: ['sales@teekaresort.com'],
    href: 'mailto:sales@teekaresort.com',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </svg>
    ),
  },
  {
    label: 'Front Desk',
    lines: ['Open 24 hours', 'Daily'],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </svg>
    ),
  },
];

export default function ContactPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>

      {/* Hero */}
      <main className="relative min-h-[830px] w-full overflow-hidden bg-[#2B140C] font-sans text-white md:h-screen md:min-h-[700px]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/lobby.jpg')" }}
        />
        <div className="absolute inset-0 bg-[#2B140C]/40" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#2B140C]/30 via-transparent to-[#2B140C]/60" />

        <section className="absolute inset-x-0 bottom-0 z-10 px-5 pb-12 text-center sm:pb-16 md:pb-20 md:px-10">
          <h1 className="mx-auto max-w-[1570px] font-serif text-[36px] uppercase leading-[1.16] tracking-[-1.5px] sm:text-[46px] md:text-[50px] lg:text-[60px] xl:text-5xl xl:tracking-[-2px]">
            We are here to make your stay
            <span className="block">truly unforgettable</span>
          </h1>

          <p className="mt-[18px] text-[16px] font-normal tracking-[-0.5px] text-[#F6F3EC] sm:text-[19px] md:text-md">
            Reach out to our team for reservations, events, or any questions — we respond within 24 hours.
          </p>
        </section>
      </main>

      {/* Contact cards + form */}
      <section className="w-full bg-[#F6F3EC] px-4 py-14 text-[#3B1D12] sm:px-8 sm:py-16 md:py-20 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-[1320px] mb-24 text-center">
            <p className=" text-xl font-normal">
              Contact Teeka Resort
            </p>

            <h2 className="mx-auto mb-4 max-w-4xl font-serif text-3xl uppercase leading-tight md:text-6xl">
              GET IN TOUCH
            </h2>

            <p className="mx-auto max-w-5xl text-lg leading-relaxed md:text-xl">
              Whether you have questions about our rooms, dining, spa, or events, our team is here to assist you. Fill out the form below or reach us directly through the provided contact details.
            </p>

          </div>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
            {/* Contact info */}
            <div>
              <p className="mb-3 text-[12px] font-medium uppercase tracking-[0.3em] text-[#6FA83A] sm:text-[13px]">
                Contact Details
              </p>
              <h3 className="mb-8 font-serif text-[22px] uppercase leading-tight tracking-[-0.3px] sm:text-2xl md:text-3xl">
                Reach us directly
              </h3>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                {contactInfo.map((item) => (
                  <div
                    key={item.label}
                    className="flex gap-4 border-t border-[#3B1D12]/15 pt-5"
                  >
                    <div className="mt-0.5 h-6 w-6 shrink-0 text-[#6FA83A]">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="mb-1.5 text-[13px] font-semibold uppercase tracking-[0.08em] text-[#3B1D12]/70">
                        {item.label}
                      </h4>
                      {item.lines.map((line, i) => (
                        <p
                          key={i}
                          className="text-[15px] leading-relaxed text-[#3B1D12]/85 sm:text-base"
                        >
                          {item.href && i === 0 ? (
                            <a
                              href={item.href}
                              className="transition-colors hover:text-[#6FA83A]"
                            >
                              {line}
                            </a>
                          ) : (
                            line
                          )}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact form */}
            <div className="bg-white p-6 shadow-sm sm:p-8 md:p-10">
              <h3 className="mb-2 font-serif text-[22px] uppercase leading-tight tracking-[-0.3px] sm:text-2xl md:text-3xl">
                Send us a message
              </h3>
              <p className="mb-8 text-[15px] leading-relaxed text-[#3B1D12]/75 sm:text-base">
                Fill in the form below and our team will get back to you within 24 hours.
              </p>

              {submitted ? (
                <div className="flex flex-col items-start gap-4 border-l-2 border-[#8DC63F] bg-[#F6F3EC] px-5 py-6">
                  <p className="text-lg font-medium text-[#3B1D12]">
                    Thank you — message sent!
                  </p>
                  <p className="text-[15px] leading-relaxed text-[#3B1D12]/75">
                    We&apos;ll get back to you shortly. For urgent enquiries, please call
                    our 24-hour front desk.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setForm({ name: '', email: '', phone: '', subject: '', message: '' });
                    }}
                    className="text-sm font-medium uppercase tracking-wide text-[#6FA83A] underline underline-offset-4 hover:text-[#3B1D12]"
                  >
                    Send another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="mb-1.5 block text-[13px] font-medium uppercase tracking-[0.05em] text-[#3B1D12]/70">
                        Full name *
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={form.name}
                        onChange={handleChange}
                        className="w-full border-b border-[#3B1D12]/25 bg-transparent px-1 py-2 text-[15px] text-[#3B1D12] outline-none transition-colors focus:border-[#8DC63F]"
                        placeholder="Your name"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="mb-1.5 block text-[13px] font-medium uppercase tracking-[0.05em] text-[#3B1D12]/70">
                        Email *
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        className="w-full border-b border-[#3B1D12]/25 bg-transparent px-1 py-2 text-[15px] text-[#3B1D12] outline-none transition-colors focus:border-[#8DC63F]"
                        placeholder="you@example.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="mb-1.5 block text-[13px] font-medium uppercase tracking-[0.05em] text-[#3B1D12]/70">
                        Phone
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={form.phone}
                        onChange={handleChange}
                        className="w-full border-b border-[#3B1D12]/25 bg-transparent px-1 py-2 text-[15px] text-[#3B1D12] outline-none transition-colors focus:border-[#8DC63F]"
                        placeholder="+977 ..."
                      />
                    </div>

                    <div>
                      <label htmlFor="subject" className="mb-1.5 block text-[13px] font-medium uppercase tracking-[0.05em] text-[#3B1D12]/70">
                        Subject
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={form.subject}
                        onChange={handleChange}
                        className="w-full appearance-none border-b border-[#3B1D12]/25 bg-transparent px-1 py-2 text-[15px] text-[#3B1D12] outline-none transition-colors focus:border-[#8DC63F]"
                      >
                        <option value="">Choose a topic</option>
                        <option value="reservation">Reservation</option>
                        <option value="event">Event / Hall booking</option>
                        <option value="dining">Dining</option>
                        <option value="spa">Spa</option>
                        <option value="general">General enquiry</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="mb-1.5 block text-[13px] font-medium uppercase tracking-[0.05em] text-[#3B1D12]/70">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      className="w-full resize-none border-b border-[#3B1D12]/25 bg-transparent px-1 py-2 text-[15px] text-[#3B1D12] outline-none transition-colors focus:border-[#8DC63F]"
                      placeholder="How can we help you?"
                    />
                  </div>

                  <button
                    type="submit"
                    className="inline-flex h-12 w-full items-center justify-center bg-[#8DC63F] px-8 text-sm font-semibold uppercase tracking-wide text-[#2B140C] transition-colors hover:bg-[#3B1D12] hover:text-[#F6F3EC] sm:w-auto"
                  >
                    Send message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Full-width embedded map */}
      <section className="w-full bg-[#F6F3EC]">
        <div className="w-full overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3515.686368190778!2d83.95980297499328!3d28.21683990283696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399594e18afccb67%3A0x1324a450f75d25c3!2sTeeka%20Resort%20Suites%20and%20Spa!5e0!3m2!1sen!2snp!4v1794023797673!5m2!1sen!2snp"
            title="Teeka Resort location map"
            className="block h-[350px] w-full border-0 sm:h-[420px] md:h-[480px] lg:h-[520px]"
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </div>
      </section>


    </>
  );
}