import { type ComponentProps } from 'react'
import { tv, type VariantProps } from 'tailwind-variants'

const buttonVariants = tv({
  base: [
    'flex justify-center items-center p-1 gap-1 rounded-md text-sm font-bold uppercase hover:opacity-80',
  ],
  variants: {
    variant: {
      primary: 'bg-violet-800',
      secondary: 'bg-yellow-500 text-slate-50',
      tertiary: 'bg-zinc-200 text-slate-500'
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
})

type ButtonProps = ComponentProps<'button'> & VariantProps<typeof buttonVariants>

export function Button({ variant, className, children, ...props }: ButtonProps) {
  return (
    <button {...props} className={buttonVariants({ variant, className })}>
      {children}
    </button>
  )
}
