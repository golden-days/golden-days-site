"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { en } from "@/content/en";

type AnswerValue = "yes" | "no" | "notSure";
type Step = "intro" | "result" | number;

const answerOrder: AnswerValue[] = ["yes", "no", "notSure"];

/**
 * The "Do I qualify?" check.
 *
 * Everything happens in this component's state. Nothing is sent to a server,
 * written to a cookie, or saved in the browser, so closing the page clears it.
 */
export default function QualifyQuiz() {
  const quiz = en.qualify;
  const total = quiz.questions.length;

  const [step, setStep] = useState<Step>("intro");
  const [answers, setAnswers] = useState<AnswerValue[]>([]);
  const [hasStarted, setHasStarted] = useState(false);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const quizRef = useRef<HTMLDivElement>(null);

  // Screen readers announce changes to this text, not its first value, so the
  // intro wording is not read out when the page loads.
  const announcement =
    typeof step === "number"
      ? progressLabel(step + 1, total)
      : step === "result"
        ? quiz.results.announcement
        : quiz.intro.heading;

  useEffect(() => {
    if (!hasStarted) return;
    // Focus the heading for screen readers, but scroll to the top of the quiz
    // so the progress line above the heading stays in view.
    headingRef.current?.focus({ preventScroll: true });
    quizRef.current?.scrollIntoView({ block: "start" });
  }, [step, hasStarted]);

  function answer(value: AnswerValue) {
    const index = step as number;
    const next = answers.slice(0, index);
    next[index] = value;
    setAnswers(next);
    // "No" to the first question ends the quiz early. "Not sure" never does.
    const endsEarly = index === 0 && value === "no";
    setStep(endsEarly || index + 1 >= total ? "result" : index + 1);
  }

  function goBack() {
    if (step === "result") {
      setStep(Math.max(answers.length - 1, 0));
      return;
    }
    const index = step as number;
    setStep(index === 0 ? "intro" : index - 1);
  }

  function startOver() {
    setAnswers([]);
    setStep("intro");
  }

  const everyAnswerIsYes =
    answers.length === total && answers.every((a) => a === "yes");
  const result =
    answers[0] === "no"
      ? quiz.results.notFit
      : everyAnswerIsYes
        ? quiz.results.goodFit
        : quiz.results.unsure;

  return (
    <div
      ref={quizRef}
      className="mx-auto flex w-full max-w-3xl scroll-mt-4 flex-col px-4 py-6 sm:px-6 md:scroll-mt-28 md:py-10"
    >
      <p className="sr-only" role="status" aria-live="polite">
        {announcement}
      </p>

      {step === "intro" ? (
        <div>
          <h1
            ref={headingRef}
            tabIndex={-1}
            className="text-3xl focus:outline-3 focus:outline-offset-2 focus:outline-navy sm:text-4xl md:text-5xl"
          >
            {quiz.intro.heading}
          </h1>
          <p className="mt-4">{quiz.intro.reassurance}</p>
          <button
            type="button"
            onClick={() => {
              setHasStarted(true);
              setStep(0);
            }}
            className="mt-8 inline-flex min-h-14 w-full items-center justify-center rounded-lg bg-navy px-6 py-3 text-xl font-semibold text-white hover:bg-navy-dark sm:w-auto"
          >
            {quiz.intro.startLabel}
          </button>
        </div>
      ) : null}

      {typeof step === "number" ? (
        <div>
          <Progress current={step + 1} total={total} />

          <h1
            ref={headingRef}
            tabIndex={-1}
            className="mt-4 text-2xl focus:outline-3 focus:outline-offset-2 focus:outline-navy md:text-3xl"
          >
            {quiz.questions[step].text}
          </h1>

          <p className="mt-3 rounded-lg border-l-8 border-gold-deep bg-cream px-4 py-3 text-lg">
            <span className="block font-semibold text-navy">
              {quiz.helpLabel}
            </span>
            {quiz.questions[step].help}
          </p>

          <div
            role="group"
            aria-label={quiz.answerGroupLabel}
            className="mt-5 grid gap-3"
          >
            {answerOrder.map((value) => {
              const selected = answers[step] === value;
              return (
                <button
                  key={value}
                  type="button"
                  aria-pressed={selected}
                  onClick={() => answer(value)}
                  className={`min-h-14 rounded-lg border-2 border-navy px-6 py-3 text-xl font-semibold hover:bg-navy hover:text-white ${
                    selected ? "bg-navy text-white" : "bg-white text-navy"
                  }`}
                >
                  {quiz.answers[value]}
                </button>
              );
            })}
          </div>

          <BackButton onClick={goBack} />
        </div>
      ) : null}

      {step === "result" ? (
        <div>
          <h1
            ref={headingRef}
            tabIndex={-1}
            className="text-3xl focus:outline-3 focus:outline-offset-2 focus:outline-navy sm:text-4xl md:text-5xl"
          >
            {result.heading}
          </h1>
          <p className="mt-4">{result.text}</p>

          <div className="mt-8 grid gap-4 sm:max-w-md">
            <a
              href={en.contact.phoneHref}
              className="inline-flex min-h-14 items-center justify-center rounded-lg bg-navy px-6 py-3 text-xl font-semibold text-white no-underline hover:bg-navy-dark"
            >
              {en.buttons.callWithNumber}
            </a>
            <Link
              href="/contact#tour"
              className="inline-flex min-h-14 items-center justify-center rounded-lg bg-gold px-6 py-3 text-xl font-semibold text-navy no-underline hover:bg-navy hover:text-white"
            >
              {en.buttons.scheduleTour}
            </Link>
          </div>

          <p className="mt-8">
            <Link
              href="/enrollment"
              className="inline-flex min-h-12 items-center font-semibold text-navy underline decoration-2 underline-offset-4 hover:text-navy-dark"
            >
              {quiz.results.enrollmentLinkLabel}
            </Link>
          </p>

          <p>
            <button
              type="button"
              onClick={startOver}
              className="inline-flex min-h-12 items-center font-semibold text-navy underline decoration-2 underline-offset-4 hover:text-navy-dark"
            >
              {quiz.results.startOverLabel}
            </button>
          </p>
        </div>
      ) : null}
    </div>
  );
}

function progressLabel(current: number, total: number) {
  return en.qualify.progressLabel
    .replace("{current}", String(current))
    .replace("{total}", String(total));
}

function Progress({ current, total }: { current: number; total: number }) {
  return (
    <div>
      <p className="font-semibold text-navy">{progressLabel(current, total)}</p>
      <div
        role="img"
        aria-label={en.qualify.progressBarLabel}
        className="mt-2 h-3 w-full overflow-hidden rounded-full bg-gold"
      >
        <div
          className="h-full bg-navy"
          style={{ width: `${(current / total) * 100}%` }}
        />
      </div>
    </div>
  );
}

function BackButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="mt-5 inline-flex min-h-12 items-center gap-2 font-semibold text-navy underline decoration-2 underline-offset-4 hover:text-navy-dark"
    >
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        focusable="false"
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M15 19l-7-7 7-7" />
      </svg>
      {en.qualify.backLabel}
    </button>
  );
}
