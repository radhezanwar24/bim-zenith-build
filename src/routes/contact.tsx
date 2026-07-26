import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";

import { SectionEyebrow } from "@/components/SectionEyebrow";

const contactEmail = "info.infinitybim@gmail.com";
const contactPhoneDisplay = "+91 9067059933";
const contactPhoneHref = "+919067059933";
const whatsappNumber = "919067059933";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Reach out to us - Infinity BIM" },
      {
        name: "description",
        content:
          "Get in touch with Infinity BIM. Email info.infinitybim@gmail.com or call +91 9067059933.",
      },
      { property: "og:title", content: "Reach out to us - Infinity BIM" },
      {
        property: "og:description",
        content: "Connect with the Infinity BIM team.",
      },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section className="container-page py-20 md:py-28">
      <div className="mx-auto max-w-2xl text-center fade-up">
        <SectionEyebrow>Connect with us</SectionEyebrow>
        <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          Reach out to us
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-base text-muted-foreground">
          Tell us about your project - our team will get back to you shortly.
        </p>
      </div>

      <div className="mx-auto mt-14 grid max-w-6xl gap-10 lg:grid-cols-5">
        <aside className="space-y-6 lg:col-span-2">
          <ContactItem icon={Mail} label="Email">
            <a href={`mailto:${contactEmail}`} className="text-navy hover:text-royal">
              {contactEmail}
            </a>
          </ContactItem>
          <ContactItem icon={Phone} label="Phone">
            <a href={`tel:${contactPhoneHref}`} className="text-navy hover:text-royal">
              {contactPhoneDisplay}
            </a>
          </ContactItem>
          <ContactItem icon={MapPin} label="Location">
            <span className="text-navy font-medium">Pune, Maharashtra</span>
          </ContactItem>

          <div className="overflow-hidden rounded-2xl border border-border">
            <div className="aspect-[4/3] w-full bg-muted">
              <iframe
                title="Map"
                src="https://www.google.com/maps?q=Pune,%20Maharashtra&output=embed"
                className="h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </aside>

        <form
          className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)] lg:col-span-3 md:p-8"
          onSubmit={(e) => {
            e.preventDefault();
            const text = buildLeadMessage(e.currentTarget);
            window.open(
              `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`,
              "_blank",
              "noopener,noreferrer",
            );
            setSent(true);
          }}
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Full name" name="name" required />
            <Field label="Email" name="email" type="email" required />
            <Field label="Phone" name="phone" type="tel" className="sm:col-span-2" />
            <Field label="Subject" name="subject" className="sm:col-span-2" />
            <div className="sm:col-span-2">
              <label htmlFor="message" className="mb-2 block text-sm font-medium text-navy">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-navy outline-none transition-shadow placeholder:text-muted-foreground focus:border-royal focus:ring-2 focus:ring-royal/20"
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
              onClick={(e) => {
                const form = e.currentTarget.form;
                if (!form?.reportValidity()) return;
                const text = buildLeadMessage(form);
                window.location.href = `mailto:${contactEmail}?subject=${encodeURIComponent(
                  "Infinity BIM website enquiry",
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
              Thanks - your message has been prepared. Please send it in the opened app.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

function buildLeadMessage(form: HTMLFormElement) {
  const data = new FormData(form);
  const name = String(data.get("name") ?? "").trim();
  const email = String(data.get("email") ?? "").trim();
  const phone = String(data.get("phone") ?? "").trim();
  const subject = String(data.get("subject") ?? "").trim();
  const message = String(data.get("message") ?? "").trim();

  return [
    "New Infinity BIM website enquiry",
    "",
    `Name: ${name || "Not provided"}`,
    `Email: ${email || "Not provided"}`,
    `Phone: ${phone || "Not provided"}`,
    `Subject: ${subject || "Project enquiry"}`,
    "",
    "Message:",
    message || "Not provided",
  ].join("\n");
}

function ContactItem({
  icon: Icon,
  label,
  children,
}: {
  icon: typeof Mail;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5">
      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-accent text-royal">
        <Icon className="h-5 w-5" aria-hidden />
      </span>
      <div className="min-w-0">
        <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          {label}
        </p>
        <p className="mt-1 text-sm">{children}</p>
      </div>
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  className,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  className?: string;
}) {
  return (
    <div className={className}>
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
