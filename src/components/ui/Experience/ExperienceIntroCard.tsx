import {
  BriefcaseBusiness,
  ScanSearch,
  Code2,
  Rocket,
} from "lucide-react";

import Card from "../Card";

const workflow = [
  {
    number: "01",
    title: "Understand",
    description: "Break down requirements and goals.",
    icon: ScanSearch,
  },
  {
    number: "02",
    title: "Build",
    description: "Design, develop, and connect systems.",
    icon: Code2,
  },
  {
    number: "03",
    title: "Deliver",
    description: "Test, refine, and ship with confidence.",
    icon: Rocket,
  },
];

export const ExperienceIntroCard = () => {
  return (
    <Card>
      <div className="flex h-full min-h-[560px] flex-col justify-between">

        {/* Intro */}
        <div className="space-y-7">
          <BriefcaseBusiness
            size={24}
            strokeWidth={1}
            className="text-zinc-400"
          />

          <div className="space-y-4">
            <h3 className="text-2xl leading-tight tracking-tight text-zinc-100">
              Good work starts
              <br />
              with ownership.
            </h3>

            <p className="text-xs leading-relaxed text-zinc-400 md:text-sm">
              Understanding the brief. Connecting the layers.
              Caring about what ships—and what comes next.
            </p>
          </div>
        </div>

        {/* Workflow */}
        <div className="mt-16 space-y-5">

          <div className="flex items-center justify-between border-b border-[#292929] pb-3">
            <span className="font-mono text-[9px] tracking-[2px] text-zinc-500">
              MY APPROACH
            </span>

            <span className="font-mono text-[9px] text-zinc-600">
              01 — 03
            </span>
          </div>

          <div className="space-y-5">
            {workflow.map((item, index) => {
              const Icon = item.icon;

              return (
                <div key={item.number}>
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-[10px] text-zinc-600">
                      {item.number}
                    </span>

                    <div className="flex-1 space-y-1">
                      <h4 className="text-sm text-zinc-200">
                        {item.title}
                      </h4>

                      <p className="text-[10px] leading-relaxed text-zinc-500">
                        {item.description}
                      </p>
                    </div>

                    <Icon
                      size={17}
                      strokeWidth={1.3}
                      className="text-zinc-500"
                    />
                  </div>

                  {index !== workflow.length - 1 && (
                    <div className="mt-5 border-b border-[#292929]" />
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </Card>
  );
};