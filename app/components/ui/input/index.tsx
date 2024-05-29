/* eslint-disable max-len */
import { type ComponentProps } from "react";

type InputProps = ComponentProps<'input'> & { isOptional?: boolean }

export function Input({ className, isOptional = false, ...props }: InputProps) {
  return (
    <div className={`flex justify-between w-full items-center p-3 rounded-md bg-stone-200/30 text-sm border border-stone-300 focus-within:border-amber-500 focus-within:ring-4 focus-within:ring-yellow-400/10 ${className}`}>
      <input className="bg-transparent border-0 outline-none w-full"  {...props} />
      {isOptional && <span className="text-stone-400 text-xs italic">opcional</span>}
    </div>
  )
}
