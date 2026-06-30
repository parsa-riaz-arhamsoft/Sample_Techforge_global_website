"use client";

import { useState, type FormEvent } from "react";
import { PageHero } from "@/components/ui";
import { siteConfig } from "@/lib/site-data";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      <PageHero
        badge="Contact Us"
        title="Let's Build Your Dream Team"
        subtitle="Get in touch for a free consultation. Tell us about your hiring needs and we'll match you with the right IT professionals."
      />

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold text-white">
                Get Expert IT Staffing Solutions
              </h2>
              <p className="mt-4 leading-relaxed text-slate-400">
                Our team responds within one business day. Share your project
                requirements, team size, and timeline — we&apos;ll handle the
                rest.
              </p>

              <div className="mt-10 space-y-6">
                <ContactItem
                  label="Phone"
                  value={siteConfig.phone}
                  icon="phone"
                />
                <ContactItem
                  label="Email"
                  value={siteConfig.email}
                  icon="email"
                />
                <ContactItem
                  label="Office"
                  value={siteConfig.address}
                  icon="location"
                />
              </div>

              <div className="mt-10 rounded-2xl border border-brand-500/20 bg-brand-500/5 p-6">
                <h3 className="font-semibold text-white">Free Consultation</h3>
                <p className="mt-2 text-sm text-slate-400">
                  No obligation. We&apos;ll assess your needs and recommend the
                  best staffing approach for your business.
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
              {submitted ? (
                <div className="flex h-full flex-col items-center justify-center py-12 text-center">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-500/20 text-3xl text-green-400">
                    ✓
                  </div>
                  <h3 className="text-xl font-semibold text-white">
                    Message Sent!
                  </h3>
                  <p className="mt-2 text-slate-400">
                    Thank you for reaching out. We&apos;ll get back to you
                    within one business day.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h3 className="text-xl font-semibold text-white">
                    Send us a message
                  </h3>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <FormField label="First Name" name="firstName" required />
                    <FormField label="Last Name" name="lastName" required />
                  </div>
                  <FormField
                    label="Email"
                    name="email"
                    type="email"
                    required
                  />
                  <FormField label="Company" name="company" />
                  <FormField label="Phone" name="phone" type="tel" />

                  <div>
                    <label
                      htmlFor="service"
                      className="mb-1.5 block text-sm font-medium text-slate-300"
                    >
                      Service Needed
                    </label>
                    <select
                      id="service"
                      name="service"
                      className="w-full rounded-lg border border-white/10 bg-slate-900 px-4 py-3 text-sm text-white outline-none focus:border-brand-500"
                    >
                      <option value="">Select a service</option>
                      <option>Software Development</option>
                      <option>Cloud Infrastructure</option>
                      <option>Cybersecurity</option>
                      <option>Data & Analytics</option>
                      <option>IT Support</option>
                      <option>CTO Services</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="mb-1.5 block text-sm font-medium text-slate-300"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      placeholder="Tell us about your hiring needs..."
                      className="w-full rounded-lg border border-white/10 bg-slate-900 px-4 py-3 text-sm text-white placeholder:text-slate-600 outline-none focus:border-brand-500"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full rounded-xl bg-brand-600 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-600/30 transition hover:bg-brand-500"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function FormField({
  label,
  name,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-1.5 block text-sm font-medium text-slate-300"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="w-full rounded-lg border border-white/10 bg-slate-900 px-4 py-3 text-sm text-white outline-none focus:border-brand-500"
      />
    </div>
  );
}

function ContactItem({
  label,
  value,
  icon,
}: {
  label: string;
  value: string;
  icon: string;
}) {
  const icons: Record<string, string> = {
    phone: "📞",
    email: "✉️",
    location: "📍",
  };

  return (
    <div className="flex items-start gap-4">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-600/20 text-lg">
        {icons[icon]}
      </span>
      <div>
        <div className="text-sm font-medium text-slate-300">{label}</div>
        <div className="text-sm text-slate-400">{value}</div>
      </div>
    </div>
  );
}
