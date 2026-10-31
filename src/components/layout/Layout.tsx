
import { ReactNode } from "react";

interface LayoutProps {
  number: string;
  label: string;
  title: string;
  subtitle: string;
  children?: ReactNode;
}

export default function Layout({
  number,
  label,
  title,
  subtitle,
  children,
}: LayoutProps) {
  return (
    <section className="w-full">
      {/* Section Label */}
      <div className="flex items-center gap-3 mb-7">
        <span className="text-blue-500 text-[11px] font-mono">
          {number}
        </span>

        <span className="text-neutral-400 text-[10px] tracking-[0.2em] uppercase">
          / {label}
        </span>
      </div>

      {/* Title & Subtitle */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-end mb-9">
        <div className="md:col-span-8">
          <h2 className="text-4xl md:text-5xl lg:text-[54px] leading-[1.08] tracking-[-0.045em] text-neutral-100">
            {title}
          </h2>
        </div>

        <div className="md:col-span-4 md:pb-1">
          <p className="text-sm leading-relaxed text-neutral-400 max-w-sm">
            {subtitle}
          </p>
        </div>
      </div>

      {/* Section Content */}
      {children && (
        <div>
          {children}
        </div>
      )}
    </section>
  );
}
