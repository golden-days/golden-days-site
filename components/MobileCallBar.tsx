import { en } from "@/content/en";

/** A call button pinned to the bottom of the screen on phones. */
export default function MobileCallBar() {
  return (
    <aside className="fixed inset-x-0 bottom-0 z-50 border-t-4 border-gold bg-white p-2 lg:hidden">
      <a
        href={en.contact.phoneHref}
        className="flex min-h-14 w-full items-center justify-center gap-3 rounded-lg bg-navy px-4 py-3 text-center text-lg font-semibold text-white no-underline hover:bg-navy-dark"
      >
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
          focusable="false"
          className="h-6 w-6 shrink-0"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.5 2.8.6a2 2 0 0 1 1.7 2Z" />
        </svg>
        <span>{en.buttons.callWithNumber}</span>
      </a>
    </aside>
  );
}
