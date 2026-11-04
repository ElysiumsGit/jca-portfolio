import { ArrowUpRight } from 'lucide-react'
import Card from '../Card'

export const BuildCard = () => {
  return (
    <Card title="Great work starts with a hello"   className="h-full w-full">
      <div className="flex flex-col justify-between md:min-h-135">
        <div>
          <h2 className="text-4xl sm:text-7xl font-medium leading-[0.99] tracking-[-0.065em]">
            Let’s build
            <br />
            something
            <br />
            that matters<span className="text-[#4263ff]">.</span>
          </h2>

          <p className="mt-8 max-w-[480px] text-base leading-7 text-white/55">
            A new product, a better experience, or a complex technical
            challenge. Let’s turn your next idea into something useful.
          </p>
        </div>

        <a
          href="mailto:abierajc0707@gmail.com"
          className="group flex items-center justify-between border-t border-white/10 pt-5"
        >
          <div>
            <span className="mb-2 block text-[10px] uppercase tracking-[0.18em] text-white/45">
              Prefer email?
            </span>
            <span className="text-2xl tracking-tight">
              abierajc0707@gmail.com
            </span>
          </div>

          <ArrowUpRight
            className="text-[#4263ff] transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
            size={23}
          />
        </a>
      </div>
    </Card>
  )
}