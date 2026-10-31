
import { ArrowUpRight } from "lucide-react";

import Card from "@/components/ui/Card";

const ContactCard = () => {
  return (
    <Card className="h-full w-full">
      <div className="flex h-full min-h-[200px] flex-col justify-between">

        {/* Eyebrow Label */}
        <div className="flex items-center gap-2">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-400">
            Let's make it happen
          </span>
        </div>

        {/* Main Content */}
        <div className="flex items-center justify-between gap-3">
          <h2 className="text-3xl font-medium leading-[1.15] tracking-tight text-zinc-100 md:text-4xl">
            Have a good
            <br />
            problem<span className="text-blue-500">?</span>
          </h2>

          {/* Contact Button */}
          <a
            href="#contact"
            aria-label="Get in touch"
            className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white transition-all duration-300 hover:scale-105 hover:bg-blue-500"
          >
            <ArrowUpRight size={22} strokeWidth={1.8} />
          </a>
        </div>
      </div>
    </Card>
  );
};

export default ContactCard;
