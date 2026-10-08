import CallToAction from "@/components/CallToAction";
import PageHero from "@/components/PageHero";
import PhotoPlaceholder from "@/components/PhotoPlaceholder";
import Section from "@/components/Section";
import { getContent } from "@/lib/content-server";
import { pageMetadataFor } from "@/lib/seo";

export function generateMetadata({ params }: PageProps<"/[lang]/about">) {
  return pageMetadataFor(params, "/about", (t) => t.about.meta);
}

export default async function AboutPage() {
  const t = await getContent();
  const about = t.about;

  return (
    <>
      <PageHero heading={about.heading} lead={about.lead} />

      <Section>
        <h2 className="text-2xl sm:text-3xl">{about.story.heading}</h2>
        <div className="mt-4 max-w-3xl space-y-4">
          {about.story.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </Section>

      <Section background="cream">
        <h2 className="text-2xl sm:text-3xl">{about.values.heading}</h2>
        <ul className="mt-8 grid list-none gap-5 sm:grid-cols-2">
          {about.values.items.map((item) => (
            <li key={item.title} className="rounded-xl border-2 border-gold-deep bg-white p-5">
              <h3 className="text-xl">{item.title}</h3>
              <p className="mt-2 text-lg">{item.text}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section>
        <h2 className="text-2xl sm:text-3xl">{about.team.heading}</h2>
        <div className="mt-4 max-w-3xl space-y-4">
          {about.team.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </Section>

      <Section background="cream">
        <div className="grid gap-8 md:grid-cols-2 md:items-center">
          <PhotoPlaceholder photo={about.center.photo} />
          <div>
            <h2 className="text-2xl sm:text-3xl">{about.center.heading}</h2>
            <div className="mt-4 space-y-4">
              {about.center.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <div className="bg-gold">
        <div className="mx-auto w-full max-w-5xl px-4 py-8 text-center sm:px-6">
          <p className="font-serif text-xl font-bold text-navy sm:text-2xl">{t.home.trust.text}</p>
        </div>
      </div>

      <CallToAction heading={about.cta.heading} text={about.cta.text} />
    </>
  );
}
