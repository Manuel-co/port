"use client";

import Link from "next/link";
import { Menu, X, Mail } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/project", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (path: string) => path === "/" ? pathname === "/" : pathname.startsWith(path);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pt-4 px-4">
      <div className="max-w-2xl mx-auto bg-white border-4 border-black rounded-2xl px-5 py-3 flex items-center justify-between shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 no-underline">
          {/* <div className="relative w-9 h-9 rounded-xl border-2 border-black overflow-hidden bg-black flex-shrink-0">
            <Image src="/logo.png" alt="Nweke Manuchimso" fill className="object-cover" />
          </div> */}
          <span className="hidden sm:block font-bold text-black text-sm font-zalando tracking-tight">
            Manuchimso
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map(({ href, label }) => {
            const active = isActive(href);
            return (
              <Link key={href} href={href}
                className={`px-4 py-2 rounded-xl text-sm font-bold transition-all font-zalando border-2 ${
                  active
                    ? "bg-black text-white border-black shadow-[3px_3px_0px_0px_rgba(99,102,241,1)]"
                    : "text-black/50 border-transparent hover:text-black hover:bg-black/5 hover:border-black/20"
                }`}>
                {label}
              </Link>
            );
          })}
        </nav>

        {/* CTA */}
        <Link href="/contact"
          className="hidden md:inline-flex items-center gap-1.5 px-5 py-2.5 bg-black text-white font-bold text-sm border-4 border-black rounded-xl shadow-[4px_4px_0px_0px_rgba(99,102,241,1)] hover:shadow-[1px_1px_0px_0px_rgba(99,102,241,1)] hover:translate-x-0.5 hover:translate-y-0.5 transition-all font-zalando">
          <Mail className="w-4 h-4" /> Get in touch
        </Link>

        {/* Mobile trigger */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <button className="md:hidden w-10 h-10 flex items-center justify-center bg-black text-white border-2 border-black rounded-xl" aria-label="Open menu">
              <Menu className="w-5 h-5" />
            </button>
          </SheetTrigger>

          <SheetContent side="right" className="w-72 bg-white border-l-4 border-black p-0 flex flex-col font-zalando">
            {/* Header */}
            <div className="flex items-center justify-between p-5 border-b-4 border-black">
              <div className="flex items-center gap-3">
                <div className="relative w-10 h-10 rounded-xl border-2 border-black overflow-hidden bg-black">
                  <Image src="/logo.png" alt="Nweke Manuchimso" fill className="object-cover" />
                </div>
                <div>
                  <p className="text-sm font-bold text-black">Manuchimso</p>
                  <p className="text-xs text-black/40 uppercase tracking-widest">Developer</p>
                </div>
              </div>
              <SheetClose asChild>
                <button className="w-9 h-9 flex items-center justify-center bg-black text-white border-2 border-black rounded-xl">
                  <X className="w-4 h-4" />
                </button>
              </SheetClose>
            </div>

            {/* Nav */}
            <nav className="p-4 flex-1">
              {navItems.map(({ href, label }) => {
                const active = isActive(href);
                return (
                  <SheetClose asChild key={href}>
                    <Link href={href}
                      className={`flex items-center px-4 py-3 rounded-xl mb-2 text-sm font-bold border-2 transition-all ${
                        active
                          ? "bg-black text-white border-black shadow-[3px_3px_0px_0px_rgba(99,102,241,1)]"
                          : "text-black/50 border-transparent hover:text-black hover:bg-black/5 hover:border-black/20"
                      }`}>
                      {label}
                      {active && <span className="ml-auto w-2 h-2 rounded-full bg-[#6366F1]" />}
                    </Link>
                  </SheetClose>
                );
              })}
            </nav>

            {/* Footer CTA */}
            <div className="p-4 border-t-4 border-black">
              <SheetClose asChild>
                <Link href="/contact"
                  className="flex items-center justify-center gap-2 w-full py-3 bg-black text-white font-bold text-sm border-4 border-black rounded-xl shadow-[4px_4px_0px_0px_rgba(99,102,241,1)] hover:shadow-[1px_1px_0px_0px_rgba(99,102,241,1)] hover:translate-x-0.5 hover:translate-y-0.5 transition-all">
                  <Mail className="w-4 h-4" /> Get in touch
                </Link>
              </SheetClose>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
