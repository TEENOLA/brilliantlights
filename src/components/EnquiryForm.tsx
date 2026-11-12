import { useState, type FormEvent, type ReactNode } from "react";
import { school } from "../lib/school";
import { buttonClass } from "../lib/ui";
import { WhatsAppIcon } from "./Icons";

export type FieldConfig = {
  name: string;
  label: string;
  type: "text" | "tel" | "email" | "select" | "textarea";
  placeholder?: string;
  options?: string[];
  required?: boolean;
  /** Two half-width fields sit side by side on wide screens. */
  half?: boolean;
};

type EnquiryFormProps = {
  /** Identifies the form in the email the school receives. */
  formName: string;
  title: string;
  intro?: ReactNode;
  fields: FieldConfig[];
  submitLabel: string;
  /** Small print next to the submit button. */
  note?: string;
  successTitle?: string;
  successText?: string;
  className?: string;
};

type FormStatus = "idle" | "sending" | "success" | "error";
type FieldErrors = Record<string, string>;

const FORM_ENDPOINT = import.meta.env.VITE_FORM_ENDPOINT as string | undefined;

const inputClass =
  "h-12 w-full rounded-[14px] border-[1.5px] border-brand-field bg-white px-4 font-body text-base text-brand-ink placeholder:text-[#55698a]";

function validate(fields: FieldConfig[], values: Record<string, string>): FieldErrors {
  const errors: FieldErrors = {};
  for (const field of fields) {
    const value = (values[field.name] ?? "").trim();
    if (field.required && value === "") {
      errors[field.name] = "Please fill this in.";
      continue;
    }
    if (field.type === "email" && value !== "" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      errors[field.name] = "Enter a valid email address.";
    }
    if (field.type === "tel" && value !== "" && value.replace(/\D/g, "").length < 7) {
      errors[field.name] = "Enter a valid phone number.";
    }
  }
  return errors;
}

/**
 * Enquiry / contact form with validation, a honeypot field and a success state.
 * Set VITE_FORM_ENDPOINT (Formspree, Web3Forms or similar) to deliver submissions
 * to the school's email. Without it the form runs in demo mode.
 */
export function EnquiryForm({
  formName,
  title,
  intro,
  fields,
  submitLabel,
  note,
  successTitle = "Thank you, your message is on its way",
  successText = "We will reply within two working days.",
  className = "",
}: EnquiryFormProps) {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errors, setErrors] = useState<FieldErrors>({});

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    // Bots fill the hidden field; humans never see it.
    if ((formData.get("website") as string | null)?.trim()) {
      setStatus("success");
      return;
    }

    const values: Record<string, string> = {};
    for (const field of fields) {
      values[field.name] = String(formData.get(field.name) ?? "");
    }

    const foundErrors = validate(fields, values);
    setErrors(foundErrors);
    if (Object.keys(foundErrors).length > 0) return;

    setStatus("sending");
    try {
      if (FORM_ENDPOINT) {
        const response = await fetch(FORM_ENDPOINT, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({ form: formName, ...values }),
        });
        if (!response.ok) throw new Error("Form request failed");
      } else {
        await new Promise((resolve) => setTimeout(resolve, 600));
      }
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div
        role="status"
        className={`flex flex-col gap-4 rounded-[28px] border border-brand-line bg-white p-6 shadow-[0_6px_24px_rgba(16,42,80,0.08)] md:p-9 ${className}`}
      >
        <h3 className="font-display text-[28px] font-extrabold leading-[1.1]">{successTitle}</h3>
        <p className="text-brand-muted">{successText}</p>
        {!FORM_ENDPOINT && (
          <p className="rounded-2xl bg-brand-butter p-4 text-sm text-brand-ink">
            Demo mode: nothing was sent. Set <code>VITE_FORM_ENDPOINT</code> to deliver messages to the
            school's email.
          </p>
        )}
        <div>
          <button type="button" onClick={() => setStatus("idle")} className={buttonClass("outline", "small")}>
            Send another message
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      aria-label={title}
      className={`flex flex-col gap-5 rounded-[28px] border border-brand-line bg-white p-6 shadow-[0_6px_24px_rgba(16,42,80,0.08)] md:p-9 ${className}`}
    >
      <div>
        <h3 className="font-display text-[28px] font-extrabold leading-[1.1] md:text-3xl">{title}</h3>
        {intro && <p className="mt-1.5 text-[15px] text-brand-muted">{intro}</p>}
      </div>

      {/* Honeypot: hidden from people, visible to bots. */}
      <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden="true">
        <label>
          Leave this empty
          <input type="text" name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="flex flex-wrap gap-5">
        {fields.map((field) => {
          const fieldId = `${formName}-${field.name}`;
          const errorId = `${fieldId}-error`;
          const hasError = Boolean(errors[field.name]);
          return (
            <div key={field.name} className={`flex flex-col gap-1.5 ${field.half ? "min-w-[220px] flex-[1_1_220px]" : "w-full"}`}>
              <label htmlFor={fieldId} className="text-[15px] font-bold">
                {field.label}
                {!field.required && <span className="font-normal text-brand-muted"> (optional)</span>}
              </label>
              {field.type === "textarea" ? (
                <textarea
                  id={fieldId}
                  name={field.name}
                  rows={4}
                  placeholder={field.placeholder}
                  aria-invalid={hasError}
                  aria-describedby={hasError ? errorId : undefined}
                  className={`${inputClass} h-auto resize-y py-3`}
                />
              ) : field.type === "select" ? (
                <select
                  id={fieldId}
                  name={field.name}
                  aria-invalid={hasError}
                  aria-describedby={hasError ? errorId : undefined}
                  className={inputClass}
                >
                  {field.options?.map((option) => (
                    <option key={option}>{option}</option>
                  ))}
                </select>
              ) : (
                <input
                  id={fieldId}
                  name={field.name}
                  type={field.type}
                  placeholder={field.placeholder}
                  autoComplete={field.type === "email" ? "email" : field.type === "tel" ? "tel" : undefined}
                  aria-invalid={hasError}
                  aria-describedby={hasError ? errorId : undefined}
                  className={inputClass}
                />
              )}
              {hasError && (
                <p id={errorId} className="text-sm font-bold text-[#b3261e]">
                  {errors[field.name]}
                </p>
              )}
            </div>
          );
        })}
      </div>

      {status === "error" && (
        <div role="alert" className="flex flex-col gap-3 rounded-2xl bg-brand-mist p-4 text-[15px]">
          <p>Sorry, we could not send that. Please try again, or message us on WhatsApp.</p>
          <a href={school.whatsappHref} className={`${buttonClass("whatsapp", "small")} self-start`}>
            <WhatsAppIcon size={20} />
            Chat on WhatsApp
          </a>
        </div>
      )}

      <div className="flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={status === "sending"}
          className={`${buttonClass("primary")} min-h-12 cursor-pointer disabled:cursor-wait disabled:opacity-70`}
        >
          {status === "sending" ? "Sending..." : submitLabel}
        </button>
        {note && <span className="text-sm text-brand-muted">{note}</span>}
      </div>
    </form>
  );
}
