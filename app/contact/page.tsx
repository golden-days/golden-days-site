import ButtonLink from "@/components/ButtonLink";
import ContactDetails from "@/components/ContactDetails";
import ContactForm from "@/components/ContactForm";
import MapEmbed from "@/components/MapEmbed";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import { en } from "@/content/en";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: en.contactPage.meta.title,
  description: en.contactPage.meta.description,
  path: "/contact",
});

export default function ContactPage() {
  const page = en.contactPage;

  return (
    <>
      <PageHero heading={page.heading} lead={page.lead} />

      <Section>
        <div className="grid gap-8 lg:grid-cols-2">
          <ContactForm />
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl sm:text-3xl">{page.detailsHeading}</h2>
              <div className="mt-6">
                <ContactDetails />
              </div>
              <div className="mt-6 flex flex-col gap-4 sm:flex-row">
                <ButtonLink href={en.contact.phoneHref}>{en.buttons.callWithNumber}</ButtonLink>
              </div>
            </div>
            <div id="tour" className="rounded-xl border-2 border-gold-deep bg-cream p-6">
              <h2 className="text-2xl">{page.tourHeading}</h2>
              <p className="mt-3 text-base">{page.tourText}</p>
              <div className="mt-5">
                <ButtonLink href={en.contact.phoneHref} variant="secondary">
                  {en.buttons.scheduleTour}
                </ButtonLink>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section background="cream">
        <h2 className="text-2xl sm:text-3xl">{page.directionsHeading}</h2>
        <p className="mt-3 max-w-3xl">{page.directionsText}</p>
        <p className="mt-2 max-w-3xl">{en.contact.addressOneLine}</p>
        <div className="mt-6">
          <MapEmbed />
        </div>
      </Section>
    </>
  );
}
