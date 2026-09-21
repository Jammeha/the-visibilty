'use client'

import { useState } from 'react'
import { Send, Check } from 'lucide-react'
import { services } from '@/lib/data/services'
import MagneticButton from '@/components/shared/MagneticButton'

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <div className="relative">
      <div className="absolute -inset-4 z-0 rounded-[2rem] bg-gradient-to-br from-blue-100/50 to-transparent blur-2xl" />
      <form
        onSubmit={(e) => { e.preventDefault(); setSubmitted(true) }}
        className="relative z-10 flex flex-col gap-6 rounded-3xl bg-white p-8 text-[#071b49] shadow-2xl shadow-blue-950/10 md:p-10"
      >
        <div className="grid gap-6 sm:grid-cols-2">
          <label className="field">
            Name
            <input required name="name" placeholder="Your name" />
          </label>
          <label className="field">
            Organization
            <input name="organization" placeholder="Organization" />
          </label>
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          <label className="field">
            Email
            <input required type="email" name="email" placeholder="you@organization.com" />
          </label>
          <label className="field">
            Phone
            <input name="phone" placeholder="+220" />
          </label>
        </div>
        <label className="field">
          Service needed
          <select name="service" defaultValue="">
            <option value="" disabled>Select a service</option>
            {services.map(s => <option key={s.title} value={s.title}>{s.title}</option>)}
            <option value="Other">Other</option>
          </select>
        </label>
        <label className="field">
          Message
          <textarea required name="message" placeholder="Tell us what you are working on..." rows={4} />
        </label>
        
        <MagneticButton strength={0.1} className="w-full sm:w-auto mt-2">
          <button
            type="submit"
            className="w-full rounded-full bg-[#071b49] px-8 py-5 text-xs font-black uppercase tracking-[0.15em] text-white transition-all hover:bg-[#1687ff] hover:shadow-[0_0_30px_rgba(22,135,255,.3)]"
          >
            {submitted ? (
              <span className="flex items-center justify-center gap-2">
                <Check className="size-4" /> Message received
              </span>
            ) : (
              <span className="flex items-center justify-center gap-2">
                Send your message <Send className="size-4" />
              </span>
            )}
          </button>
        </MagneticButton>
        <p className="mt-2 text-center text-[10px] text-[#9bb0ca] font-medium tracking-wide">
          We'll get back to you using the details you provide.
        </p>
      </form>
    </div>
  )
}
