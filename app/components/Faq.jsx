import { faqs } from '../lib/site';
import { Section, SectionHeader, focusRing, type } from '../components/UI';

const Faq = () => {
  return (
    <Section id="faq" tone="cream" labelledBy="faq-title">
      <SectionHeader
        id="faq-title"
        eyebrow="Questions"
        title="Frequently asked questions"
      />

      <div className="max-w-3xl divide-y divide-[#3B1D12]/15 border-y border-[#3B1D12]/15">
        {faqs.map((item) => (
          <details key={item.q} className="group py-5">
            <summary className={`${type.h3} flex cursor-pointer list-none items-center justify-between gap-6 ${focusRing}`}>
              {item.q}
              <span aria-hidden="true" className="text-2xl leading-none text-[#6FA83A] transition-transform group-open:rotate-45">
                +
              </span>
            </summary>
            <p className={`${type.body} mt-4 max-w-2xl opacity-90`}>{item.a}</p>
          </details>
        ))}
      </div>
    </Section>
  );
};

export default Faq;