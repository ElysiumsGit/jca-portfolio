import React from 'react'
import Card from '../Card'

export const ExperienceCard = () => {
  const experiences = [
    {
    id: "1",    
      label: 'Most recent role',
      active: true,
      title: '[Role title]',
      date: '[Start date – End date]',
      company: '[Company or organization] · [Work arrangement]',
      description:
        '[Describe the product or team, the systems you owned, and the technologies you used. Add a verified contribution or outcome.]',
    },
    {
    id: "2",    
      label: 'Previous role / engagement',
      active: false,
      title: '[Role title]',
      date: '[Start date – End date]',
      company: '[Company or organization] · [Work arrangement]',
      description:
        '[Describe your responsibilities, the problems you helped solve, and how you collaborated. Include only confirmed achievements.]',
    },
    {
      label: 'Previous role / engagement',
      active: false,
      title: '[Role title]',
      date: '[Start date – End date]',
      company: '[Company or organization] · [Work arrangement]',
      description:
        '[Describe your responsibilities, the problems you helped solve, and how you collaborated. Include only confirmed achievements.]',
    },
  ]

  return (
    <Card>
      <div className="space-y-5">
        {experiences.map((experience, index) => (
          <React.Fragment key={`${experience.label}-${index}`}>
            <div className="grid grid-cols-[12px_1fr] gap-4">
              {/* Timeline indicator */}
              <div className="flex justify-center pt-1">
                <span
                  className={`h-1.5 w-1.5 rounded-full ${
                    experience.active
                      ? 'bg-blue-500'
                      : 'border border-zinc-500'
                  }`}
                />
              </div>

              {/* Experience content */}
              <div className="min-w-0 space-y-2">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-zinc-500">
                    {experience.label}
                  </span>

                  <span className="font-mono text-[9px] text-zinc-600">
                    {experience.date}
                  </span>
                </div>

                <h3
                  className="text-xl leading-tight tracking-tight text-zinc-100"
                >
                  {experience.title}
                </h3>

                <p className="text-xs leading-relaxed text-zinc-400">
                  {experience.company}
                </p>

                <p className="text-xs leading-[1.8] text-zinc-400">
                  {experience.description}
                </p>
              </div>
            </div>

            {index < experiences.length - 1 && (
                <div className="border-t border-zinc-800" />
            )}
          </React.Fragment>
        ))}
      </div>
    </Card>
  )
}