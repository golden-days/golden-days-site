import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import { getContent } from "@/lib/content-server";
import { pageMetadataFor } from "@/lib/seo";

export function generateMetadata({ params }: PageProps<"/[lang]/privacy">) {
  return pageMetadataFor(params, "/privacy", (t) => t.privacy.meta);
}

export default async function PrivacyPage() {
  const t = await getContent();
  const page = t.privacy;

  return (
    <>
      <PageHero heading={page.heading} lead={page.lead} />

      <Section>
        <div className="max-w-3xl space-y-10">
          {page.sections.map((section) => (
            <div key={section.heading}>
              <h2 className="text-2xl sm:text-3xl">{section.heading}</h2>
              <div className="mt-4 space-y-4">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
          ))}
          <p className="text-lg text-ink/80">{page.updated}</p>
        </div>
      </Section>
    </>
  );
}
