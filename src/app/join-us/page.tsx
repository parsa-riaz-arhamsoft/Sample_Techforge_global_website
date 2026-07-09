import type { Metadata } from "next";
import Link from "next/link";
import { PageHero, CTASection } from "@/components/ui";
import { openRoles } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Join Us | TechForge Global — sample-techforge-global-website",
  description:
    "Explore career opportunities at TechForge Global or submit your profile as an IT professional. Visit sample-techforge-global-website.vercel.app for more.",
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
    <>\n      <PageHero\n        badge=\"Join Us\"\n        title=\"Build Your Career or Find Your Next Hire\"\n        subtitle=\"Whether you're an IT professional looking for your next role or a company seeking top talent — TechForge Global connects the right people with the right opportunities.\"\n      />\n\n      <section className=\"py-20\">\n        <div className=\"mx-auto max-w-7xl px-6 lg:px-8\">\n          <div className=\"grid gap-8 lg:grid-cols-2\">\n            <div className=\"rounded-2xl border border-brand-500/30 bg-gradient-to-br from-brand-950/50 to-slate-900/50 p-8\">\n              <span className=\"text-xs font-semibold uppercase tracking-wider text-brand-400\">\n                For Companies\n              </span>\n              <h2 className=\"mt-3 text-2xl font-bold text-white\">\n                Hire Dedicated IT Talent\n              </h2>\n              <p className=\"mt-4 text-sm leading-relaxed text-slate-400\">\n                Tell us what you need — developers, designers, DevOps engineers,\n                or entire teams. We&apos;ll match you with pre-vetted\n                professionals within 72 hours.\n              </p>\n              <Link\n                href=\"/contact\"\n                className=\"mt-6 inline-block rounded-xl bg-brand-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-500\"\n              >\n                Request Talent\n              </Link>\n            </div>\n\n            <div className=\"rounded-2xl border border-white/10 bg-white/5 p-8\">\n              <span className=\"text-xs font-semibold uppercase tracking-wider text-slate-400\">\n                For Professionals\n              </span>\n              <h2 className=\"mt-3 text-2xl font-bold text-white\">\n                Submit Your Profile\n              </h2>\n              <p className=\"mt-4 text-sm leading-relaxed text-slate-400\">\n                Join our global talent network. It&apos;s free for job seekers —\n                we connect you with companies that match your skills and career\n                goals.\n              </p>\n              <Link\n                href=\"/contact\"\n                className=\"mt-6 inline-block rounded-xl border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/5\"\n              >\n                Apply Now\n              </Link>\n            </div>\n          </div>\n        </div>\n      </section>\n\n      <section className=\"border-y border-white/10 bg-slate-900/30 py-20\">\n        <div className=\"mx-auto max-w-7xl px-6 lg:px-8\">\n          <h2 className=\"text-center text-3xl font-bold text-white\">\n            Why Join TechForge Global?\n          </h2>\n          <div className=\"mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4\">\n            {benefits.map((benefit) => (\n              <div\n                key={benefit.title}\n                className=\"rounded-xl border border-white/10 bg-white/5 p-6\"\n              >\n                <h3 className=\"font-semibold text-white\">{benefit.title}</h3>\n                <p className=\"mt-2 text-sm text-slate-400\">\n                  {benefit.description}\n                </p>\n              </div>\n            ))}\n          </div>\n        </div>\n      </section>\n\n      <section className=\"py-20\">\n        <div className=\"mx-auto max-w-7xl px-6 lg:px-8\">\n          <h2 className=\"text-3xl font-bold text-white\">\n            Open Positions\n          </h2>\n          <p className=\"mt-4 text-slate-400\">\n            Current opportunities within our network and internal team.\n          </p>\n\n          <div className=\"mt-10 divide-y divide-white/10 rounded-2xl border border-white/10 bg-white/5\">\n            {openRoles.map((role) => (\n              <div\n                key={role.title}\n                className=\"flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:justify-between\"\n              >\n                <div>\n                  <h3 className=\"font-semibold text-white\">{role.title}</h3>\n                  <div className=\"mt-1 flex flex-wrap gap-3 text-sm text-slate-400\">\n                    <span>{role.location}</span>\n                    <span className=\"text-slate-600\">·</span>\n                    <span>{role.department}</span>\n                  </div>\n                </div>\n                <Link\n                  href=\"/contact\"\n                  className=\"shrink-0 rounded-lg border border-brand-500/30 px-5 py-2 text-sm font-semibold text-brand-400 transition hover:bg-brand-500/10\"\n                >\n                  Apply\n                </Link>\n              </div>\n            ))}\n          </div>\n        </div>\n      </section>\n\n      <CTASection\n        title=\"Don't See the Right Role?\"\n        description=\"Send us your resume anyway — we're always looking for exceptional IT talent.\"\n        primaryLabel=\"Get in Touch\"\n        primaryHref=\"/contact\"\n      />\n    </>
  );
