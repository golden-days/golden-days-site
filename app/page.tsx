import Link from "next/link";
import ButtonLink from "@/components/ButtonLink";
import ContactDetails from "@/components/ContactDetails";
import ContactForm from "@/components/ContactForm";
import MapEmbed from "@/components/MapEmbed";
import PhotoPlaceholder from "@/components/PhotoPlaceholder";
import Section from "@/components/Section";
import ServiceIcon from "@/components/ServiceIcon";
import Sunburst from "@/components/Sunburst";
import { en } from "@/content/en";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: en.home.meta.title,
  description: en.home.meta.description,
  path: "/",
});

export default function HomePage() {
  const home = en.home;

  return (
    <>
      <div className="relative overflow-hidden border-b-4 border-gold bg-cream">
        <Sunburst className="pointer-events-none absolute -top-16 left-1/2 h-72 w-[40rem] -translate-x-1/2 opacity-40" />
        <div className="relative mx-auto grid w-full max-w-5xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-2 md:items-center md:py-16">
          <div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl">{home.hero.heading}</h1>
            <p className="mt-4">{home.hero.intro}</p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <ButtonLink href={en.contact.phoneHref}>{en.buttons.callWithNumber}</ButtonLink>
              <ButtonLink href="/contact#tour" variant="secondary">
                {en.buttons.scheduleTour}
              </ButtonLink>
            </div>
          </div>
          <PhotoPlaceholder photo={home.hero.photo} wide />
        </div>
      </div>

      <Section>
        <h2 className="text-2xl sm:text-3xl">{home.whoWeServe.heading}</h2>
        <div className="mt-4 max-w-3xl space-y-4">
          {home.whoWeServe.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </Section>

      <Section background="cream">
        <h2 className="text-2xl sm:text-3xl">{home.services.heading}</h2>
        <p className="mt-3 max-w-3xl">{home.services.intro}</p>
        <ul className="mt-8 grid list-none gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {home.services.tiles.map((tile) => (
            <li
              key={tile.title}
              className="rounded-xl border-2 border-gold-deep bg-white p-5"
            >
              <ServiceIcon name={tile.icon} className="h-12 w-12" />
              <h3 className="mt-3 text-xl">{tile.title}</h3>
              <p className="mt-2 text-base">{tile.text}</p>
            </li>
          ))}
        </ul>
        <p className="mt-8">
          <Link
            href={home.services.linkHref}
            className="font-semibold text-navy underline decoration-2 underline-offset-4 hover:text-navy-dark"
          >
            {home.services.linkLabel}
          </Link>
        </p>
      </Section>

      <Section>
        <div className="grid gap-8 md:grid-cols-2 md:items-center">
          <PhotoPlaceholder photo={home.transportation.photo} />
          <div>
            <h2 className="text-2xl sm:text-3xl">{home.transportation.heading}</h2>
            <div className="mt-4 space-y-4">
              {home.transportation.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <p className="mt-6">
              <Link
                href={home.transportation.linkHref}
                className="font-semibold text-navy underline decoration-2 underline-offset-4 hover:text-navy-dark"
              >
                {home.transportation.linkLabel}
              </Link>
            </p>
          </div>
        </div>
      </Section>

      <Section background="cream">
        <h2 className="text-2xl sm:text-3xl">{home.enrollment.heading}</h2>
        <p className="mt-3 max-w-3xl">{home.enrollment.intro}</p>
        <ol className="mt-8 grid list-none gap-5 sm:grid-cols-2">
          {home.enrollment.steps.map((step, index) => (
            <li key={step.title} className="rounded-xl border-2 border-navy bg-white p-5">
              <span
                aria-hidden="true"
                className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-navy font-serif text-2xl font-bold text-white"
              >
                {index + 1}
              </span>
              <h3 className="mt-3 text-xl">
                <Link
                  href={home.enrollment.linkHref}
                  className="text-navy underline decoration-2 underline-offset-4 hover:text-navy-dark"
                >
                  <span className="sr-only">{`Step ${index + 1}: `}</span>
                  {step.title}
                </Link>
              </h3>
              <p className="mt-2 text-base">{step.text}</p>
            </li>
          ))}
        </ol>
        <p className="mt-8">
          <Link
            href={home.enrollment.linkHref}
            className="font-semibold text-navy underline decoration-2 underline-offset-4 hover:text-navy-dark"
          >
            {home.enrollment.linkLabel}
          </Link>
        </p>
      </Section>

      <Section>
        <div className="max-w-3xl rounded-xl border-l-8 border-gold-deep bg-cream p-6">
          <h2 className="text-2xl">{home.cost.heading}</h2>
          <p className="mt-3">{home.cost.text}</p>
        </div>
      </Section>

      <div className="bg-gold">
        <div className="mx-auto w-full max-w-5xl px-4 py-8 text-center sm:px-6">
          <p className="font-serif text-xl font-bold text-navy sm:text-2xl">{home.trust.text}</p>
        </div>
      </div>

      <Section id="contact">
        <h2 className="text-2xl sm:text-3xl">{home.contact.heading}</h2>
        <p className="mt-3 max-w-3xl">{home.contact.intro}</p>
        <div className="mt-8 grid gap-8 lg:grid-cols-2">
          <ContactForm />
          <div className="space-y-8">
            <ContactDetails />
            <MapEmbed />
          </div>
        </div>
      </Section>
    </>
  );
}
