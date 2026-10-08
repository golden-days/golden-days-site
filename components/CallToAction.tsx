import ButtonLink from "@/components/ButtonLink";
import Section from "@/components/Section";
import { getContent } from "@/lib/content-server";

type Props = {
  heading: string;
  text: string;
  /** "Schedule a tour" belongs on the Enrollment and Contact pages. */
  secondary?: "tour" | "qualify";
};

/** The pair of buttons that closes most pages. */
export default async function CallToAction({ heading, text, secondary = "qualify" }: Props) {
  const t = await getContent();
  const isTour = secondary === "tour";

  return (
    <Section background="cream">
      <h2 className="text-2xl sm:text-3xl">{heading}</h2>
      <p className="mt-3 max-w-2xl">{text}</p>
      <div className="mt-6 flex flex-col gap-4 sm:flex-row">
        <ButtonLink href={t.contact.phoneHref}>{t.buttons.call}</ButtonLink>
        <ButtonLink href={isTour ? "/contact#tour" : "/qualify"} variant="secondary">
          {isTour ? t.buttons.scheduleTour : t.buttons.doIQualify}
        </ButtonLink>
      </div>
    </Section>
  );
}
