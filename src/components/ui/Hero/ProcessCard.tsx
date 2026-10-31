
import React from "react";
import {
  PanelsTopLeft,
  Workflow,
  Database,
  Layers3,
} from "lucide-react";

import Card from "../Card";

const ProcessCard = () => {
  return (
    <Card
        title="Design → Develop → Deliver"
        trailing={<Layers3 size={20} strokeWidth={1.5} />}
        className="relative h-full min-h-[560px] w-full !max-w-none overflow-hidden !rounded-[28px] px-9 py-9"
    >
      {/* Architecture Diagram */}
      <div className="relative mx-auto mt-2 h-[310px] w-full">

        {/* Connector Lines */}
        <svg
          className="absolute inset-0 z-0 h-full w-full"
          viewBox="0 0 350 310"
          preserveAspectRatio="none"
          fill="none"
        >
          {/* Interface to Application */}
          <path
            d="M175 65 V97"
            stroke="#315BFF"
            strokeWidth="1.2"
          />

          {/* Application to Database */}
          <path
            d="M175 167 V200"
            stroke="#315BFF"
            strokeWidth="1.2"
          />

          {/* Right connector */}
          <path
            d="M283 43 H325 V164 H283"
            stroke="#315BFF"
            strokeWidth="1.2"
          />

          {/* Left connector */}
          <path
            d="M67 164 H12 V285 H62"
            stroke="#315BFF"
            strokeWidth="1.2"
          />
        </svg>

        {/* Interface */}
        <div className="absolute left-1/2 top-0 z-10 flex h-[65px] w-[216px] -translate-x-1/2 items-center gap-4 rounded-xl border border-[#303030] bg-[#1d1d1d] px-4">
          <PanelsTopLeft
            size={23}
            strokeWidth={1.5}
            className="shrink-0 text-zinc-200"
          />

          <div className="min-w-0">
            <p className="text-[14px] font-medium text-zinc-100">
              Interface
            </p>
            <p className="mt-1 text-[10px] tracking-wide text-zinc-500">
              React · Next.js
            </p>
          </div>

          <span className="ml-auto h-1.5 w-1.5 rounded-full bg-[#4169ff]" />
        </div>

        {/* Application & API */}
        <div className="absolute left-1/2 top-[97px] z-10 flex h-[70px] w-[248px] -translate-x-1/2 items-center gap-4 rounded-xl border border-[#4169ff] bg-[#172448] px-4">
          <Workflow
            size={24}
            strokeWidth={1.5}
            className="shrink-0 text-zinc-100"
          />

          <div>
            <p className="text-[14px] font-medium text-zinc-100">
              Application & API
            </p>
            <p className="mt-1 text-[10px] tracking-wide text-zinc-400">
              TypeScript · Node.js
            </p>
          </div>
        </div>

        {/* Data & Infrastructure */}
        <div className="absolute left-1/2 top-[200px] z-10 flex h-[65px] w-[216px] -translate-x-1/2 items-center gap-4 rounded-xl border border-[#303030] bg-[#1d1d1d] px-4">
          <Database
            size={23}
            strokeWidth={1.5}
            className="shrink-0 text-zinc-200"
          />

          <div>
            <p className="whitespace-nowrap text-[14px] font-medium text-zinc-100">
              Data & Infrastructure
            </p>
            <p className="mt-1 text-[10px] tracking-wide text-zinc-500">
              PostgreSQL · Docker
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Content */}
      <div className="mt-10">
        <h2 className="text-[30px] font-normal leading-tight tracking-[-1.2px] text-zinc-100">
          The full picture.
        </h2>

        <p className="mt-1 text-[13px] text-zinc-400">
          Every layer. One cohesive experience.
        </p>
      </div>
    </Card>
  );
};

export default ProcessCard;
