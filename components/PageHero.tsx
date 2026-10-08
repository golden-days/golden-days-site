import Sunburst from "@/components/Sunburst";

export default function PageHero({ heading, lead }: { heading: string; lead: string }) {
  return (
    <div className="relative overflow-hidden border-b-4 border-gold bg-cream">
      <Sunburst className="pointer-events-none absolute top-0 right-[max(1rem,calc((100%-64rem)/2))] h-auto w-56 rotate-180 sm:w-72 opacity-40" />
      <div className="relative mx-auto w-full max-w-5xl px-4 py-12 sm:px-6 md:py-16">
        <h1 className="text-3xl sm:text-4xl md:text-5xl">{heading}</h1>
        <p className="mt-4 max-w-2xl">{lead}</p>
      </div>
    </div>
  );
}
