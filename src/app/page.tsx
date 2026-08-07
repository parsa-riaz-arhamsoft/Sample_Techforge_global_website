import type { Metadata } from "next";
import Link from "next/link";
import {
  ServiceCard,
  StatCard,
  TestimonialCard,
  CTASection,
} from "@/components/ui";
import {
  siteConfig,
  services,
  talentCategories,
  stats,
  testimonials,
  faqs,
  clientLogos,
} from "@/lib/site-data";

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} | IT Outsourcing & Staffing`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  canonicalUrl: "https://sample-techforge-global-website.vercel.app",
};

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand-900/50 via-slate-950 to-slate-950" />
        <div className="absolute -right-40 top-20 h-96 w-96 rounded-full bg-brand-600/10 blur-3xl" />
        <div className="absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-brand-500/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-32 lg:px-8 lg:py-40">
          <div className="max-w-3xl">
            <span className="mb-6 inline-block rounded-full border border-brand-500/30 bg-brand-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-300">
              IT Outsourcing & Staffing
            </span>
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl">
              Your Partner in{" "}
              <span className="text-gradient">Staffing Solutions</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-slate-400 md:text-xl">
              Elevate your team with specialized IT recruitment solutions
              designed to connect you with skilled professionals who drive
              innovation and business growth.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/join-us"
                className="rounded-xl bg-brand-600 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-600/30 transition hover:bg-brand-500"
              >
                Hire Talent
              </Link>
              <Link
                href="/contact"
                className="rounded-xl border border-white/20 px-8 py-3.5 text-sm font-semibold text-white transition hover:bg-white/5"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Client logos */}
      <section className="border-y border-white/10 bg-slate-900/50 py-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="mb-6 text-center text-xs font-semibold uppercase tracking-widest text-slate-500">
            Trusted by innovative companies
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-4">
            {clientLogos.map((logo) => (
              <span
                key={logo}
                className="text-lg font-bold tracking-wide text-slate-600 transition hover:text-slate-400"
              >
                {logo}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Services marquee */}
      <section className="overflow-hidden border-b border-white/10 py-6">
        <div className="flex animate-marquee gap-8 whitespace-nowrap">
          {[...services, ...services].map((service, i) => (
            <span
              key={`${service.title}-${i}`}
              className="text-sm font-medium text-slate-500"
            >
              {service.title}
            </span>
          ))}
        </div>
      </section>

      {/* Talent categories */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-white md:text-4xl">
              Top IT Talent with Cutting-Edge Strategy
            </h2>
            <p className="mt-4 text-slate-400">
              We connect businesses with exceptional IT professionals who drive
              innovation, long-term success, and sustainable growth.
            </p>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {talentCategories.map((category) => (
              <div
                key={category.title}
                className="group rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-brand-500/50"
              >
                <h3 className="text-lg font-semibold text-white">
                  {category.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">
                  {category.description}
                </p>
                <Link
                  href="/contact"
                  className="mt-4 inline-block text-sm font-semibold text-brand-400 transition group-hover:text-brand-300"
                >
                  Hire Now &rarr;
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-white/10 bg-slate-900/50 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat) => (
              <StatCard key={stat.label} {...stat} />
            ))}
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-white md:text-4xl">
              Our IT Recruitment Specialties
            </h2>
            <p className="mt-4 text-slate-400">
              Connecting businesses with skilled IT professionals for every
              technical need.
            </p>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials preview */}
      <section className="border-t border-white/10 bg-slate-900/30 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div>
              <h2 className="text-3xl font-bold text-white md:text-4xl">
                Stories From Our Happy Clients
              </h2>
              <p className="mt-4 max-w-xl text-slate-400">
                Hear what our clients say about their experience working with
                us.
              </p>
            </div>
            <Link
              href="/testimonials"
              className="shrink-0 text-sm font-semibold text-brand-400 hover:text-brand-300"
            >
              View all testimonials &rarr;
            </Link>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {testimonials.slice(0, 3).map((t) => (
              <TestimonialCard key={t.name} {...t} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold text-white md:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-center text-slate-400">
            Find answers to common questions about our offshore IT staffing
            services.
          </p>

          <div className="mt-12 space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-xl border border-white/10 bg-white/5"
              >
                <summary className="cursor-pointer list-none px-6 py-5 font-medium text-white [&::-webkit-details-marker]:hidden">
                  <span className="flex items-center justify-between gap-4">
                    {faq.question}
                    <span className="shrink-0 text-brand-400 transition group-open:rotate-45">
                      +
                    </span>
                  </span>
                </summary>
                <p className="border-t border-white/10 px-6 py-4 text-sm leading-relaxed text-slate-400">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Get a Free IT Staffing Consultation"
        description="With 25+ years of experience in IT staffing and offshore solutions, we're ready to help you build your dream team."
        primaryLabel="Get Consultation"
        primaryHref="/contact"
        secondaryLabel="Join Our Team"
        secondaryHref="/join-us"
      />
    </>
  );
}
