import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteConfig.url,
      lastModified: new Date().toISOString(),
    },
    {
      url: `${siteConfig.url}/about`,
    },
    {
      url: `${siteConfig.url}/booking`,
    },
    {
      url: `${siteConfig.url}/contact`,
    },
    {
      url: `${siteConfig.url}/destinations`,
    },
    {
      url: `${siteConfig.url}/gallery`,
    },
    {
      url: `${siteConfig.url}/privacy`,
    },
    {
      url: `${siteConfig.url}/terms`,
    },
  ];
}
