
import { ArrowUpRight } from 'lucide-react'
import Card from '../Card'

export const ContactCard = () => {
  return (
    <Card title="Hire me / Get in touch" className="h-full w-full">
      <form className="flex flex-col gap-5">

        {/* Email */}
        <div className="space-y-2">
          <label htmlFor="email" className="text-xs text-[#999999]">
            Your email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="you@example.com"
            required
            className="w-full rounded-xl border border-[#303030] bg-[#101010] px-3.5 py-3 text-sm text-white outline-none placeholder:text-[#686868] transition-colors focus:border-[#4263ff]"
          />
        </div>

        {/* Subject */}
        <div className="space-y-2">
          <label htmlFor="subject" className="text-xs text-[#999999]">
            Subject
          </label>
          <input
            id="subject"
            name="subject"
            type="text"
            placeholder="Job opportunity"
            required
            className="w-full rounded-xl border border-[#303030] bg-[#101010] px-3.5 py-3 text-sm text-white outline-none placeholder:text-[#686868] transition-colors focus:border-[#4263ff]"
          />
        </div>

        {/* Message */}
        <div className="space-y-2">
          <label htmlFor="message" className="text-xs text-[#999999]">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            placeholder="Write your message here..."
            required
            className="w-full resize-none rounded-xl border border-[#303030] bg-[#101010] px-3.5 py-3 text-sm leading-6 text-white outline-none placeholder:text-[#686868] transition-colors focus:border-[#4263ff]"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="group flex w-fit self-end items-center gap-8 rounded-full bg-[#4263ff] px-6 py-3.5 text-sm font-medium text-white transition-all duration-300 hover:bg-[#3455ed] hover:shadow-[0_0_25px_rgba(66,99,255,0.2)]"
        >
          <span>Send message</span>

          <ArrowUpRight
            size={18}
            className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
          />
        </button>

      </form>
    </Card>
  )
}
