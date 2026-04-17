import type React from "react";
import { metadata } from "./metadata";
export { metadata };

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "@id": "https://manuchim.site/contact",
    name: "Contact | Nweke Manuchimso",
    description: "Get in touch with Nweke Manuchimso for freelance work, collaborations, and projects.",
    url: "https://manuchim.site/contact",
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
