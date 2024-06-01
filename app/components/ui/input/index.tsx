import { type ComponentProps } from "react";
import { tv, type VariantProps } from "tailwind-variants";

const inputVariants = tv({
  base: [
    'flex justify-between w-full items-center p-3 rounded-md bg-stone-200/30 text-sm border ',
  ],
  variants: {
    variant: {
      normal: 'border-stone-300 focus-within:border-amber-500 focus-within:ring-4 focus-within:ring-yellow-400/10',
      error: 'border-red-300 border',
    },
  },
  defaultVariants: {
    variant: 'normal',
  },
})

type InputProps = ComponentProps<'input'> & VariantProps<typeof inputVariants> & {
  isOptional?: boolean
  messageError?: string
}

export function Input({ className, isOptional = false, messageError, ...props }: InputProps) {
  const variant = messageError ? "error" : "normal"

  return (
    <div className={className}>
      <div className={inputVariants({ variant })}>
        <input className="bg-transparent border-0 outline-none w-full disabled:text-zinc-900/40"  {...props} />
        {isOptional && <span className="text-stone-400 text-xs italic">Opcional</span>}
      </div>
      {messageError && <p className="text-sm text-red-400 pl-1">{messageError}</p>}
    </div>
  )
}
