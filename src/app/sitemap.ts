import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://sample-techforge-global-website.vercel.app",
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: "https://sample-techforge-global-website.vercel.app/about",
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: "https://sample-techforge-global-website.vercel.app/testimonials",
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: "https://sample-techforge-global-website.vercel.app/join-us",
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: "https://sample-techforge-global-website.vercel.app/contact",
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];
}
