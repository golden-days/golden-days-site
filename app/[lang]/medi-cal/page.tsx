import CallToAction from "@/components/CallToAction";
import FaqJsonLd from "@/components/FaqJsonLd";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import { getContent } from "@/lib/content-server";
import { pageMetadataFor } from "@/lib/seo";

export function generateMetadata({ params }: PageProps<"/[lang]/medi-cal">) {
  return pageMetadataFor(params, "/medi-cal", (t) => t.coverage.meta);
}

/** "Does Medi-Cal cover it?": plans by county, who qualifies, cost, and common questions. */
export default async function MediCalPage() {
  const t = await getContent();
  const page = t.coverage;

  return (
    <>
      <PageHero heading={page.heading} lead={page.lead} />

      {page.sections.map((section, index) => (
        <Section key={section.heading} background={index % 2 === 0 ? "white" : "cream"}>
          <h2 className="text-2xl sm:text-3xl">{section.heading}</h2>
          <div className="mt-4 max-w-3xl space-y-4">
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          {"list" in section && section.list ? (
            <div className="mt-6 max-w-3xl rounded-xl border-2 border-gold-deep bg-white p-5">
              <h3 className="text-xl">{section.list.label}</h3>
              <ul className="mt-3 list-disc space-y-2 pl-6 text-lg">
                {section.list.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ) : null}
        </Section>
      ))}

      <FaqJsonLd items={page.faq.items} />
      <Section id="faq">
        <h2 className="text-2xl sm:text-3xl">{page.faq.heading}</h2>
        <dl className="mt-6 max-w-3xl space-y-6">
          {page.faq.items.map((item) => (
            <div key={item.question}>
              <dt className="font-serif text-xl font-bold text-navy">{item.question}</dt>
              <dd className="mt-2">{item.answer}</dd>
            </div>
          ))}
        </dl>
      </Section>

      <CallToAction heading={page.cta.heading} text={page.cta.text} />
    </>
  );
}
