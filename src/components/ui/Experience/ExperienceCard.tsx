import React from 'react'
import Card from '../Card'

export const ExperienceCard = () => {
  const experiences = [
    {
    id: "1",    
      label: 'Most recent role',
      active: true,
      title: 'Full-Stack Developer',
      date: 'November 2025 - May 2026',
      company: 'Techero Solution BHD SDN · Remote',
      description:
        'As a Full-Stack Developer at Techero Solution BHD SDN, I was responsible for designing and implementing web applications using modern technologies. I collaborated with cross-functional teams to deliver high-quality software solutions, focusing on both front-end and back-end development. My work involved optimizing application performance, ensuring scalability, and maintaining code quality through best practices and code reviews.',
    },
    {
    id: "2",    
      label: 'Previous role / engagement',
      active: false,
      title: 'Software Engineer',
      date: 'January 2024 - October 2025',
      company: 'Praetorian Intelligence Incorporation · On-site',
      description:
        'As a Software Engineer at Praetorian Intelligence Incorporation, I was responsible for developing and maintaining software applications. I worked closely with the development team to identify and resolve issues, ensuring the delivery of high-quality solutions. My responsibilities included writing clean, maintainable code, participating in code reviews, and contributing to the overall improvement of our development processes.',
    },
    {
      label: 'Previous role / engagement',
      active: false,
      title: 'Freelance Developer',
      date: 'June 2022 - Present',
      company: 'Freelance · Remote',
      description:
        'As a Freelance Developer, I have worked on various projects for different clients, delivering custom software solutions. I have collaborated with clients to understand their requirements and translate them into functional applications. My work has involved both front-end and back-end development, ensuring the delivery of high-quality, maintainable code.',
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