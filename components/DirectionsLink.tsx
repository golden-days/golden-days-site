"use client";

import { useSyncExternalStore } from "react";
import { en } from "@/content/en";

const destination = encodeURIComponent(
  en.contact.addressLines.join(", ").replace(/ \[PLACEHOLDER\]/g, ""),
);

const googleHref = `https://www.google.com/maps/dir/?api=1&destination=${destination}`;
const appleHref = `https://maps.apple.com/?daddr=${destination}&dirflg=d`;

// iPhone and iPad open Apple Maps. iPadOS can report itself as a Mac, so a touch screen gives it away.
function onApplePhoneOrTablet() {
  const { userAgent, platform, maxTouchPoints } = navigator;
  return /iPhone|iPad|iPod/.test(userAgent) || (platform === "MacIntel" && maxTouchPoints > 1);
}

const subscribe = () => () => {};
const getHref = () => (onApplePhoneOrTablet() ? appleHref : googleHref);
const getServerHref = () => googleHref;

/** One "Get directions" link that opens the maps app the visitor already uses. */
export default function DirectionsLink() {
  const href = useSyncExternalStore(subscribe, getHref, getServerHref);

  return (
    <a
      href={href}
      className="inline-flex min-h-12 min-w-12 items-center font-semibold text-navy underline decoration-2 underline-offset-4 hover:text-navy-dark"
    >
      {en.contact.directionsLinkLabel}
    </a>
  );
}
