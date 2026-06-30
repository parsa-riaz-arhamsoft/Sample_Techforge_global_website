<head><title>IT Solutions Company | TechForge Global</title><meta content="Discover TechForge Global's IT solutions and staffing expertise. 25+ years delivering managed services, hiring solutions, and outsourcing support globally." name="description"><script type="application/ld+json">{
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://techforgeglobal.com/about",
  "name": "TechForge Global",
  "description": "Learn about TechForge Global — our mission, values, and 25+ years of experience in IT outsourcing and staffing.",
  "url": "https://techforgeglobal.com",
  "foundingDate": "1999",
  "areaServed": "Worldwide",
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "Customer Service",
    "url": "https://techforgeglobal.com/contact"
  }
}</script><script type="application/ld+json">{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://techforgeglobal.com/about",
  "name": "About Us - TechForge Global",
  "description": "Learn about TechForge Global — our mission, values, and 25+ years of experience in IT outsourcing and staffing.",
  "url": "https://techforgeglobal.com/about",
  "isPartOf": {
    "@type": "WebSite",
    "url": "https://techforgeglobal.com"
  },
  "primaryImageOfPage": {
    "@type": "ImageObject",
    "url": "https://techforgeglobal.com/og-image.jpg"
  }
}</script><script type="application/ld+json">{
  "@context": "https://schema.org",
  "@type": "ImageObject",
  "@id": "https://techforgeglobal.com/about#team-image",
  "url": "https://techforgeglobal.com/images/team.jpg",
  "name": "TechForge Global Team",
  "description": "Professional IT staffing and recruitment team at TechForge Global",
  "caption": "Delivering Reliable IT Hiring Solutions",
  "isPartOf": {
    "@type": "WebPage",
    "url": "https://techforgeglobal.com/about"
  }
}</script></head>import type { Metadata } from "next";
import { PageHero, CTASection, StatCard } from "@/components/ui";
import { stats } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about TechForge Global &mdash; our mission, values, and 25+ years of experience in IT outsourcing and staffing.",
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
      "With honesty and transparency, we help businesses scale and people grow &mdash; building long-term partnerships, not transactions.",
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
    &lt;&gt;
      <pagehero badge="About Us" subtitle="TechForge Global is rethinking the way businesses design, build, and connect with IT talent &mdash; bringing high-quality technology solutions in sustainable, transparent, and growth-driven ways." title="Delivering Reliable IT Hiring Solutions"></pagehero>
<section classname="py-20">
<div classname="mx-auto max-w-7xl px-6 lg:px-8">
<div classname="grid gap-16 lg:grid-cols-2 lg:items-center">
<div>
<h2 classname="text-3xl font-bold text-white">
                Building Stronger Teams Worldwide
              </h2>
<p classname="mt-6 leading-relaxed text-slate-400">
                For over two decades, we've helped companies of every size
                &mdash; from ambitious startups to Fortune 500 enterprises &mdash; access
                the IT talent they need to compete and innovate. Our approach
                combines rigorous vetting, cultural alignment, and ongoing
                support to ensure every placement succeeds.
              </p>
<p classname="mt-4 leading-relaxed text-slate-400">
                We believe great technology starts with great people. That's
                why we invest as much in our candidates' careers as we do in
                our clients' success.
              </p>
</div>
<div classname="grid grid-cols-2 gap-4">
              {stats.map((stat) =&gt; (
                <div classname="rounded-2xl border border-white/10 bg-white/5 p-6" key="{stat.label}">
<statcard {...stat}></statcard>
</div>
              ))}
            </div>
</div>
</div>
</section>
<section classname="border-y border-white/10 bg-slate-900/30 py-20">
<div classname="mx-auto max-w-7xl px-6 lg:px-8">
<h2 classname="text-center text-3xl font-bold text-white">
            What We Stand For
          </h2>
<div classname="mt-12 grid gap-8 md:grid-cols-3">
            {values.map((value) =&gt; (
              <div classname="rounded-2xl border border-white/10 bg-white/5 p-8" key="{value.title}">
<h3 classname="text-xl font-semibold text-brand-400">
                  {value.title}
                </h3>
<p classname="mt-4 text-sm leading-relaxed text-slate-400">
                  {value.description}
                </p>
</div>
            ))}
          </div>
</div>
</section>
<section classname="py-20">
<div classname="mx-auto max-w-3xl px-6 lg:px-8">
<h2 classname="text-center text-3xl font-bold text-white">
            Our Journey
          </h2>
<div classname="relative mt-12">
<div classname="absolute left-4 top-0 h-full w-px bg-brand-600/30 md:left-1/2"></div>
<div classname="space-y-12">
              {timeline.map((item, i) =&gt; (
                <div "" "md:flex-row-reverse" ${ % 2="0" : ? classname="{`relative" flex flex-col i key="{item.year}" md:flex-row }`}>
<div classname="hidden flex-1 md:block"></div>
<div classname="absolute left-4 top-1 z-10 h-3 w-3 -translate-x-1/2 rounded-full bg-brand-500 md:left-1/2"></div>
<div classname="ml-10 flex-1 rounded-xl border border-white/10 bg-white/5 p-6 md:ml-0">
<span classname="text-sm font-bold text-brand-400">
                      {item.year}
                    </span>
<p classname="mt-2 text-sm text-slate-300">{item.event}</p>
</div>
</div>
              ))}
            </div>
</div>
</div>
</section>
<ctasection description="Whether you need to hire talent or want to join our team, we'd love to hear from you." primaryhref="/contact" primarylabel="Contact Us" secondaryhref="/join-us" secondarylabel="View Open Roles" title="Ready to Work With Us?"></ctasection>
    
  );
}
