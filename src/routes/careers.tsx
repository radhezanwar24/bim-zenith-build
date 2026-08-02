import { createFileRoute } from "@tanstack/react-router";
import { BriefcaseBusiness, FileText, Mail, Send } from "lucide-react";
import { useState, type FormEvent } from "react";

import { SectionEyebrow } from "@/components/SectionEyebrow";

const contactEmail = "info.infinitybim@gmail.com";
const whatsappNumber = "919067059933";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers - Infinity BIM" },
      {
        name: "description",
        content:
          "Explore career opportunities with Infinity BIM and share your resume with our team.",
      },
      { property: "og:title", content: "Careers - Infinity BIM" },
      {
        property: "og:description",
        content: "Join Infinity BIM's digital engineering and BIM delivery team.",
      },
      { property: "og:url", content: "/careers" },
    ],
    links: [{ rel: "canonical", href: "/careers" }],
  }),
  component: Careers,
});

function Careers() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const text = buildCareerMessage(event.currentTarget);
    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`,
      "_blank",
      "noopener,noreferrer",
    );
    setSent(true);
  };

  return (
    <section className="container-page py-14 sm:py-20 md:py-28">
      <div className="mx-auto max-w-3xl text-center fade-up">
        <SectionEyebrow>Careers</SectionEyebrow>
        <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          Build the Future of <span className="text-royal">Digital Engineering</span>
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          Share your profile with Infinity BIM. We are always glad to hear from BIM modelers,
          coordinators, engineers, and digital delivery specialists.
        </p>
      </div>

      <div className="mx-auto mt-10 grid max-w-6xl gap-8 sm:mt-14 lg:grid-cols-5">
        <aside className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)] lg:col-span-2 md:p-8">
          <span className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-royal to-navy text-primary-foreground shadow-sm">
            <BriefcaseBusiness className="h-6 w-6" aria-hidden />
          </span>
          <h2 className="mt-6 text-2xl font-bold tracking-tight text-navy">Join Our Team</h2>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            Tell us about your experience. This temporary form prepares your application message
            through WhatsApp or email while backend resume storage is added later.
          </p>
          <div className="mt-6 rounded-2xl bg-accent/55 p-4 text-sm leading-relaxed text-navy">
            Please attach your resume manually in WhatsApp or email before sending your application.
            Recommended formats: PDF, DOC, or DOCX up to 5 MB.
          </div>
        </aside>

        <form
          className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)] lg:col-span-3 md:p-8"
          onSubmit={handleSubmit}
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Full name" name="name" required />
            <Field label="Email" name="email" type="email" required />
            <Field label="Phone" name="phone" type="tel" />
            <Field label="Role interested in" name="role" />

            <div className="sm:col-span-2">
              <div className="rounded-xl border border-royal/25 bg-accent/35 px-4 py-5">
                <div className="flex items-start gap-3">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white text-royal shadow-sm">
                    <FileText className="h-5 w-5" aria-hidden />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-navy">Resume attachment</p>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      Please attach your resume manually in the WhatsApp chat or email window before
                      sending. Use PDF, DOC, or DOCX format up to 5 MB.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="message" className="mb-2 block text-sm font-medium text-navy">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-navy outline-none transition-shadow placeholder:text-muted-foreground focus:border-royal focus:ring-2 focus:ring-royal/20"
                placeholder="Share your experience, availability, or preferred role."
              />
            </div>
          </div>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <button
              type="submit"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-navy px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-royal sm:w-auto"
            >
              <Send className="h-4 w-4" aria-hidden />
              Send on WhatsApp
            </button>
            <button
              type="button"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-border bg-background px-6 py-3 text-sm font-medium text-navy transition-colors hover:bg-accent sm:w-auto"
              onClick={(event) => {
                const form = event.currentTarget.form;
                if (!form?.reportValidity()) return;
                const text = buildCareerMessage(form);
                window.location.href = `mailto:${contactEmail}?subject=${encodeURIComponent(
                  "Infinity BIM career application",
                )}&body=${encodeURIComponent(text)}`;
                setSent(true);
              }}
            >
              <Mail className="h-4 w-4" aria-hidden />
              Send by Email
            </button>
          </div>

          {sent && (
            <p className="mt-4 text-sm text-royal" role="status">
              Thanks - your application message has been prepared. Please send it in the opened app.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

function buildCareerMessage(form: HTMLFormElement) {
  const data = new FormData(form);
  const name = String(data.get("name") ?? "").trim();
  const email = String(data.get("email") ?? "").trim();
  const phone = String(data.get("phone") ?? "").trim();
  const role = String(data.get("role") ?? "").trim();
  const message = String(data.get("message") ?? "").trim();

  return [
    "New Infinity BIM career application",
    "",
    `Name: ${name || "Not provided"}`,
    `Email: ${email || "Not provided"}`,
    `Phone: ${phone || "Not provided"}`,
    `Role interested in: ${role || "Not specified"}`,
    "Resume: Please attach the resume manually before sending this application.",
    "",
    "Message:",
    message || "Not provided",
  ].join("\n");
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-sm font-medium text-navy">
        {label}
        {required && <span className="ml-0.5 text-royal">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-navy outline-none transition-shadow placeholder:text-muted-foreground focus:border-royal focus:ring-2 focus:ring-royal/20"
      />
    </div>
  );
}
