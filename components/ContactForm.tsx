"use client";

import { useEffect, useRef, useState } from "react";
import { useT } from "./LocaleProvider";

const endpoint = process.env.NEXT_PUBLIC_FORM_ENDPOINT;

type Status = "idle" | "sending" | "sent" | "error" | "not-configured";

type Errors = {
  name?: string;
  phone?: string;
};

const fieldClasses =
  "mt-2 block w-full min-h-12 rounded-lg border-2 border-navy bg-white px-4 py-3 text-ink placeholder:text-ink/70";

// A dark red (about 6.5:1 on white and on cream) so errors stand out from normal text.
const invalidFieldClasses = fieldClasses.replace(
  "border-navy",
  "border-[#b42318] ring-2 ring-[#b42318]",
);

export default function ContactForm({
  headingLevel = "h3",
  showCallPrompt = true,
}: {
  headingLevel?: "h2" | "h3";
  showCallPrompt?: boolean;
}) {
  const t = useT();
  const Heading = headingLevel;
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Errors>({});
  const confirmationRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (status === "sent" || status === "not-configured") {
      confirmationRef.current?.focus();
    }
  }, [status]);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    // Spam bots fill in every field, including the hidden one. Pretend it worked.
    if (data.get("_gotcha")) {
      setStatus("sent");
      return;
    }

    // Only name and phone are required. Email and message are optional.
    const nextErrors: Errors = {};
    if (!String(data.get("name") ?? "").trim()) nextErrors.name = t.form.validation.name;
    if (!String(data.get("phone") ?? "").trim()) nextErrors.phone = t.form.validation.phone;

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      // The fields are not marked invalid until the next render, so pick the first bad one by name.
      const firstBad = nextErrors.name ? "name" : "phone";
      form.querySelector<HTMLElement>(`[name='${firstBad}']`)?.focus();
      return;
    }

    if (!endpoint) {
      setStatus("not-configured");
      return;
    }

    setStatus("sending");
    try {
      const response = await fetch(endpoint, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (!response.ok) throw new Error("Request failed");
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent" || status === "not-configured") {
    const sent = status === "sent";
    return (
      <div
        ref={confirmationRef}
        tabIndex={-1}
        role="status"
        className={`rounded-xl border-4 p-6 ${sent ? "border-navy bg-cream" : "border-gold-deep bg-cream"}`}
      >
        <Heading className="font-serif text-2xl font-bold text-navy">
          {sent ? t.form.successHeading : t.form.notConfiguredHeading}
        </Heading>
        <p className="mt-3">{sent ? t.form.successText : t.form.notConfiguredText}</p>
        <p className="mt-4">
          <a
            href={t.contact.phoneHref}
            className="inline-flex min-h-12 min-w-12 items-center font-semibold text-navy underline decoration-2 underline-offset-4"
          >
            {t.buttons.callWithNumber}
          </a>
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 inline-flex min-h-12 items-center rounded-lg bg-navy px-6 py-3 font-semibold text-white hover:bg-navy-dark"
        >
          {t.form.successAgain}
        </button>
      </div>
    );
  }

  return (
    <div className="rounded-xl border-4 border-gold bg-white p-5 sm:p-6">
      <Heading className="font-serif text-2xl font-bold text-navy">{t.form.heading}</Heading>
      <p className="mt-2">{t.form.responseTime}</p>
      {showCallPrompt ? (
        <p className="mt-2 text-lg">
          {t.form.callAlternativeLead}{" "}
          <a
            href={t.contact.phoneHref}
            className="inline-flex min-h-12 min-w-12 items-center font-semibold text-navy underline decoration-2 underline-offset-4 hover:text-navy-dark"
          >
            {t.form.callAlternativeLinkPrefix} {t.contact.phoneDisplay}
          </a>
        </p>
      ) : null}

      <p className="mt-4 rounded-lg border-2 border-gold-deep bg-cream px-4 py-3 text-lg font-semibold text-ink">
        {t.form.medicalNote}
      </p>

      <form onSubmit={handleSubmit} noValidate>
        <Field
          id="name"
          name="name"
          label={t.form.fields.name.label}
          placeholder={t.form.fields.name.placeholder}
          autoComplete="name"
          required
          error={errors.name}
        />

        <Field
          id="phone"
          name="phone"
          type="tel"
          label={t.form.fields.phone.label}
          placeholder={t.form.fields.phone.placeholder}
          autoComplete="tel"
          required
          error={errors.phone}
        />

        <Field
          id="email"
          name="email"
          type="email"
          label={t.form.fields.email.label}
          placeholder={t.form.fields.email.placeholder}
          autoComplete="email"
        />

        <div className="mt-5">
          <label htmlFor="message" className="block font-semibold text-navy">
            {t.form.fields.message.label}
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            placeholder={t.form.fields.message.placeholder}
            className={fieldClasses}
          />
        </div>

        <div hidden aria-hidden="true">
          <label htmlFor="_gotcha">{t.form.fields.honeypot.label}</label>
          <input id="_gotcha" type="text" name="_gotcha" tabIndex={-1} autoComplete="off" />
        </div>

        {status === "error" ? (
          <div role="alert" className="mt-5 rounded-lg border-2 border-[#b42318] bg-cream px-4 py-3">
            <strong className="block text-[#b42318]">{t.form.errorHeading}</strong>
            <span>{t.form.errorText}</span>
          </div>
        ) : null}

        <button
          type="submit"
          disabled={status === "sending"}
          className="mt-6 inline-flex min-h-12 w-full items-center justify-center rounded-lg bg-navy px-6 py-3 text-lg font-semibold text-white hover:bg-navy-dark disabled:opacity-70 sm:w-auto"
        >
          {status === "sending" ? t.form.submitting : t.form.submit}
        </button>
      </form>
    </div>
  );
}

function Field({
  id,
  name,
  label,
  placeholder,
  type = "text",
  autoComplete,
  required = false,
  error,
}: {
  id: string;
  name: string;
  label: string;
  placeholder?: string;
  type?: string;
  autoComplete?: string;
  required?: boolean;
  error?: string;
}) {
  const t = useT();
  return (
    <div className="mt-5">
      <label htmlFor={id} className="block font-semibold text-navy">
        {label} {required ? <span className="font-normal text-ink">({t.form.required})</span> : null}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        autoComplete={autoComplete}
        aria-required={required ? "true" : undefined}
        aria-invalid={error ? "true" : undefined}
        aria-describedby={error ? `${id}-error` : undefined}
        className={error ? invalidFieldClasses : fieldClasses}
      />
      {error ? <FieldError id={`${id}-error`}>{error}</FieldError> : null}
    </div>
  );
}

function FieldError({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <p id={id} className="mt-2 flex items-start gap-2 text-lg font-semibold text-[#b42318]">
      <WarningIcon />
      <span>{children}</span>
    </p>
  );
}

function WarningIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
      className="mt-1 h-6 w-6 shrink-0"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 7v6M12 17h.01" />
    </svg>
  );
}
