
"use client";

import React, { useEffect, useState } from "react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");

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

  return (
    <header className="sticky top-0 z-50 w-full bg-[#0b0b0b]">
      <div className="mx-auto flex h-[100px] max-w-400 items-center justify-between px-6 md:px-[58px]">

        {/* Logo */}
        <a
          href="#home"
          onClick={() => setActiveSection("home")}
          className="text-[30px] font-bold tracking-[-2px] text-white"
        >
          JC<span className="text-[#4169ff]">.</span>
        </a>

        {/* Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);

            return (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setActiveSection(link.href.substring(1))}
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

        {/* CTA */}
        <a
          href="#contact"
          onClick={() => setActiveSection("contact")}
          className="flex items-center gap-5 rounded-full border border-[#292929] bg-[#1b1b1b] px-[22px] py-[14px] text-[13px] font-medium text-white transition-all duration-300 hover:border-[#4169ff] hover:bg-[#4169ff]"
        >
          Let's talk
          <span className="text-lg leading-none">↗</span>
        </a>

      </div>
    </header>
  );
};

export default Navbar;
