"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const nav = [
  { label: "Home", href: "/" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = scrolled || open;
  const linkColor = solid ? "text-ink hover:text-teal" : "text-white hover:text-teal-light";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        solid ? "bg-white/95 shadow-lg shadow-teal/10 backdrop-blur" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/logo-new.png"
            alt="Route 66 Car Wash Pomona logo"
            width={48}
            height={48}
            priority
          />
          <span className={`font-display text-2xl leading-none ${solid ? "text-ink" : "text-white"}`}>
            Route 66 <span className="text-teal">Car Wash</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`font-display text-lg tracking-wider transition-colors ${linkColor}`}
            >
              {item.label}
            </Link>
          ))}
          <a
            href="tel:+19096200356"
            className="rounded-full bg-teal px-5 py-2 font-display text-lg tracking-wider text-white transition-colors hover:bg-teal-dark"
          >
            (909) 620-0356
          </a>
        </nav>

        <button
          className="p-2 md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <span className={`block h-0.5 w-6 ${solid ? "bg-ink" : "bg-white"}`} />
          <span className={`mt-1.5 block h-0.5 w-6 ${solid ? "bg-ink" : "bg-white"}`} />
          <span className={`mt-1.5 block h-0.5 w-6 ${solid ? "bg-ink" : "bg-white"}`} />
        </button>
      </div>

      {open && (
        <nav className="border-t border-teal/15 bg-white px-6 pb-6 pt-2 md:hidden">
          {nav.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block py-3 font-display text-xl tracking-wider text-ink"
            >
              {item.label}
            </Link>
          ))}
          <a
            href="tel:+19096200356"
            className="mt-2 inline-block rounded-full bg-teal px-5 py-2 font-display text-lg text-white"
          >
            Call (909) 620-0356
          </a>
        </nav>
      )}
    </header>
  );
}
