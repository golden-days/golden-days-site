import ButtonLink from "@/components/ButtonLink";
import CallToAction from "@/components/CallToAction";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import { getContent } from "@/lib/content-server";
import { pageMetadataFor } from "@/lib/seo";

export function generateMetadata({ params }: PageProps<"/[lang]/enrollment">) {
  return pageMetadataFor(params, "/enrollment", (t) => t.enrollment.meta);
}

export default async function EnrollmentPage() {
  const t = await getContent();
  const page = t.enrollment;

  return (
    <>
      <PageHero heading={page.heading} lead={page.lead} />

      <Section>
        <div className="rounded-xl border-2 border-navy bg-cream p-6 sm:flex sm:items-center sm:justify-between sm:gap-6">
          <div>
            <h2 className="text-2xl">{page.qualifyPrompt.heading}</h2>
            <p className="mt-2 text-lg">{page.qualifyPrompt.text}</p>
          </div>
          <div className="mt-5 shrink-0 sm:mt-0">
            <ButtonLink href="/qualify">{t.buttons.doIQualify}</ButtonLink>
          </div>
        </div>

        <h2 className="mt-12 text-2xl sm:text-3xl">{page.qualifies.heading}</h2>
        <p className="mt-4 max-w-3xl">{page.qualifies.intro}</p>
        <ul className="mt-4 max-w-3xl list-disc space-y-2 pl-6">
          {page.qualifies.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p className="mt-6 max-w-3xl rounded-xl border-l-8 border-gold-deep bg-cream p-5 text-lg">
          {page.qualifies.note}
        </p>
      </Section>

      <Section background="cream">
        <h2 className="text-2xl sm:text-3xl">{page.pays.heading}</h2>
        <p className="mt-4 max-w-3xl">{page.pays.intro}</p>
        <ul className="mt-8 grid list-none gap-5 md:grid-cols-3">
          {page.pays.items.map((item) => (
            <li key={item.title} className="rounded-xl border-2 border-gold-deep bg-white p-5">
              <h3 className="text-xl">{item.title}</h3>
              <p className="mt-2 text-lg">{item.text}</p>
            </li>
          ))}
        </ul>
        <p className="mt-8 max-w-3xl rounded-xl border-l-8 border-navy bg-white p-5 text-lg">
          {page.pays.note}
        </p>
      </Section>

      <Section>
        <h2 className="text-2xl sm:text-3xl">{page.bring.heading}</h2>
        <p className="mt-4 max-w-3xl">{page.bring.intro}</p>
        <ul className="mt-4 max-w-3xl list-disc space-y-2 pl-6">
          {page.bring.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </Section>

      <Section background="cream">
        <h2 className="text-2xl sm:text-3xl">{page.steps.heading}</h2>
        <ol className="mt-8 list-none space-y-5">
          {page.steps.items.map((step, index) => (
            <li
              key={step.title}
              className="rounded-xl border-2 border-navy bg-white p-5 sm:flex sm:gap-5"
            >
              <span
                aria-hidden="true"
                className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-navy font-serif text-2xl font-bold text-white"
              >
                {index + 1}
              </span>
              <div className="mt-3 sm:mt-0">
                <h3 className="text-xl">
                  <span className="sr-only">{t.a11y.stepLabel.replace("{number}", String(index + 1))}</span>
                  {step.title}
                </h3>
                <p className="mt-2">{step.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </Section>

      <Section id="faq" className="scroll-mt-28">
        <h2 className="text-2xl sm:text-3xl">{page.faq.heading}</h2>
        <div className="mt-8 max-w-3xl divide-y-2 divide-gold-deep border-y-2 border-gold-deep">
          {page.faq.items.map((item) => (
            <details key={item.question} className="group py-2">
              <summary className="flex min-h-12 cursor-pointer list-none items-center justify-between gap-4 py-2 font-serif text-xl font-bold text-navy [&::-webkit-details-marker]:hidden">
                {item.question}
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  focusable="false"
                  className="h-6 w-6 shrink-0 transition-transform group-open:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </summary>
              <p className="pb-3 pt-1">{item.answer}</p>
            </details>
          ))}
        </div>
      </Section>

      <CallToAction heading={page.cta.heading} text={page.cta.text} secondary="tour" />
    </>
  );
}
