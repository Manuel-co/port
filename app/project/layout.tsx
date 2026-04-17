import type React from "react";
import { metadata } from "./metadata";
export { metadata };

export default function ProjectLayout({ children }: { children: React.ReactNode }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": "https://manuchim.site/project",
    name: "Projects | Nweke Manuchimso",
    description: "Web development projects — Next.js apps, React components, and full-stack solutions.",
    url: "https://manuchim.site/project",
    author: { "@id": "https://manuchim.site/#person" },
    isPartOf: { "@id": "https://manuchim.site/#website" },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      {children}
    </>
  );
}
