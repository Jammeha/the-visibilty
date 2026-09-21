const ITEMS = [
  'Public Relations',
  'Strategic Communications',
  'Content Creation',
  'Digital Marketing',
  'Corporate Communications',
  'Commercials & Campaigns',
  'Brand Strategy',
  'Media Relations',
  'Crisis Communications',
  'Public Relations',
  'Strategic Communications',
  'Content Creation',
  'Digital Marketing',
  'Corporate Communications',
  'Commercials & Campaigns',
  'Brand Strategy',
  'Media Relations',
  'Crisis Communications',
]

interface Props {
  dark?: boolean
}

export default function MarqueeTicker({ dark = false }: Props) {
  return (
    <div className={`overflow-hidden border-y py-4 ${dark ? 'border-white/10 bg-[#061b4b]' : 'border-[#dce6f2] bg-[#f3f7fc]'}`}>
      <div className="marquee-track">
        {ITEMS.map((item, i) => (
          <span
            key={i}
            className={`mx-8 flex shrink-0 items-center gap-8 text-[11px] font-black uppercase tracking-[0.22em] ${dark ? 'text-blue-200/60' : 'text-[#9bb0ca]'}`}
          >
            {item}
            <span className={`size-1.5 rounded-full shrink-0 ${dark ? 'bg-[#1687ff]/50' : 'bg-[#1687ff]/30'}`} />
          </span>
        ))}
      </div>
    </div>
  )
}
