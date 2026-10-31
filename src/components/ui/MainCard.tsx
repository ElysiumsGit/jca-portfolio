
import type { LucideIcon } from 'lucide-react'

interface CardData {
  title: string
  description: string
  icon: LucideIcon
  technologies: string[]
  focus: string
}

interface MainCardProps {
  cards: CardData[]
}

const MainCard = ({ cards }: MainCardProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
      {cards.map((card, index) => {
        const Icon = card.icon

        return (
          <div
            key={index}
            className="bg-[#151515] border border-[#303030] rounded-[28px] p-8 flex flex-col min-h-[360px] transition-all duration-300 hover:border-[#555] hover:-translate-y-1"
          >
            <Icon
              size={25}
              strokeWidth={1.4}
              className="text-[#a1a1aa] mb-7"
            />

            <h2 className="text-white text-[27px] font-normal tracking-tight mb-3">
              {card.title}
            </h2>

            <p className="text-[#a1a1aa] text-[14px] leading-6 mb-6">
              {card.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              {card.technologies.map((tech) => (
                <span
                  key={tech}
                  className="text-[#a1a1aa] text-[11px] font-mono px-3 py-1.5 rounded-full border border-[#303030] whitespace-nowrap"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="border-t border-[#303030] mt-auto pt-7">
              <p className="text-[#71717a] text-[10px] font-mono tracking-wide">
                FOCUS / {card.focus}
              </p>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default MainCard
