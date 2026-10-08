import ButtonLink from "@/components/ButtonLink";
import Section from "@/components/Section";
import { getContent } from "@/lib/content-server";

export async function generateMetadata() {
  const t = await getContent();
  return { title: t.notFound.metaTitle, robots: "noindex" };
}

export default async function NotFound() {
  const t = await getContent();

  return (
    <Section>
      <h1 className="text-3xl sm:text-4xl">{t.notFound.heading}</h1>
      <p className="mt-4 max-w-2xl">{t.notFound.text}</p>
      <div className="mt-8 flex flex-col gap-4 sm:flex-row">
        <ButtonLink href="/">{t.notFound.homeLabel}</ButtonLink>
        <ButtonLink href={t.contact.phoneHref} variant="secondary">
          {t.buttons.callWithNumber}
        </ButtonLink>
      </div>
    </Section>
  );
}
