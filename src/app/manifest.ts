import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Side Bros KC LLC",
    short_name: "Side Bros KC",
    description: "Exterior cleaning, concrete staining, and holiday lighting across the Kansas City metro.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#5b2fe0",
    icons: [
      {
        src: "/icon.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/apple-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
