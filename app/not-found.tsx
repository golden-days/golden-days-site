import ButtonLink from "@/components/ButtonLink";
import Section from "@/components/Section";
import { en } from "@/content/en";

export const metadata = {
  title: "Page not found",
  robots: "noindex",
};

export default function NotFound() {
  return (
    <Section>
      <h1 className="text-3xl sm:text-4xl">We could not find that page</h1>
      <p className="mt-4 max-w-2xl">
        The page may have moved. Try the menu at the top of the screen, or call us and we will
        help.
      </p>
      <div className="mt-8 flex flex-col gap-4 sm:flex-row">
        <ButtonLink href="/">Go to the home page</ButtonLink>
        <ButtonLink href={en.contact.phoneHref} variant="secondary">
          {en.buttons.callWithNumber}
        </ButtonLink>
      </div>
    </Section>
  );
}
