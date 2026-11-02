
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  title: string;
  category: string;
  description: string;
  image: string;
  technologies: string[];
  scope?: string;
  href: string;
}

export default function ProjectCard({
  title,
  category,
  description,
  image,
  technologies,
  scope,
  href,
}: ProjectCardProps) {
  return (
    <article className="group flex h-full w-full flex-col overflow-hidden rounded-[22px] border border-[#292929] bg-[#141414] transition-colors duration-300 hover:border-[#414141]">

      {/* Project Screenshot */}
      <div className="shrink-0 bg-[#1c1c1c] p-4">
        <div className="relative h-[220px] w-full overflow-hidden rounded-xl border border-[#303030] lg:h-[250px]">
          <Image
            src={image}
            alt={`${title} project preview`}
            fill
            priority
            className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
            sizes="(max-width: 768px) 100vw, 70vw"
          />
        </div>
      </div>

      {/* Project Information */}
      <div className="flex flex-1 flex-col p-6 sm:p-7">

        <p className="font-mono text-[9px] tracking-[2px] text-[#858585]">
          {category}
        </p>

        {/* Title and Link */}
        <div className="mt-4 flex items-center justify-between gap-4">
          <h2 className="text-[25px] font-medium tracking-[-1.2px] text-[#f1f1f1] sm:text-[26px]">
            {title}
          </h2>

          <Link
            href={href}
            aria-label={`View ${title} project`}
            className="flex size-9 shrink-0 items-center justify-center rounded-full border border-[#303030] text-white transition-all duration-300 hover:border-white hover:bg-white hover:text-black"
          >
            <ArrowUpRight size={17} />
          </Link>
        </div>

        {/* Description */}
        <p className="mt-4 max-w-[470px] text-[11px] leading-[1.8] text-[#999999]">
          {description}
        </p>

        {/* Technologies */}
        <div className="mt-4 flex flex-wrap gap-1.5">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-[#303030] px-2.5 py-1 text-[9px] text-[#858585] transition-colors hover:border-[#555] hover:text-white"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Scope */}
        {scope && (
          <p className="mt-auto pt-5 font-mono text-[7px] tracking-wide text-[#656565]">
            SCOPE: {scope}
          </p>
        )}
      </div>
    </article>
  );
}
