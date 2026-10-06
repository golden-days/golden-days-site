import CallToAction from "@/components/CallToAction";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import ServiceIcon from "@/components/ServiceIcon";
import { en } from "@/content/en";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: en.services.meta.title,
  description: en.services.meta.description,
  path: "/services",
});

export default function ServicesPage() {
  const services = en.services;

  return (
    <>
      <PageHero heading={services.heading} lead={services.lead} />

      <Section>
        <ul className="grid list-none gap-6 md:grid-cols-2">
          {services.items.map((item) => (
            <li key={item.title} className="rounded-xl border-2 border-gold-deep bg-white p-6">
              <ServiceIcon name={item.icon} className="h-12 w-12" />
              <h2 className="mt-3 text-2xl sm:text-3xl">{item.title}</h2>
              <p className="mt-2">{item.summary}</p>
              <ul className="mt-4 list-disc space-y-2 pl-6 text-lg">
                {item.details.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Section>

      <Section background="cream">
        <h2 className="text-2xl sm:text-3xl">{services.dayHeading}</h2>
        <ol className="mt-8 list-none border-t-2 border-gold-deep">
          {services.daySchedule.map((slot) => (
            <li
              key={slot.time}
              className="grid gap-1 border-b-2 border-gold-deep py-4 sm:grid-cols-[9rem_1fr] sm:gap-6"
            >
              <span className="font-serif text-lg font-bold text-navy">{slot.time}</span>
              <span>{slot.text}</span>
            </li>
          ))}
        </ol>
      </Section>

      <CallToAction heading={services.cta.heading} text={services.cta.text} />
    </>
  );
}
