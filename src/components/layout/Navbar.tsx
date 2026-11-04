"use client";

import React, { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.getElementById(link.href.substring(1)))
      .filter((section): section is HTMLElement => section !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-100px 0px -55% 0px",
        threshold: 0,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  // Close menu when pressing Escape
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsMenuOpen(false);
    };

    window.addEventListener("keydown", handleEscape);

    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  // Prevent background scrolling when menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const handleNavigation = (section: string) => {
    setActiveSection(section);
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/[0.04] bg-[#0b0b0b]">
      <div className="mx-auto flex h-[80px] max-w-400 items-center justify-between px-6 md:h-[100px] md:px-[58px]">

        {/* Logo */}
        <a
          href="#home"
          onClick={() => handleNavigation("home")}
          className="text-[30px] font-bold tracking-[-2px] text-white"
        >
          JC<span className="text-[#4169ff]">.</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => {
            const section = link.href.substring(1);
            const isActive = activeSection === section;

            return (
              <a
                key={link.name}
                href={link.href}
                onClick={() => handleNavigation(section)}
                className={`group relative py-2 text-[13px] transition-colors duration-300 ${
                  isActive
                    ? "text-white"
                    : "text-[#999999] hover:text-white"
                }`}
              >
                {link.name}

                <span
                  className={`absolute bottom-0 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-[#4169ff] transition-opacity duration-300 ${
                    isActive
                      ? "opacity-100"
                      : "opacity-0 group-hover:opacity-100"
                  }`}
                />
              </a>
            );
          })}
        </nav>

        {/* Desktop CTA */}
        <a
          href="#contact"
          onClick={() => handleNavigation("contact")}
          className="hidden items-center gap-5 rounded-full border border-[#292929] bg-[#1b1b1b] px-[22px] py-[14px] text-[13px] font-medium text-white transition-all duration-300 hover:border-[#4169ff] hover:bg-[#4169ff] md:flex"
        >
          Let's talk
          <ArrowUpRight size={17} />
        </a>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMenuOpen}
          className="flex size-11 items-center justify-center rounded-full border border-[#292929] bg-[#1b1b1b] text-white transition-colors hover:border-[#4169ff] md:hidden"
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`absolute left-0 top-full w-full overflow-hidden border-b border-[#292929] bg-[#0b0b0b] transition-all duration-300 ease-in-out md:hidden ${
          isMenuOpen
            ? "visible max-h-[450px] opacity-100"
            : "invisible max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col px-6 pb-6 pt-3">
          {navLinks.map((link, index) => {
            const section = link.href.substring(1);
            const isActive = activeSection === section;

            return (
              <a
                key={link.name}
                href={link.href}
                onClick={() => handleNavigation(section)}
                style={{ transitionDelay: `${index * 40}ms` }}
                className={`flex items-center justify-between border-b border-[#222222] py-4 text-sm transition-colors ${
                  isActive
                    ? "text-white"
                    : "text-[#888888] hover:text-white"
                }`}
              >
                <span>{link.name}</span>

                {isActive && (
                  <span className="size-1.5 rounded-full bg-[#4169ff]" />
                )}
              </a>
            );
          })}

          <a
            href="#contact"
            onClick={() => handleNavigation("contact")}
            className="mt-5 flex items-center justify-center gap-3 rounded-full bg-[#4169ff] px-5 py-4 text-sm font-medium text-white transition-colors hover:bg-blue-600"
          >
            Let's talk
            <ArrowUpRight size={17} />
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;