"use client";

/** A button that opens the browser's print dialog. Hidden on the printed page. */
export default function PrintButton({ label }: { label: string }) {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-gold px-6 py-3 text-center font-semibold text-navy transition-colors hover:bg-navy hover:text-white print:hidden"
    >
      {label}
    </button>
  );
}
