import type { Metadata } from "next";
import { PageHero, CTASection, StatCard } from "@/components/ui";
import { stats } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "About TechForge Global | IT Services Experts",
  description:
    "Learn about TechForge Global — our mission, values, and 25+ years of experience in IT outsourcing and staffing.",
  alternates: {
    canonical: "https://sample-techforge-global-website.vercel.app/about",
  },
};

const values = [
  {
    title: "Philosophy",
    description:
      "We drive IT excellence and career growth in a rapidly changing market, helping both businesses and professionals thrive.",
  },
  {
    title: "Our Mission",
    description:
      "Providing world-class technical services while advancing skilled professionals into roles where they can make the greatest impact.",
  },
  {
    title: "Our Values",
    description:
      "With honesty and transparency, we help businesses scale and people grow — building long-term partnerships, not transactions.",
  },
];

const timeline = [
  {
    year: "1999",
    event: "Founded as a boutique IT recruitment firm in Austin, Texas.",
  },
  {
    year: "2008",
    event: "Expanded offshore operations across Eastern Europe and Southeast Asia.",
  },
  {
    year: "2015",
    event: "Launched dedicated cybersecurity and cloud infrastructure divisions.",
  },
  {
    year: "2020",
    event: "Reached 500+ successful placements with a 98% client satisfaction rate.",
  },
  {
    year: "Today",
    event: "Serving clients across 12 industries with a global talent network.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        badge="About Us"
        title="Delivering Reliable IT Hiring Solutions"
        subtitle="TechForge Global is rethinking the way businesses design, build, and connect with IT talent — bringing high-quality technology solutions in sustainable, transparent, and growth-driven ways."
      />

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-3xl font-bold text-white">
                Building Stronger Teams Worldwide
              </h2>
              <p className="mt-6 leading-relaxed text-slate-400">
                For over two decades, we&apos;ve helped companies of every size
                — from ambitious startups to Fortune 500 enterprises — access
                the IT talent they need to compete and innovate. Our approach
                combines rigorous vetting, cultural alignment, and ongoing
                support to ensure every placement succeeds.
              </p>
              <p className="mt-4 leading-relaxed text-slate-400">
                We believe great technology starts with great people. That&apos;s
                why we invest as much in our candidates&apos; careers as we do in
                our clients&apos; success.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-white/10 bg-white/5 p-6"
                >
                  <StatCard {...stat} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-slate-900/30 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold text-white">
            What We Stand For
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-8"
              >
                <h3 className="text-xl font-semibold text-brand-400">
                  {value.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-slate-400">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold text-white">
            Our Journey
          </h2>
          <div className="relative mt-12">
            <div className="absolute left-4 top-0 h-full w-px bg-brand-600/30 md:left-1/2" />
            <div className="space-y-12">
              {timeline.map((item, i) => (
                <div
                  key={item.year}
                  className={`relative flex flex-col md:flex-row ${
                    i % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  <div className="hidden flex-1 md:block" />
                  <div className="absolute left-4 top-1 z-10 h-3 w-3 -translate-x-1/2 rounded-full bg-brand-500 md:left-1/2" />
                  <div className="ml-10 flex-1 rounded-xl border border-white/10 bg-white/5 p-6 md:ml-0">
                    <span className="text-sm font-bold text-brand-400">
                      {item.year}
                    </span>
                    <p className="mt-2 text-sm text-slate-300">{item.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Work With Us?"
        description="Whether you need to hire talent or want to join our team, we'd love to hear from you."
        primaryLabel="Contact Us"
        primaryHref="/contact"
        secondaryLabel="View Open Roles"
        secondaryHref="/join-us"
      />
    </>
  );
}
