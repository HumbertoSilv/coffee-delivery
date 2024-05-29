import { type ComponentProps } from 'react'
import { tv, type VariantProps } from 'tailwind-variants'


const priceVariants = tv({
  base: [
    'font-title text-base sm:text-2xl',
  ],
  variants: {
    variant: {
      primary: 'font-black',
      small: 'text-base',
      bigger: 'text-xl',
    },
  },
  defaultVariants: {
    variant: 'primary',
  },

})

type PriceProps = ComponentProps<'button'> & VariantProps<typeof priceVariants>

export function Price({ children, variant, }: PriceProps) {
  return (
    <div>
      <span className="text-min sm:text-xs px-[2px]">R$</span>
      <span className={priceVariants({ variant })}>
        {children}
      </span>
    </div>
  )
}