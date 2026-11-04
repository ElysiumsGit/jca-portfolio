import Card from "@/components/ui/Card";
import { ArrowUpRight, Download } from "lucide-react";

const HeroCard = () => {
  return (
    <Card
      title="Full-stack web developer"
      trailing={<span className="text-xl">{"</>"}</span>}
      className="h-full w-full"
    >
      <div className="flex flex-1 flex-col justify-center">

        <h1 className="text-4xl font-medium md:text-8xl">
          John Carlo
          <br />
          Abanes
        </h1>

        <p className="mt-8 max-w-xl text-base leading-7 text-zinc-400">
          I build modern web applications, APIs, and digital experiences
          that are fast, scalable, and user-focused.
        </p>

        <div className="mt-14 flex flex-wrap items-center justify-between gap-5">

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-3">

            {/* Explore Projects */}
            <a
              href="#projects"
              className="inline-flex items-center gap-6 rounded-full bg-[#4169ff] px-6 py-4 text-sm font-medium text-white transition hover:bg-blue-600"
            >
              Explore my work
              <ArrowUpRight size={17} />
            </a>

            {/* Download Resume */}
            <a
              href="/file/John-Carlo-Abanes-Resume.pdf"
              download="John-Carlo-Abanes-Resume.pdf"
              className="inline-flex items-center gap-3 rounded-full border border-[#333] bg-[#1b1b1b] px-6 py-4 text-sm font-medium text-white transition duration-300 hover:border-white hover:bg-white hover:text-black"
            >
              <Download size={16} />
              Download Resume
            </a>

          </div>

          <p className="hidden text-[10px] uppercase leading-relaxed tracking-[1.5px] text-zinc-500 sm:block">
            Thoughtful by design.
            <br />
            Reliable by default.
          </p>

        </div>
      </div>
    </Card>
  );
};

export default HeroCard;