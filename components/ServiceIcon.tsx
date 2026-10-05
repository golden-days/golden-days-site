export type IconName =
  | "nursing"
  | "rehabilitation"
  | "nutrition"
  | "socialWork"
  | "recreation"
  | "transportation";

const paths: Record<IconName, React.ReactNode> = {
  nursing: (
    <>
      <path d="M24 10v28M10 24h28" />
      <circle cx="24" cy="24" r="19" />
    </>
  ),
  rehabilitation: (
    <>
      <path d="M8 24h6M34 24h6M14 16v16M34 16v16" />
      <path d="M20 20v8M28 20v8M20 24h8" />
    </>
  ),
  nutrition: (
    <>
      <path d="M13 8v14a5 5 0 0 0 10 0V8M18 22v18" />
      <path d="M35 8c-3 4-4 8-4 12s1 6 4 6v14" />
    </>
  ),
  socialWork: (
    <>
      <path d="M24 40S9 31 9 20a8 8 0 0 1 15-4 8 8 0 0 1 15 4c0 11-15 20-15 20Z" />
    </>
  ),
  recreation: (
    <>
      <circle cx="17" cy="34" r="6" />
      <circle cx="35" cy="30" r="6" />
      <path d="M23 34V12l18-4v22" />
    </>
  ),
  transportation: (
    <>
      <rect x="7" y="12" width="34" height="20" rx="3" />
      <path d="M7 22h34M18 12v10" />
      <circle cx="16" cy="36" r="3" />
      <circle cx="33" cy="36" r="3" />
    </>
  ),
};

/** Simple line icons drawn in the gold accent color. Decorative only. */
export default function ServiceIcon({
  name,
  className = "",
}: {
  name: IconName;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 48 48"
      aria-hidden="true"
      focusable="false"
      className={className}
      fill="none"
      stroke="#E0B64A"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {paths[name]}
    </svg>
  );
}
