import LocaleLink from "./LocaleLink";

type Variant = "primary" | "secondary";

const base =
  "inline-flex min-h-12 items-center justify-center gap-2 rounded-lg px-6 py-3 text-center font-semibold no-underline transition-colors";

const variants: Record<Variant, string> = {
  primary: "bg-navy text-white hover:bg-navy-dark",
  secondary: "bg-gold text-navy hover:bg-navy hover:text-white",
};

type Props = {
  href: string;
  variant?: Variant;
  className?: string;
  children: React.ReactNode;
};

/** A link that looks like a button. Use `href="tel:..."` for phone numbers. */
export default function ButtonLink({
  href,
  variant = "primary",
  className = "",
  children,
}: Props) {
  const classes = `${base} ${variants[variant]} ${className}`;
  const isExternal = href.startsWith("tel:") || href.startsWith("mailto:") || href.startsWith("http");

  if (isExternal) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <LocaleLink href={href} className={classes}>
      {children}
    </LocaleLink>
  );
}
