type Props = {
  id?: string;
  background?: "white" | "cream" | "gold";
  className?: string;
  children: React.ReactNode;
};

const backgrounds = {
  white: "bg-white",
  cream: "bg-cream",
  gold: "bg-gold",
};

/** A full-width band of color with a centered, readable column inside it. */
export default function Section({
  id,
  background = "white",
  className = "",
  children,
}: Props) {
  return (
    <section id={id} className={`${backgrounds[background]} ${className}`}>
      <div className="mx-auto w-full max-w-5xl px-4 py-12 sm:px-6 md:py-16">
        {children}
      </div>
    </section>
  );
}
