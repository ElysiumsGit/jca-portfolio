
import React from 'react'
import { ArrowUpRight } from 'lucide-react'

interface BackendProjectCardProps {
  title: string
  description: string
  category?: string
  technologies: string[]
  href?: string
  preview?: {
    brand?: string
    version?: string
    method?: string
    endpoint?: string
    status?: string
    response: string
    time?: string
    size?: string
    label?: string
  }
}

export const BackendProjectCard = ({
  title,
  description,
  category = 'BACKEND / DEVELOPER TOOLING',
  technologies,
  href = '#',
  preview = {
    brand: 'relay_',
    version: 'SANDBOX / v1.0',
    method: 'GET',
    endpoint: '/v1/projects?status=active',
    status: '200 OK',
    response: `{
  "data": [
    {
      "name": "Design system",
      "status": "active"
    }
  ]
}`,
    time: '42 ms',
    size: '1.28 KB',
    label: 'DEMO RESPONSE',
  },
}: BackendProjectCardProps) => {
  return (
    <div className="group grid grid-cols-1 gap-8 rounded-[24px] border border-white/[0.08] bg-[#151515] p-5 transition-all duration-300 hover:border-white/[0.15] md:grid-cols-[0.95fr_1.2fr] md:items-center lg:p-5">

      {/* API Preview */}
      <div className="relative min-h-[182px] overflow-hidden rounded-[9px] border border-white/[0.09] bg-[#101010] p-4">
        <div className="mb-3 flex items-center justify-between">
          <span className="font-mono text-[10px] font-semibold text-gray-200">
            {preview.brand ?? 'relay_'}
          </span>

          <span className="font-mono text-[7px] text-gray-600">
            {preview.version ?? 'SANDBOX / v1.0'}
          </span>
        </div>

        {/* Request */}
        <div className="flex h-[26px] items-center justify-between rounded-md bg-[#1c1c1c] px-2.5">
          <div className="flex items-center gap-2 font-mono text-[8px]">
            <span className="text-blue-500">{preview.method ?? 'GET'}</span>
            <span className="text-gray-500">{preview.endpoint ?? '/api'}</span>
          </div>

          <span className="font-mono text-[8px] text-gray-300">
            Send ↗
          </span>
        </div>

        {/* Response */}
        <div className="mt-4 flex justify-between">
          <span className="font-mono text-[7px] text-gray-500">
            RESPONSE BODY
          </span>

          <span className="font-mono text-[8px] text-blue-500">
            {preview.status ?? '200 OK'}
          </span>
        </div>

        <div className="mt-2 flex justify-between gap-4">
          <pre className="overflow-hidden font-mono text-[8px] leading-[13px] text-gray-400">
            {preview.response}
          </pre>

          <div className="flex shrink-0 flex-col gap-2 pr-1 font-mono text-[7px] text-gray-600">
            <span>Time&nbsp; {preview.time ?? '42 ms'}</span>
            <span>Size&nbsp; {preview.size ?? '1.28 KB'}</span>
            <span className="mt-1">{preview.label ?? 'DEMO RESPONSE'}</span>
          </div>
        </div>
      </div>

      {/* Project Information */}
      <div className="flex flex-col justify-center py-1 md:py-2">
        <div className="mb-4 flex items-center justify-between">
          <span className="font-mono text-[9px] tracking-[0.2em] text-gray-500">
            {category}
          </span>

          <a
            href={href}
            aria-label={`View ${title}`}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/[0.08] text-gray-300 transition-all duration-300 group-hover:border-white/30 group-hover:bg-white/[0.05] group-hover:text-white"
          >
            <ArrowUpRight
              size={17}
              strokeWidth={1.5}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
        </div>

        <h3 className="text-[21px] font-medium tracking-[-0.04em] text-neutral-100 sm:text-[23px]">
          {title}
        </h3>

        <p className="mt-3 max-w-[490px] text-[12px] leading-[1.8] text-gray-400">
          {description}
        </p>

        {/* Technologies */}
        <div className="mt-4 flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-white/[0.09] px-3 py-1 font-mono text-[9px] text-gray-400 transition-colors duration-200 hover:border-white/20 hover:text-white"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
