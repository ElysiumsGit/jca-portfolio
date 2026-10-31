
import React from "react";
import Card from "../Card";
import {
  Scan,
  Component,
  GitBranch,
} from "lucide-react";

const approaches = [
  {
    icon: Scan,
    title: "Start with clarity",
    description:
      "Understand the people, the problem, and the constraints.",
  },
  {
    icon: Component,
    title: "Build with intention",
    description:
      "Small, reusable pieces. Clear boundaries. Less friction.",
  },
  {
    icon: GitBranch,
    title: "Refine the details",
    description:
      "Test, simplify, and make the next iteration easier.",
  },
];

const ApproachCard = () => {
  return (
    <Card className="h-full">
      <div className="space-y-6">
        <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-400 font-mono">
          How I approach the work
        </p>

        <div className="space-y-6">
          {approaches.map((item, index) => {
            const Icon = item.icon;

            return (
              <div key={index} className="flex items-start gap-4">
                <Icon
                  size={20}
                  strokeWidth={1.6}
                  className="mt-0.5 shrink-0 text-zinc-400"
                />

                <div className="space-y-1">
                  <h3 className="text-base font-medium text-zinc-100">
                    {item.title}
                  </h3>

                  <p className="text-sm leading-relaxed text-zinc-400">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Card>
  );
};

export default ApproachCard;
