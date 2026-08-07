import type { Metadata } from "next";
import Link from "next/link";
import { PageHero, CTASection } from "@/components/ui";
import { openRoles } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Join Our Team | IT Services Careers at TechForge Global",
  description:
    "Explore career opportunities at TechForge Global or submit your profile as an IT professional.",
};

const benefits = [
  {
    title: "Global Opportunities",
    description:
      "Work with leading companies across North America, Europe, and Asia-Pacific.",
  },
  {
    title: "Career Growth",
    description:
      "Access training, mentorship, and certifications to advance your skills.",
  },
  {
    title: "Competitive Compensation",
    description:
      "Industry-leading rates with transparent contracts and timely payments.",
  },
  {
    title: "Flexible Work",
    description:
      "Remote-first roles with options for hybrid and on-site placements.",
  },
];

export default function JoinUsPage() {
  return (
    <>
      <PageHero
        badge="Join Us"
        title="Build Your Career or Find Your Next Hire"
        subtitle="Whether you're an IT professional looking for your next role or a company seeking top talent — TechForge Global connects the right people with the right opportunities."
      />

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-2xl border border-brand-500/30 bg-gradient-to-br from-brand-950/50 to-slate-900/50 p-8">
              <span className="text-xs font-semibold uppercase tracking-wider text-brand-400">
                For Companies
              </span>
              <h2 className="mt-3 text-2xl font-bold text-white">
                Hire Dedicated IT Talent
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-slate-400">
                Tell us what you need — developers, designers, DevOps engineers,
                or entire teams. We&apos;ll match you with pre-vetted
                professionals within 72 hours.
              </p>
              <Link
                href="/contact"
                className="mt-6 inline-block rounded-xl bg-brand-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-500"
              >
                Request Talent
              </Link>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                For Professionals
              </span>
              <h2 className="mt-3 text-2xl font-bold text-white">
                Submit Your Profile
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-slate-400">
                Join our global talent network. It&apos;s free for job seekers —
                we connect you with companies that match your skills and career
                goals.
              </p>
              <Link
                href="/contact"
                className="mt-6 inline-block rounded-xl border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/5"
              >
                Apply Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-slate-900/30 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold text-white">
            Why Join TechForge Global?
          </h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="rounded-xl border border-white/10 bg-white/5 p-6"
              >
                <h3 className="font-semibold text-white">{benefit.title}</h3>
                <p className="mt-2 text-sm text-slate-400">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white">Open Positions</h2>
          <p className="mt-4 text-slate-400">
            Current opportunities within our network and internal team.
          </p>

          <div className="mt-10 divide-y divide-white/10 rounded-2xl border border-white/10 bg-white/5">
            {openRoles.map((role) => (
              <div
                key={role.title}
                className="flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:justify-between"
              >
                <div>
                  <h3 className="font-semibold text-white">{role.title}</h3>
                  <div className="mt-1 flex flex-wrap gap-3 text-sm text-slate-400">
                    <span>{role.location}</span>
                    <span className="text-slate-600">·</span>
                    <span>{role.department}</span>
                  </div>
                </div>
                <Link
                  href="/contact"
                  className="shrink-0 rounded-lg border border-brand-500/30 px-5 py-2 text-sm font-semibold text-brand-400 transition hover:bg-brand-500/10"
                >
                  Apply
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Don't See the Right Role?"
        description="Send us your resume anyway — we're always looking for exceptional IT talent."
        primaryLabel="Get in Touch"
        primaryHref="/contact"
      />
    </>
  );
}
