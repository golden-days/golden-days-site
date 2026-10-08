import LocaleLink from "@/components/LocaleLink";
import CallToAction from "@/components/CallToAction";
import PageHero from "@/components/PageHero";
import PhotoPlaceholder from "@/components/PhotoPlaceholder";
import Section from "@/components/Section";
import { getContent } from "@/lib/content-server";
import { pageMetadataFor } from "@/lib/seo";

export function generateMetadata({ params }: PageProps<"/[lang]/transportation">) {
  return pageMetadataFor(params, "/transportation", (t) => t.transportation.meta);
}

export default async function TransportationPage() {
  const t = await getContent();
  const page = t.transportation;

  return (
    <>
      <PageHero heading={page.heading} lead={page.lead} />

      <Section>
        <PhotoPlaceholder photo={page.photo} wide className="mx-auto max-w-3xl" />
      </Section>

      {page.sections.map((section, index) => (
        <Section key={section.heading} background={index % 2 === 0 ? "cream" : "white"}>
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

      <Section>
        <PhotoPlaceholder photo={page.secondPhoto} wide className="mx-auto max-w-3xl" />
        <p className="mx-auto mt-8 max-w-3xl">
          <LocaleLink
            href="/enrollment#faq"
            className="inline-flex min-h-12 min-w-12 items-center font-semibold text-navy underline decoration-2 underline-offset-4 hover:text-navy-dark"
          >
            {t.enrollment.faq.heading}
          </LocaleLink>
        </p>
      </Section>

      <CallToAction heading={page.cta.heading} text={page.cta.text} />
    </>
  );
}
