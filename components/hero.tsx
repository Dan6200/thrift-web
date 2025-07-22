import { cn } from '@/lib/utils'

export function Hero({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div className="relative h-screen">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
        src="/laptop-unboxing-hd.mp4"
      ></video>
      <div
        className={cn(
          'text-5xl sm:text-[8rem] uppercase p-16 bg-muted/40 font-extrabold relative z-10 flex h-full text-left items-center justify-center',
          className,
        )}
      >
        {children}
      </div>
    </div>
  )
}
