import PrintButton from "@/components/PrintButton";
import { fax } from "@/content/en";
import { getContent } from "@/lib/content-server";
import { pageMetadataFor } from "@/lib/seo";

export function generateMetadata({ params }: PageProps<"/[lang]/referrals">) {
  return pageMetadataFor(params, "/referrals", (t) => t.referrals.meta);
}

/**
 * For doctors, case managers and discharge planners. Built to print on one
 * letter page: the header, footer and call bar are hidden in print by the
 * `.referral-sheet` rules in globals.css, and spacing shrinks with `print:` classes.
 */
export default async function ReferralsPage() {
  const t = await getContent();
  const page = t.referrals;
  const qualifies = t.enrollment.qualifies;
  const plans = t.coverage.sections.find((section) => "list" in section && section.list);
  const planList = plans && "list" in plans ? plans.list : undefined;

  return (
    <div className="referral-sheet">
      <div className="border-b-4 border-gold bg-cream print:border-b-2 print:bg-white">
        <div className="mx-auto w-full max-w-5xl px-4 py-12 sm:px-6 md:py-16 print:max-w-none print:px-0 print:py-2">
          <p className="hidden font-serif text-lg font-bold text-navy print:block">{t.site.name}</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl print:text-2xl">{page.heading}</h1>
          <p className="mt-4 max-w-3xl print:mt-1 print:max-w-none print:text-[9.5pt]">{page.lead}</p>
          <div className="mt-6 print:hidden">
            <PrintButton label={page.printLabel} />
          </div>
        </div>
      </div>

      <div className="mx-auto grid w-full max-w-5xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-2 md:py-16 print:max-w-none print:grid-cols-2 print:gap-x-6 print:gap-y-3 print:px-0 print:py-2 print:text-[9.5pt]">
        <section>
          <h2 className="text-2xl sm:text-3xl print:text-lg">{page.fitHeading}</h2>
          <p className="mt-3 print:mt-1">{qualifies.intro}</p>
          <ul className="mt-3 list-disc space-y-2 pl-6 print:mt-1 print:space-y-0.5">
            {qualifies.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="mt-4 rounded-lg border-2 border-gold-deep bg-cream p-4 font-semibold print:mt-2 print:bg-white print:p-2">
            {qualifies.note}
          </p>
        </section>

        <section>
          <h2 className="text-2xl sm:text-3xl print:text-lg">{page.provideHeading}</h2>
          <ul className="mt-3 list-disc space-y-1 pl-6 print:mt-1 print:space-y-0">
            {t.services.items.map((item) => (
              <li key={item.title}>{item.title}</li>
            ))}
          </ul>
          <p className="mt-3 print:mt-1">{page.provideNote}</p>
          <p className="mt-3 print:mt-1">{t.contact.languagesLine}</p>
          {planList ? (
            <div className="mt-4 print:mt-2">
              <h3 className="text-xl print:text-base">{planList.label}</h3>
              <ul className="mt-2 list-disc space-y-1 pl-6 print:mt-0.5 print:space-y-0">
                {planList.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className="mt-2 print:mt-0.5">{page.privatePay}</p>
            </div>
          ) : null}
        </section>

        <section className="md:col-span-2 print:col-span-2">
          <h2 className="text-2xl sm:text-3xl print:text-lg">{page.referHeading}</h2>
          <ol className="mt-4 grid list-none gap-4 sm:grid-cols-2 lg:grid-cols-4 print:mt-1 print:grid-cols-4 print:gap-2">
            {page.steps.map((step, index) => (
              <li key={step.title} className="rounded-xl border-2 border-gold-deep bg-white p-4 print:p-2">
                <p className="font-serif text-xl font-bold text-navy print:text-base">
                  {index + 1}. {step.title}
                </p>
                <p className="mt-2 print:mt-0.5">{step.text}</p>
              </li>
            ))}
          </ol>
          <p className="mt-4 font-semibold print:mt-2">{page.privacyNote}</p>
        </section>

        <section className="rounded-xl bg-cream p-6 md:col-span-2 print:col-span-2 print:border-2 print:border-gold-deep print:bg-white print:p-3">
          <h2 className="text-2xl sm:text-3xl print:text-lg">{page.contactHeading}</h2>
          <div className="mt-3 grid gap-4 sm:grid-cols-2 print:mt-1 print:grid-cols-2 print:gap-2">
            <address className="not-italic">
              <span className="block font-semibold">{t.site.name}</span>
              <span className="block">{t.contact.addressOneLine}</span>
              <span className="block">
                {t.contact.phoneLabel}:{" "}
                <a href={t.contact.phoneHref} className="font-semibold underline decoration-2 underline-offset-4">
                  {t.contact.phoneDisplay}
                </a>
              </span>
              {fax.display ? (
                <span className="block">
                  {page.faxLabel}: {fax.display}
                </span>
              ) : null}
              <span className="mt-2 block print:mt-1">{t.home.trust.licenseText}</span>
            </address>
            <div>
              <p>{t.contact.hours}</p>
              <p>{t.contact.programHours}</p>
              <p>{t.contact.enrollHours}</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
