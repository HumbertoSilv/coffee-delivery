import { type ComponentProps } from "react";

export function Skeleton({ className, ...props }: ComponentProps<'div'>) {
  return (
    <div
      className={`bg-zinc-300 animate-pulse rounded ${className}`}
      {...props}
    />
  )
}

export function ListSkeleton() {
  return Array.from({length: 4}).map((_, i) => {
    return (
      <div key={i} className="bg-gray-100 rounded-tl-md rounded-br-md rounded-tr-3xl rounded-bl-3xl flex flex-col mt-6 px-4 max-w-64 sm:min-w-64">
        <Skeleton className="mt-[-25px] self-center rounded-full w-[100px] h-[100px] sm:w-[120px] sm:h-[120px]" />

        <div className="grid grid-cols-2 gap-4 py-3 mt-3">
          <Skeleton className="py-1 h-3 col-span-1" />
          <Skeleton className="py-1 h-3 col-span-1" />
        </div>
        <div className="flex-1 space-y-6 py-4">
          <Skeleton className="h-3" />
          <Skeleton className="h-3" />

          <div className="space-y-3">
            <div className="grid grid-cols-3 gap-4 py-3">
              <Skeleton className="h-3 col-span-1" />
              <Skeleton className="h-3 col-span-2" />
            </div>
          </div>
        </div>
      </div>
    )
  })
}