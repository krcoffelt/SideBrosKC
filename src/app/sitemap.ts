import type { MetadataRoute } from "next";
import { companyInfo, getLocationPath, locationPages } from "@/data/company";

const routes = [
  { path: "/", priority: 1, changeFrequency: "weekly" as const },
  { path: "/power-washing", priority: 0.9, changeFrequency: "weekly" as const },
  { path: "/gutter-cleaning", priority: 0.9, changeFrequency: "weekly" as const },
  { path: "/window-cleaning", priority: 0.9, changeFrequency: "weekly" as const },
  { path: "/fleet-washing", priority: 0.9, changeFrequency: "weekly" as const },
  { path: "/concrete-staining", priority: 0.9, changeFrequency: "weekly" as const },
  { path: "/christmas-lighting", priority: 0.9, changeFrequency: "weekly" as const },
  { path: "/about", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/contact", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/privacy", priority: 0.4, changeFrequency: "yearly" as const },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const locationRoutes = locationPages.map((location) => ({
    path: getLocationPath(location.slug),
    priority: 0.75,
    changeFrequency: "monthly" as const,
  }));

  return [...routes, ...locationRoutes].map((route) => ({
    url: route.path === "/" ? companyInfo.siteUrl : `${companyInfo.siteUrl}${route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
