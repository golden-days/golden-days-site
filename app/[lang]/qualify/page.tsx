import QualifyQuiz from "@/components/QualifyQuiz";
import { pageMetadataFor } from "@/lib/seo";

export function generateMetadata({ params }: PageProps<"/[lang]/qualify">) {
  return pageMetadataFor(params, "/qualify", (t) => t.qualify.meta);
}

export default function QualifyPage() {
  return (
    <div className="flex min-h-[calc(100svh-11rem)] flex-col bg-white lg:min-h-[calc(100svh-7rem)]">
      <QualifyQuiz />
    </div>
  );
}
