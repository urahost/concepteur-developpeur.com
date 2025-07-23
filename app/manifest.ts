import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "CDA Valenciennes P2 - Documentation",
    short_name: "CDA Docs",
    description: "Documentation complète pour la formation Concepteur Développeur d'Applications créée par la promotion CDA-Valenciennes-P2.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#000000",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
      {
        src: "/icon-192.png",
        type: "image/png",
        sizes: "192x192",
      },
      {
        src: "/icon-512.png",
        type: "image/png",
        sizes: "512x512",
      },
    ],
  };
}