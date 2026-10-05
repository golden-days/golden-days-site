import ButtonLink from "@/components/ButtonLink";
import CallToAction from "@/components/CallToAction";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import { en } from "@/content/en";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: en.enrollment.meta.title,
  description: en.enrollment.meta.description,
  path: "/enrollment",
});

export default function EnrollmentPage() {
  const page = en.enrollment;

  return (
    <>
      <PageHero heading={page.heading} lead={page.lead} />

      <Section>
        <div className="rounded-xl border-2 border-navy bg-cream p-6 sm:flex sm:items-center sm:justify-between sm:gap-6">
          <div>
            <h2 className="text-2xl">{page.qualifyPrompt.heading}</h2>
            <p className="mt-2 text-base">{page.qualifyPrompt.text}</p>
          </div>
          <div className="mt-5 shrink-0 sm:mt-0">
            <ButtonLink href="/qualify">{en.buttons.doIQualify}</ButtonLink>
          </div>
        </div>

        <h2 className="mt-12 text-2xl sm:text-3xl">{page.qualifies.heading}</h2>
        <p className="mt-4 max-w-3xl">{page.qualifies.intro}</p>
        <ul className="mt-4 max-w-3xl list-disc space-y-2 pl-6">
          {page.qualifies.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p className="mt-6 max-w-3xl rounded-xl border-l-8 border-gold-deep bg-cream p-5 text-base">
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
              <p className="mt-2 text-base">{item.text}</p>
            </li>
          ))}
        </ul>
        <p className="mt-8 max-w-3xl rounded-xl border-l-8 border-navy bg-white p-5 text-base">
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
                  <span className="sr-only">{`Step ${index + 1}: `}</span>
                  {step.title}
                </h3>
                <p className="mt-2">{step.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </Section>

      <Section>
        <h2 className="text-2xl sm:text-3xl">{page.faq.heading}</h2>
        <dl className="mt-8 max-w-3xl divide-y-2 divide-gold-deep border-y-2 border-gold-deep">
          {page.faq.items.map((item) => (
            <div key={item.question} className="py-5">
              <dt className="font-serif text-xl font-bold text-navy">{item.question}</dt>
              <dd className="mt-2">{item.answer}</dd>
            </div>
          ))}
        </dl>
      </Section>

      <CallToAction heading={page.cta.heading} text={page.cta.text} secondary="tour" />
    </>
  );
}
