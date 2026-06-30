<head><title>IT Solutions & Staffing | TechForge Global</title><meta content="Connect with exceptional IT professionals for outsourcing and staffing solutions. Global experts in developers, designers, and engineers. Explore our IT" name="description"></head>import Link from "next/link";
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

export default function HomePage() {
  return (
    &lt;&gt;
      {/* Hero */}
      <section classname="relative overflow-hidden">
<div classname="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand-900/50 via-slate-950 to-slate-950"></div>
<div classname="absolute -right-40 top-20 h-96 w-96 rounded-full bg-brand-600/10 blur-3xl"></div>
<div classname="absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-brand-500/10 blur-3xl"></div>
<div classname="relative mx-auto max-w-7xl px-6 py-24 md:py-32 lg:px-8 lg:py-40">
<div classname="max-w-3xl">
<span classname="mb-6 inline-block rounded-full border border-brand-500/30 bg-brand-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-300">
              IT Outsourcing & Staffing
            </span>
<h1 classname="text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl">
              Your Partner in{" "}
              <span classname="text-gradient">Staffing Solutions</span>
</h1>
<p classname="mt-6 text-lg leading-relaxed text-slate-400 md:text-xl">
              Elevate your team with specialized IT recruitment solutions
              designed to connect you with skilled professionals who drive
              innovation and business growth.
            </p>
<div classname="mt-10 flex flex-wrap gap-4">
<link classname="rounded-xl bg-brand-600 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-600/30 transition hover:bg-brand-500" href="/join-us">
                Hire Talent
              
              <link classname="rounded-xl border border-white/20 px-8 py-3.5 text-sm font-semibold text-white transition hover:bg-white/5" href="/contact">
                Contact Us
              
            </div>
</div>
</div>
</section>

      {/* Client logos */}
      <section classname="border-y border-white/10 bg-slate-900/50 py-10">
<div classname="mx-auto max-w-7xl px-6 lg:px-8">
<p classname="mb-6 text-center text-xs font-semibold uppercase tracking-widest text-slate-500">
            Trusted by innovative companies
          </p>
<div classname="flex flex-wrap items-center justify-center gap-x-12 gap-y-4">
            {clientLogos.map((logo) =&gt; (
              <span classname="text-lg font-bold tracking-wide text-slate-600 transition hover:text-slate-400" key="{logo}">
                {logo}
              </span>
            ))}
          </div>
</div>
</section>

      {/* Services marquee */}
      <section classname="overflow-hidden border-b border-white/10 py-6">
<div classname="flex animate-marquee gap-8 whitespace-nowrap">
          {[...services, ...services].map((service, i) =&gt; (
            <span classname="text-sm font-medium text-slate-500" key="{`${service.title}-${i}`}">
              {service.title}
            </span>
          ))}
        </div>
</section>

      {/* Talent categories */}
      <section classname="py-20 md:py-28">
<div classname="mx-auto max-w-7xl px-6 lg:px-8">
<div classname="mx-auto max-w-2xl text-center">
<h2 classname="text-3xl font-bold text-white md:text-4xl">
              Top IT Talent with Cutting-Edge Strategy
            </h2>
<p classname="mt-4 text-slate-400">
              We connect businesses with exceptional IT professionals who drive
              innovation, long-term success, and sustainable growth.
            </p>
</div>
<div classname="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {talentCategories.map((category) =&gt; (
              <div classname="group rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-brand-500/50" key="{category.title}">
<h3 classname="text-lg font-semibold text-white">
                  {category.title}
                </h3>
<p classname="mt-2 text-sm leading-relaxed text-slate-400">
                  {category.description}
                </p>
<link classname="mt-4 inline-block text-sm font-semibold text-brand-400 transition group-hover:text-brand-300" href="/contact">
                  Hire Now &rarr;
                
              </div>
            ))}
          </div>
</div>
</section>

      {/* Stats */}
      <section classname="border-y border-white/10 bg-slate-900/50 py-16">
<div classname="mx-auto max-w-7xl px-6 lg:px-8">
<div classname="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat) =&gt; (
              <statcard key="{stat.label}" {...stat}></statcard>
            ))}
          </div>
</div>
</section>

      {/* Services grid */}
      <section classname="py-20 md:py-28">
<div classname="mx-auto max-w-7xl px-6 lg:px-8">
<div classname="mx-auto max-w-2xl text-center">
<h2 classname="text-3xl font-bold text-white md:text-4xl">
              Our IT Recruitment Specialties
            </h2>
<p classname="mt-4 text-slate-400">
              Connecting businesses with skilled IT professionals for every
              technical need.
            </p>
</div>
<div classname="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) =&gt; (
              <servicecard key="{service.title}" {...service}></servicecard>
            ))}
          </div>
</div>
</section>

      {/* Testimonials preview */}
      <section classname="border-t border-white/10 bg-slate-900/30 py-20 md:py-28">
<div classname="mx-auto max-w-7xl px-6 lg:px-8">
<div classname="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
<div>
<h2 classname="text-3xl font-bold text-white md:text-4xl">
                Stories From Our Happy Clients
              </h2>
<p classname="mt-4 max-w-xl text-slate-400">
                Hear what our clients say about their experience working with
                us.
              </p>
</div>
<link classname="shrink-0 text-sm font-semibold text-brand-400 hover:text-brand-300" href="/testimonials">
              View all testimonials &rarr;
            
          </div>
<div classname="mt-12 grid gap-6 md:grid-cols-3">
            {testimonials.slice(0, 3).map((t) =&gt; (
              <testimonialcard key="{t.name}" {...t}></testimonialcard>
            ))}
          </div>
</div>
</section>

      {/* FAQ */}
      <section classname="py-20 md:py-28">
<div classname="mx-auto max-w-3xl px-6 lg:px-8">
<h2 classname="text-center text-3xl font-bold text-white md:text-4xl">
            Frequently Asked Questions
          </h2>
<p classname="mt-4 text-center text-slate-400">
            Find answers to common questions about our offshore IT staffing
            services.
          </p>
<div classname="mt-12 space-y-4">
            {faqs.map((faq) =&gt; (
              <details classname="group rounded-xl border border-white/10 bg-white/5" key="{faq.question}">
<summary classname="cursor-pointer list-none px-6 py-5 font-medium text-white [&::-webkit-details-marker]:hidden">
<span classname="flex items-center justify-between gap-4">
                    {faq.question}
                    <span classname="shrink-0 text-brand-400 transition group-open:rotate-45">
                      +
                    </span>
</span>
</summary>
<p classname="border-t border-white/10 px-6 py-4 text-sm leading-relaxed text-slate-400">
                  {faq.answer}
                </p>
</details>
            ))}
          </div>
</div>
</section>
<ctasection description="With 25+ years of experience in IT staffing and offshore solutions, we're ready to help you build your dream team." primaryhref="/contact" primarylabel="Get Consultation" secondaryhref="/join-us" secondarylabel="Join Our Team" title="Get a Free IT Staffing Consultation"></ctasection>
    
  );
}
