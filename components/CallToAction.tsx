import ButtonLink from "@/components/ButtonLink";
import Section from "@/components/Section";
import { en } from "@/content/en";

/** The "Call us" / "Schedule a tour" pair that closes most pages. */
export default function CallToAction({ heading, text }: { heading: string; text: string }) {
  return (
    <Section background="cream">
      <h2 className="text-2xl sm:text-3xl">{heading}</h2>
      <p className="mt-3 max-w-2xl">{text}</p>
      <div className="mt-6 flex flex-col gap-4 sm:flex-row">
        <ButtonLink href={en.contact.phoneHref}>{en.buttons.call}</ButtonLink>
        <ButtonLink href="/contact#tour" variant="secondary">
          {en.buttons.scheduleTour}
        </ButtonLink>
      </div>
    </Section>
  );
}
