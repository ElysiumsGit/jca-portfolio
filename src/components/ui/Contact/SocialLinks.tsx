
import { ArrowUpRight } from 'lucide-react'
import { FaGithub } from 'react-icons/fa'
import type { IconType } from 'react-icons'

interface SocialLinkProps {
  platform?: string
  url?: string
  profile?: string
  icon?: IconType
}

export const SocialLink = ({
  platform = 'GitHub',
  url = '#',
  profile = '[Add profile URL]',
  icon: Icon = FaGithub,
}: SocialLinkProps) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex w-full items-center justify-between rounded-2xl border border-white/10 bg-[#151515] px-6 py-4 transition-all duration-300 hover:border-white/20 hover:bg-[#1a1a1a]"
    >
      <div className="flex items-center gap-4">
        <Icon
          size={19}
          className="text-white"
        />

        <span className="text-sm font-medium text-white">
          {platform}
        </span>

        <span className="text-[10px] font-mono text-white/30 transition-colors group-hover:text-white/50">
          {profile}
        </span>
      </div>

      <ArrowUpRight
        size={19}
        className="text-white transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
      />
    </a>
  )
}
