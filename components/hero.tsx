import { cn } from '@/lib/utils'

export function Hero({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div className="h-screen">
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
          'text-5xl sm:text-[8rem] uppercase p-8 md:p-16 bg-foreground/60 dark:bg-background/60 top-0 absolute font-extrabold z-5 flex h-screen text-left items-start justify-center',
          className,
        )}
      >
        {children}
      </div>
    </div>
  )
}
