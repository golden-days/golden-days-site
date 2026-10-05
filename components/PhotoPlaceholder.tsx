import { en } from "@/content/en";

export type PhotoKind = "building" | "interior" | "bus";

export type PhotoInfo = {
  kind: PhotoKind;
  label: string;
  alt: string;
};

const scenes: Record<PhotoKind, React.ReactNode> = {
  building: (
    <>
      <path d="M20 150h200" strokeWidth="3" />
      <path d="M40 150V70h70v80M110 150V90h70v60" />
      <path d="M30 70h90l-45-28L30 70Z" />
      <rect x="62" y="110" width="26" height="40" />
      <rect x="52" y="84" width="18" height="16" />
      <rect x="90" y="84" width="18" height="16" />
      <rect x="126" y="104" width="18" height="16" />
      <rect x="152" y="104" width="18" height="16" />
      <path d="M126 150h44v-16h-44z" />
      <circle cx="210" cy="40" r="14" stroke="#E0B64A" />
      <path
        d="M210 16v-8M210 72v-8M234 40h8M178 40h8M227 23l6-6M193 57l-6 6M227 57l6 6M193 23l-6-6"
        stroke="#E0B64A"
      />
    </>
  ),
  interior: (
    <>
      <path d="M20 150h200" strokeWidth="3" />
      <path d="M30 40h80v50H30z" />
      <path d="M70 40v50M30 65h80" />
      <path d="M135 96h80v10h-80z" />
      <path d="M145 106v30M205 106v30" />
      <path d="M128 112h14v24h-14zM208 112h14v24h-14z" />
      <path d="M40 112h50v8H40zM48 120v26M82 120v26" />
      <path d="M44 96h8v16h-8zM78 96h8v16h-8z" stroke="#E0B64A" />
    </>
  ),
  bus: (
    <>
      <path d="M12 136h216" strokeWidth="3" />
      <rect x="24" y="48" width="180" height="76" rx="10" />
      <path d="M24 70h180" />
      <rect x="38" y="80" width="30" height="26" />
      <rect x="78" y="80" width="30" height="26" />
      <rect x="118" y="80" width="30" height="26" />
      <rect x="158" y="80" width="32" height="26" />
      <circle cx="66" cy="130" r="12" />
      <circle cx="176" cy="130" r="12" />
      <path d="M204 92h16v18h-16z" stroke="#E0B64A" />
      <path d="M34 56h60" stroke="#E0B64A" />
    </>
  ),
};

type Props = {
  photo: PhotoInfo;
  wide?: boolean;
  className?: string;
};

/**
 * A clearly labeled stand-in for a photo that has not been taken yet.
 * Swap these out for a real `next/image` once photography is available.
 */
export default function PhotoPlaceholder({ photo, wide = false, className = "" }: Props) {
  return (
    <figure
      className={`overflow-hidden rounded-xl border-4 border-dashed border-gold-deep bg-cream ${className}`}
    >
      <div
        role="img"
        aria-label={photo.alt}
        className={`flex w-full items-center justify-center ${wide ? "aspect-[16/9]" : "aspect-[4/3]"}`}
      >
        <svg
          viewBox="0 0 240 160"
          aria-hidden="true"
          focusable="false"
          className="h-full w-full p-6"
          fill="none"
          stroke="#30317E"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {scenes[photo.kind]}
        </svg>
      </div>
      <figcaption className="border-t-4 border-dashed border-gold-deep bg-white px-4 py-3 text-base text-ink">
        <span className="font-semibold text-navy">{photo.label}</span>
        <span className="block">{en.photoPlaceholderNote}</span>
      </figcaption>
    </figure>
  );
}
