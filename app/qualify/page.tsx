import QualifyQuiz from "@/components/QualifyQuiz";
import { en } from "@/content/en";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: en.qualify.meta.title,
  description: en.qualify.meta.description,
  path: "/qualify",
});

export default function QualifyPage() {
  return (
    <div className="flex min-h-[calc(100svh-11rem)] flex-col bg-white lg:min-h-[calc(100svh-7rem)]">
      <QualifyQuiz />
    </div>
  );
}
