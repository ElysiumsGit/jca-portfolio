import React from 'react'
import { BriefcaseBusiness } from 'lucide-react'
import Card from "../Card";

export const ExperienceIntroCard = () => {
  return (
    <Card>
      <div className="flex h-full min-h-[280px] flex-col justify-between">

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

            <p className="text-xs md:text-sm leading-relaxed text-zinc-400">
              Understanding the brief. Connecting the layers.
              Caring about what ships—and what comes next.
            </p>
          </div>
        </div>

        <div className="mt-12 space-y-2">
          <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-blue-500">
            Profile details / editable
          </p>

          <p className="text-[10px] leading-relaxed text-zinc-500">
            Career information hasn't been supplied. Replace the fields
            alongside with verified roles, dates, and responsibilities.
          </p>
        </div>

      </div>
    </Card>
  )
}