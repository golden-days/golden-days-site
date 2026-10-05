import CallToAction from "@/components/CallToAction";
import PageHero from "@/components/PageHero";
import PhotoPlaceholder from "@/components/PhotoPlaceholder";
import Section from "@/components/Section";
import { en } from "@/content/en";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: en.transportation.meta.title,
  description: en.transportation.meta.description,
  path: "/transportation",
});

export default function TransportationPage() {
  const page = en.transportation;

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
              <ul className="mt-3 list-disc space-y-2 pl-6 text-base">
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
      </Section>

      <CallToAction heading={page.cta.heading} text={page.cta.text} />
    </>
  );
}
