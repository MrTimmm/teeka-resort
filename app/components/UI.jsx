import React from "react";

/*
  Design system: change a value here and every section updates.
  Colors  bark #3B1D12 | deep #2B140C | leaf #8DC63F | moss #6FA83A | cream #F6F3EC
  Type    one scale for every breakpoint: h1, h2, h3, body, small, eyebrow
  Space   one section padding, one container, one header-to-content gap
*/

export const type = {
  h1: "font-joane text-4xl font-normal leading-[1.1] tracking-tight md:text-5xl lg:text-6xl",
  h2: "font-joane text-3xl font-normal leading-[1.15] tracking-tight md:text-4xl lg:text-5xl",
  h3: "font-joane text-xl font-normal leading-snug md:text-2xl",
  body: "font-raleway text-base leading-relaxed md:text-lg",
  small: "font-raleway text-sm leading-relaxed md:text-base",
  eyebrow:
    "font-raleway text-xs font-semibold uppercase tracking-[0.2em] md:text-sm",
};

export const focusRing =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8DC63F]";

const tones = {
  cream: "bg-[#F6F3EC] text-[#3B1D12]",
  white: "bg-white text-[#3B1D12]",
  dark: "bg-[#2B140C] text-[#F6F3EC]",
};

export function Section({ id, tone = "cream", labelledBy, children }) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={`${tones[tone]} px-5 py-16 sm:px-8 md:py-24 lg:px-12`}
    >
      <div className="mx-auto w-full max-w-6xl">{children}</div>
    </section>
  );
}

export function SectionHeader({ id, eyebrow, title, children }) {
  return (
    <div className="mb-10 max-w-2xl md:mb-14">
      <p className={`${type.eyebrow} mb-4 flex items-center gap-3 opacity-80`}>
        <span aria-hidden="true" className="h-px w-8 bg-[#8DC63F]" />
        {eyebrow}
      </p>
      <h2 id={id} className={type.h2}>
        {title}
      </h2>
      {children && <p className={`${type.body} mt-5 opacity-90`}>{children}</p>}
    </div>
  );
}

const buttonBase = `inline-flex h-12 items-center justify-center px-6 font-raleway text-sm font-semibold uppercase tracking-wider transition-colors duration-300 ${focusRing}`;
const buttonVariants = {
  primary: "bg-[#8DC63F] text-[#2B140C] hover:bg-[#F6F3EC]",
  solid: "bg-[#3B1D12] text-[#F6F3EC] hover:bg-[#8DC63F] hover:text-[#2B140C]",
  outline:
    "border border-current hover:bg-[#8DC63F] hover:border-[#8DC63F] hover:text-[#2B140C]",
};

export function ButtonLink({ href, variant = "primary", children, ...props }) {
  return (
    <a href={href} className={`${buttonBase} ${buttonVariants[variant]}`} {...props}>
      {children}
    </a>
  );
}

export function TextLink({ href, children, ...props }) {
  return (
    <a
      href={href}
      className={`inline-flex items-center gap-2 border-b border-[#8DC63F] pb-1 font-raleway text-sm font-semibold uppercase tracking-wider transition-opacity hover:opacity-70 ${focusRing}`}
      {...props}
    >
      {children}
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-4 w-4" aria-hidden="true">
        <path d="M4 12h15M13 5l7 7-7 7" />
      </svg>
    </a>
  );
}

export function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="#6FA83A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-1 h-4 w-4 shrink-0" aria-hidden="true">
      <path d="m5 12 5 5 9-10" />
    </svg>
  );
}