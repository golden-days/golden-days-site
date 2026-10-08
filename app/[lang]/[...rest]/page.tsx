import { notFound } from "next/navigation";

// Any address that is not one of our pages shows the "page not found" screen
// in the visitor's language.
export default function UnknownPage() {
  notFound();
}
