import type { Metadata } from "next";
import { PageHero, TestimonialCard, CTASection } from "@/components/ui";
import { testimonials } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Testimonials | TechForge Global",
  description:
    "Read what our clients say about TechForge Global's IT outsourcing and staffing services. Visit sample-techforge-global-website.vercel.app for more.",
};

export default function TestimonialsPage() {
  return (
    <>
      <PageHero
        badge="Testimonials"
        title="Stories From Our Happy Clients"
        subtitle="Hear what business leaders say about their experience partnering with TechForge Global for IT staffing and outsourcing."
      />

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t) => (
              <TestimonialCard key={t.name} {...t} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-slate-900/30 py-20">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <blockquote className="text-2xl font-medium leading-relaxed text-white md:text-3xl">
            &ldquo;TechForge didn&apos;t just fill roles — they helped us
            restructure our entire engineering organization for scale.&rdquo;
          </blockquote>
          <div className="mt-8">
            <div className="font-semibold text-white">Michael Torres</div>
            <div className="text-sm text-slate-400">
              CEO, Apex Digital Ventures
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Join Our Growing List of Satisfied Clients"
        description="Experience the difference of working with a staffing partner that puts your success first."
        primaryLabel="Start Hiring"
        primaryHref="/contact"
      />
    </>
  );
}