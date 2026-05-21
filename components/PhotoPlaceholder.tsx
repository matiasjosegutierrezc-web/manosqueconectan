interface PhotoPlaceholderProps {
  label:    string
  aspect?:  '4/3' | '3/4' | '1/1' | '16/9'
  className?: string
  bgClass?: string
}

const aspectMap: Record<string, string> = {
  '4/3':  'aspect-[4/3]',
  '3/4':  'aspect-[3/4]',
  '1/1':  'aspect-square',
  '16/9': 'aspect-video',
}

export default function PhotoPlaceholder({
  label,
  aspect   = '4/3',
  className = '',
  bgClass   = 'bg-blue-slate/20',
}: PhotoPlaceholderProps) {
  return (
    <div
      className={`${aspectMap[aspect]} border border-dashed border-gray-mid/50 ${bgClass} flex flex-col items-center justify-center gap-3 text-gray-mid ${className}`}
    >
      {/* Reemplazar con <Image src="..." alt="..." fill className="object-cover" /> */}
      <svg width="40" height="40" viewBox="0 0 44 44" fill="none" aria-hidden="true">
        <rect x="4" y="12" width="36" height="26" rx="3" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="22" cy="25" r="7" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="22" cy="25" r="3" fill="currentColor" opacity="0.3" />
        <path d="M15 12 L17.5 7 H26.5 L29 12" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinejoin="round" />
      </svg>
      <span className="font-inter text-[10px] font-medium tracking-[0.12em] uppercase">
        {label}
      </span>
    </div>
  )
}
