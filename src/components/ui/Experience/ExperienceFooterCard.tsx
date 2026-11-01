
import React from 'react'
import { Plus } from 'lucide-react'
import Card from '../Card'

const experiences = [
  'Readable code',
  'Accessible by default',
  'Systems thinking',
  'Continuous learning',
  'Ownership and accountability',
]

export const ExperienceFooterCard = () => {
  return (
    <Card className="w-full bg-[#111111] border border-[#292929] mt-5">
      <div className="flex items-center justify-between gap-6">

        {/* Experience items */}
        <div className="flex items-center justify-between flex-1 gap-6">
          {experiences.map((item) => (
            <div
              key={item}
              className="flex items-center gap-2 whitespace-nowrap"
            >
              <Plus
                size={12}
                strokeWidth={1.5}
                className="text-blue-500"
              />

              <span className="text-zinc-400">
                {item}
              </span>
            </div>
          ))}
        </div>

      </div>
    </Card>
  )
}
