"use client";

import Link from "next/link";
import { Menu, X, Home, FolderGit2, BookOpen, Mail, ArrowUpRight } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

// Import fonts
if (typeof document !== 'undefined') {
  const link = document.createElement('link');
  link.href = 'https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=DM+Sans:wght@400;500;600&display=swap';
  link.rel = 'stylesheet';
  if (!document.querySelector(`link[href="${link.href}"]`)) {
    document.head.appendChild(link);
  }
}

const navItems = [
  { href: "/", label: "Home", icon: Home },
  { href: "/project", label: "Projects", icon: FolderGit2 },
  { href: "/blog", label: "Blog", icon: BookOpen },
  { href: "/contact", label: "Contact", icon: Mail },
];

export function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (path: string) => {
    if (path === "/") return pathname === "/";
    return pathname.startsWith(path);
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      {/* Background — fades out when scrolled */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "rgba(5, 5, 5, 0.88)",
          backdropFilter: "blur(24px) saturate(180%)",
          borderBottom: "1px solid rgba(255,255,255,0.07)",
          opacity: scrolled ? 0 : 1,
          transition: "opacity 0.4s ease",
        }}
      />

      <div
        className="relative mx-auto flex items-center justify-between px-6"
        style={{
          maxWidth: 1200,
          height: scrolled ? 52 : 64,
          transition: "height 0.4s cubic-bezier(0.16,1,0.3,1)",
        }}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 z-10" style={{ textDecoration: "none" }}>
          <div
            className="relative overflow-hidden flex-shrink-0"
            style={{
              width: 34, height: 34, borderRadius: 9,
              border: "1.5px solid rgba(255,255,255,0.12)",
            }}
          >
            <Image src="/logo.png" alt="Nweke Manuchimso" fill className="object-cover" />
          </div>
          <span
            className="hidden sm:block font-semibold"
            style={{ fontSize: 15, color: "rgba(255,255,255,0.9)", letterSpacing: "-0.02em" }}
          >
            Manuchimso
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav
          className="hidden md:flex items-center gap-0.5 z-10"
          style={
            scrolled
              ? {
                  position: "absolute", top: "50%", left: "50%",
                  transform: "translate(-50%, -50%)",
                  background: "rgba(10,10,10,0.95)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: 100,
                  padding: "6px 8px",
                  backdropFilter: "blur(20px)",
                  boxShadow: "0 0 0 1px rgba(255,255,255,0.04), 0 8px 32px rgba(0,0,0,0.5)",
                }
              : {}
          }
        >
          {navItems.map((item) => {
            const Icon = item.icon;
            const active = isActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center gap-1.5 font-medium transition-all duration-200"
                style={{
                  padding: scrolled ? "6px 12px" : "8px 14px",
                  borderRadius: scrolled ? 100 : 8,
                  fontSize: scrolled ? 13 : 14,
                  letterSpacing: "-0.01em",
                  color: active ? "#fff" : "rgba(255,255,255,0.45)",
                  background: active
                    ? "rgba(255,255,255,0.1)"
                    : "transparent",
                  textDecoration: "none",
                  whiteSpace: "nowrap",
                }}
                onMouseEnter={e => {
                  if (!active) {
                    (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.9)";
                    (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.06)";
                  }
                }}
                onMouseLeave={e => {
                  if (!active) {
                    (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.45)";
                    (e.currentTarget as HTMLElement).style.background = "transparent";
                  }
                }}
              >
                <Icon style={{ width: 15, height: 15, opacity: active ? 1 : 0.7, flexShrink: 0 }} />
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* CTA — Desktop */}
        <Link
          href="/contact"
          className="hidden md:flex items-center gap-1.5 z-10 font-semibold"
          style={{
            padding: "8px 18px",
            borderRadius: 100,
            background: "#fff",
            color: "#000",
            fontSize: 13.5,
            letterSpacing: "-0.01em",
            textDecoration: "none",
            boxShadow: "0 1px 3px rgba(0,0,0,0.3)",
            transition: "transform 0.15s ease, box-shadow 0.2s ease",
          }}
          onMouseEnter={e => {
            (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)";
            (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 16px rgba(255,255,255,0.15)";
          }}
          onMouseLeave={e => {
            (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
            (e.currentTarget as HTMLElement).style.boxShadow = "0 1px 3px rgba(0,0,0,0.3)";
          }}
        >
          Get in Touch
          <ArrowUpRight style={{ width: 13, height: 13 }} />
        </Link>

        {/* Mobile Menu */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <button
              className="md:hidden flex items-center justify-center z-10"
              aria-label="Open menu"
              style={{
                width: 36, height: 36, borderRadius: 8,
                background: "rgba(255,255,255,0.07)",
                border: "1px solid rgba(255,255,255,0.1)",
                color: "rgba(255,255,255,0.8)",
                cursor: "pointer",
              }}
            >
              <Menu style={{ width: 18, height: 18 }} />
            </button>
          </SheetTrigger>

          <SheetContent
            side="right"
            style={{
              width: 280,
              background: "rgb(8,8,8)",
              borderLeft: "1px solid rgba(255,255,255,0.08)",
              padding: 0,
              display: "flex",
              flexDirection: "column",
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            {/* Sidebar Header */}
            <div
              className="flex items-center justify-between"
              style={{ padding: "20px 20px 16px", borderBottom: "1px solid rgba(255,255,255,0.08)" }}
            >
              <div className="flex items-center gap-2.5">
                <div
                  className="relative overflow-hidden flex-shrink-0"
                  style={{ width: 36, height: 36, borderRadius: 9, border: "1.5px solid rgba(255,255,255,0.12)" }}
                >
                  <Image src="/logo.png" alt="Nweke Manuchimso" fill className="object-cover" />
                </div>
                <div>
                  <p style={{ fontSize: 14, fontWeight: 600, color: "#fff", letterSpacing: "-0.02em", margin: 0 }}>
                    Manuchimso
                  </p>
                  <p style={{ fontSize: 11, color: "rgba(255,255,255,0.35)", fontFamily: "'DM Mono', monospace", textTransform: "uppercase", letterSpacing: "0.08em", margin: "2px 0 0" }}>
                    Developer
                  </p>
                </div>
              </div>
              <SheetClose asChild>
                <button
                  className="flex items-center justify-center"
                  style={{ width: 32, height: 32, borderRadius: 8, background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.8)", cursor: "pointer" }}
                >
                  <X style={{ width: 15, height: 15 }} />
                </button>
              </SheetClose>
            </div>

            {/* Sidebar Nav */}
            <nav style={{ padding: 12, flex: 1 }}>
              <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
                {navItems.map((item) => {
                  const Icon = item.icon;
                  const active = isActive(item.href);
                  return (
                    <li key={item.href} style={{ marginBottom: 2 }}>
                      <SheetClose asChild>
                        <Link
                          href={item.href}
                          className="flex items-center gap-3"
                          style={{
                            padding: "11px 14px",
                            borderRadius: 10,
                            fontSize: 14,
                            fontWeight: 500,
                            color: active ? "#fff" : "rgba(255,255,255,0.45)",
                            background: active ? "rgba(255,255,255,0.09)" : "transparent",
                            textDecoration: "none",
                            transition: "color 0.2s, background 0.2s",
                          }}
                        >
                          <span
                            className="flex items-center justify-center flex-shrink-0"
                            style={{
                              width: 32, height: 32, borderRadius: 8,
                              background: active ? "rgba(255,255,255,0.12)" : "rgba(255,255,255,0.06)",
                            }}
                          >
                            <Icon style={{ width: 15, height: 15, opacity: active ? 1 : 0.7 }} />
                          </span>
                          {item.label}
                          {active && (
                            <span style={{ width: 4, height: 4, borderRadius: "50%", background: "rgba(255,255,255,0.6)", marginLeft: "auto", flexShrink: 0 }} />
                          )}
                        </Link>
                      </SheetClose>
                    </li>
                  );
                })}
              </ul>
            </nav>

            {/* Sidebar Footer */}
            <div style={{ padding: 12, borderTop: "1px solid rgba(255,255,255,0.08)" }}>
              <SheetClose asChild>
                <Link
                  href="/contact"
                  className="flex items-center justify-center gap-1.5 font-semibold"
                  style={{
                    width: "100%",
                    padding: "10px 18px",
                    borderRadius: 100,
                    background: "#fff",
                    color: "#000",
                    fontSize: 13.5,
                    letterSpacing: "-0.01em",
                    textDecoration: "none",
                    boxSizing: "border-box",
                  }}
                >
                  Get in Touch
                  <ArrowUpRight style={{ width: 13, height: 13 }} />
                </Link>
              </SheetClose>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}