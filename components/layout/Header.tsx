"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const navItems = [
  { href: "/project", label: "Projects" },
  { href: "/blog", label: "Writing" },
  { href: "/contact#contact-form", label: "Contact" },
];

const ease = [0.16, 1, 0.3, 1] as const;

// Signature drawn as a mask so it takes the current text colour (needed for the difference blend).
function Logo({ className = "" }: { className?: string }) {
  return (
    <span
      role="img"
      aria-label="Manuchim"
      className={`block aspect-[476.75/237] bg-current ${className}`}
      style={{
        WebkitMask: "url(/manuchim-logo.svg) center / contain no-repeat",
        mask: "url(/manuchim-logo.svg) center / contain no-repeat",
      }}
    />
  );
}

export function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (href: string) => pathname.startsWith(href.split("#")[0]);

  useEffect(() => setIsOpen(false), [pathname]);
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <>
      {/* Difference blend keeps the header legible over both paper and black sections */}
      <header className="fixed inset-x-0 top-0 z-50 text-white mix-blend-difference">
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
          className="site-frame flex items-center justify-between px-4 md:px-6 py-3"
        >
          <Link href="/" aria-label="Nweke Manuchimso — home">
            <Logo className="h-7 md:h-8" />
          </Link>

          <nav className="hidden md:flex gap-6">
            {navItems.map(({ href, label }) => (
              <Link key={href} href={href} className="note uppercase tracking-wide flex items-center gap-2">
                <span className={`h-1.5 w-1.5 rounded-full bg-white transition-opacity ${isActive(href) ? "opacity-100" : "opacity-0"}`} />
                {label}
              </Link>
            ))}
          </nav>

          <button
            onClick={() => setIsOpen(true)}
            className="md:hidden inline-flex items-center gap-2 -mr-2 px-2 h-10 text-xs uppercase tracking-wide"
            aria-label="Open menu"
            aria-expanded={isOpen}
          >
            <span className="flex flex-col gap-[3px]" aria-hidden>
              <span className="block h-px w-3.5 bg-white" />
              <span className="block h-px w-3.5 bg-white" />
            </span>
            Menu
          </button>
        </motion.div>
      </header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.6, ease }}
            className="fixed inset-0 z-[60] bg-ink text-paper flex flex-col px-4 py-3"
          >
            <div className="flex items-center justify-between">
              <Link href="/" onClick={() => setIsOpen(false)} aria-label="Home">
                <Logo className="h-7" />
              </Link>
              <button
                onClick={() => setIsOpen(false)}
                className="inline-flex items-center -mr-2 px-2 h-10 text-xs uppercase tracking-wide"
                aria-label="Close menu"
              >
                Close ✕
              </button>
            </div>

            <nav className="mt-auto mb-6" aria-label="Pages">
              {[{ href: "/", label: "Home" }, ...navItems].map(({ href, label }, i) => (
                <div key={href} className="overflow-hidden border-b border-paper/60">
                  <motion.div
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.7, ease, delay: 0.15 + i * 0.06 }}
                  >
                    <Link
                      href={href}
                      onClick={() => setIsOpen(false)}
                      className="flex items-baseline justify-between display-md py-2"
                    >
                      {label}
                      {isActive(href) && href !== "/" && <span className="h-2.5 w-2.5 rounded-full bg-paper" />}
                    </Link>
                  </motion.div>
                </div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
