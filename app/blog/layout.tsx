import type React from "react";
import { metadata } from "./metadata";
export { metadata };

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": "https://manuchim.site/blog",
    name: "Blog | Nweke Manuchimso",
    description: "Technical articles and tutorials on React, Next.js, JavaScript, and modern web development.",
    url: "https://manuchim.site/blog",
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
