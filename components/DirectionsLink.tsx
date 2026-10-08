"use client";

import { useSyncExternalStore } from "react";
import { useT } from "./LocaleProvider";

// iPhone and iPad open Apple Maps. iPadOS can report itself as a Mac, so a touch screen gives it away.
function onApplePhoneOrTablet() {
  const { userAgent, platform, maxTouchPoints } = navigator;
  return /iPhone|iPad|iPod/.test(userAgent) || (platform === "MacIntel" && maxTouchPoints > 1);
}

const subscribe = () => () => {};

/** One "Get directions" link that opens the maps app the visitor already uses. */
export default function DirectionsLink() {
  const t = useT();
  const destination = encodeURIComponent(t.contact.addressLines.join(", "));
  const googleHref = `https://www.google.com/maps/dir/?api=1&destination=${destination}`;
  const appleHref = `https://maps.apple.com/?daddr=${destination}&dirflg=d`;

  const href = useSyncExternalStore(
    subscribe,
    () => (onApplePhoneOrTablet() ? appleHref : googleHref),
    () => googleHref,
  );

  return (
    <a
      href={href}
      className="inline-flex min-h-12 min-w-12 items-center font-semibold text-navy underline decoration-2 underline-offset-4 hover:text-navy-dark"
    >
      {t.contact.directionsLinkLabel}
    </a>
  );
}
