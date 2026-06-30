<head><title>IT Solutions Careers & Hiring | TechForge Global</title><meta content="Join TechForge Global for IT solutions careers or find top talent. Explore job openings, submit your profile, and grow with a trusted global technology partner." name="description"></head>import type { Metadata } from "next";
import Link from "next/link";
import { PageHero, CTASection } from "@/components/ui";
import { openRoles } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Join Us",
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
    &lt;&gt;
      <pagehero badge="Join Us" subtitle="Whether you're an IT professional looking for your next role or a company seeking top talent &mdash; TechForge Global connects the right people with the right opportunities." title="Build Your Career or Find Your Next Hire"></pagehero>
<section classname="py-20">
<div classname="mx-auto max-w-7xl px-6 lg:px-8">
<div classname="grid gap-8 lg:grid-cols-2">
<div classname="rounded-2xl border border-brand-500/30 bg-gradient-to-br from-brand-950/50 to-slate-900/50 p-8">
<span classname="text-xs font-semibold uppercase tracking-wider text-brand-400">
                For Companies
              </span>
<h2 classname="mt-3 text-2xl font-bold text-white">
                Hire Dedicated IT Talent
              </h2>
<p classname="mt-4 text-sm leading-relaxed text-slate-400">
                Tell us what you need &mdash; developers, designers, DevOps engineers,
                or entire teams. We'll match you with pre-vetted
                professionals within 72 hours.
              </p>
<link classname="mt-6 inline-block rounded-xl bg-brand-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-500" href="/contact">
                Request Talent
              
            </div>
<div classname="rounded-2xl border border-white/10 bg-white/5 p-8">
<span classname="text-xs font-semibold uppercase tracking-wider text-slate-400">
                For Professionals
              </span>
<h2 classname="mt-3 text-2xl font-bold text-white">
                Submit Your Profile
              </h2>
<p classname="mt-4 text-sm leading-relaxed text-slate-400">
                Join our global talent network. It's free for job seekers &mdash;
                we connect you with companies that match your skills and career
                goals.
              </p>
<link classname="mt-6 inline-block rounded-xl border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/5" href="/contact">
                Apply Now
              
            </div>
</div>
</div>
</section>
<section classname="border-y border-white/10 bg-slate-900/30 py-20">
<div classname="mx-auto max-w-7xl px-6 lg:px-8">
<h2 classname="text-center text-3xl font-bold text-white">
            Why Join TechForge Global?
          </h2>
<div classname="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit) =&gt; (
              <div classname="rounded-xl border border-white/10 bg-white/5 p-6" key="{benefit.title}">
<h3 classname="font-semibold text-white">{benefit.title}</h3>
<p classname="mt-2 text-sm text-slate-400">
                  {benefit.description}
                </p>
</div>
            ))}
          </div>
</div>
</section>
<section classname="py-20">
<div classname="mx-auto max-w-7xl px-6 lg:px-8">
<h2 classname="text-3xl font-bold text-white">Open Positions</h2>
<p classname="mt-4 text-slate-400">
            Current opportunities within our network and internal team.
          </p>
<div classname="mt-10 divide-y divide-white/10 rounded-2xl border border-white/10 bg-white/5">
            {openRoles.map((role) =&gt; (
              <div classname="flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:justify-between" key="{role.title}">
<div>
<h3 classname="font-semibold text-white">{role.title}</h3>
<div classname="mt-1 flex flex-wrap gap-3 text-sm text-slate-400">
<span>{role.location}</span>
<span classname="text-slate-600">&middot;</span>
<span>{role.department}</span>
</div>
</div>
<link classname="shrink-0 rounded-lg border border-brand-500/30 px-5 py-2 text-sm font-semibold text-brand-400 transition hover:bg-brand-500/10" href="/contact">
                  Apply
                
              </div>
            ))}
          </div>
</div>
</section>
<ctasection description="Send us your resume anyway &mdash; we're always looking for exceptional IT talent." primaryhref="/contact" primarylabel="Get in Touch" title="Don't See the Right Role?"></ctasection>
    
  );
}
