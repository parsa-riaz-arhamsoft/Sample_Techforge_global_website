<head><title>Client Testimonials | TechForge IT Solutions</title><meta content="Discover how TechForge Global's IT outsourcing and managed services transform client businesses. Read authentic testimonials from satisfied customers worldwide." name="description"><script type="application/ld+json">{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://techforgeglobal.com/testimonials",
  "name": "Testimonials",
  "description": "Read what our clients say about TechForge Global's IT outsourcing and staffing services.",
  "url": "https://techforgeglobal.com/testimonials"
}</script><script type="application/ld+json">{
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://techforgeglobal.com",
  "name": "TechForge Global",
  "url": "https://techforgeglobal.com",
  "sameAs": [
    "https://linkedin.com/company/techforge-global"
  ],
  "knowsAbout": [
    "IT staffing",
    "IT outsourcing",
    "Software development"
  ]
}</script><script type="application/ld+json">{
  "@context": "https://schema.org",
  "@type": "Review",
  "@id": "https://techforgeglobal.com/testimonials",
  "name": "Client Testimonials for TechForge Global IT Services",
  "reviewRating": {
    "@type": "Rating",
    "ratingValue": "4.8",
    "bestRating": "5"
  },
  "author": {
    "@type": "Organization",
    "name": "TechForge Global"
  },
  "reviewBody": "Testimonials and reviews from satisfied clients about TechForge Global's IT outsourcing and staffing services."
}</script></head>import type { Metadata } from "next";
import { PageHero, TestimonialCard, CTASection } from "@/components/ui";
import { testimonials } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Testimonials",
  description:
    "Read what our clients say about TechForge Global's IT outsourcing and staffing services.",
};

export default function TestimonialsPage() {
  return (
    &lt;&gt;
      <pagehero badge="Testimonials" subtitle="Hear what business leaders say about their experience partnering with TechForge Global for IT staffing and outsourcing." title="Stories From Our Happy Clients"></pagehero>
<section classname="py-20">
<div classname="mx-auto max-w-7xl px-6 lg:px-8">
<div classname="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t) =&gt; (
              <testimonialcard key="{t.name}" {...t}></testimonialcard>
            ))}
          </div>
</div>
</section>
<section classname="border-t border-white/10 bg-slate-900/30 py-20">
<div classname="mx-auto max-w-4xl px-6 text-center lg:px-8">
<blockquote classname="text-2xl font-medium leading-relaxed text-white md:text-3xl">
            &ldquo;TechForge didn't just fill roles &mdash; they helped us
            restructure our entire engineering organization for scale.&rdquo;
          </blockquote>
<div classname="mt-8">
<div classname="font-semibold text-white">Michael Torres</div>
<div classname="text-sm text-slate-400">
              CEO, Apex Digital Ventures
            </div>
</div>
</div>
</section>
<ctasection description="Experience the difference of working with a staffing partner that puts your success first." primaryhref="/contact" primarylabel="Start Hiring" title="Join Our Growing List of Satisfied Clients"></ctasection>
    
  );
}
