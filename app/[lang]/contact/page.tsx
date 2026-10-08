import ButtonLink from "@/components/ButtonLink";
import ContactDetails from "@/components/ContactDetails";
import ContactForm from "@/components/ContactForm";
import MapEmbed from "@/components/MapEmbed";
import PageHero from "@/components/PageHero";
import PhotoPlaceholder from "@/components/PhotoPlaceholder";
import Section from "@/components/Section";
import { getContent } from "@/lib/content-server";
import { pageMetadataFor } from "@/lib/seo";

export function generateMetadata({ params }: PageProps<"/[lang]/contact">) {
  return pageMetadataFor(params, "/contact", (t) => t.contactPage.meta);
}

export default async function ContactPage() {
  const t = await getContent();
  const page = t.contactPage;

  return (
    <>
      <PageHero heading={page.heading} lead={page.lead} />

      <Section>
        <div className="grid gap-8 lg:grid-cols-2">
          <ContactForm headingLevel="h2" showCallPrompt={false} />
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl sm:text-3xl">{page.detailsHeading}</h2>
              <div className="mt-6">
                <ContactDetails />
              </div>
            </div>
            <div id="tour" className="rounded-xl border-2 border-gold-deep bg-cream p-6">
              <h2 className="text-2xl">{page.tourHeading}</h2>
              <p className="mt-3 text-lg">{page.tourText}</p>
              <div className="mt-5">
                <ButtonLink href={t.contact.phoneHref} variant="secondary">
                  {t.buttons.scheduleTour}
                </ButtonLink>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section background="cream">
        <h2 className="text-2xl sm:text-3xl">{page.directionsHeading}</h2>
        <p className="mt-3 max-w-3xl">{page.directionsText}</p>
        <p className="mt-2 max-w-3xl">{t.contact.addressOneLine}</p>
        <div className="mt-6 grid gap-6 md:grid-cols-2 md:items-start">
          <PhotoPlaceholder photo={page.photo} />
          <MapEmbed />
        </div>
      </Section>
    </>
  );
}
