import { Minus, Plus } from '@phosphor-icons/react'
import { type ComponentProps } from 'react'
import { tv, type VariantProps } from 'tailwind-variants'

const buttonVariants = tv({
  base: [
    'flex justify-center items-center p-1 gap-1 rounded-md text-sm uppercase',
  ],
  variants: {
    variant: {
      primary: 'bg-violet-800',
      secondary: 'bg-amber-100',
      tertiary: 'bg-zinc-200'
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
})

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

type ContainerProps = ComponentProps<'div'>
type ButtonProps = ComponentProps<'button'> & VariantProps<typeof buttonVariants>
type PriceProps = VariantProps<typeof priceVariants> & { price: number}
type QuantityInputProps = { quantity: number}

export function Button({ variant, className, children, ...props }: ButtonProps) {
  return (
    <button {...props} className={buttonVariants({ variant, className })}>
      {children}
    </button>
  )
}

export function Price({ price, variant, }: PriceProps) {
  return (
    <div>
      <span className="text-min sm:text-xs px-[2px]">R$</span>
      <span className={priceVariants({ variant })}>{price.toLocaleString('pt-BR', {
        // style: 'currency',
        currency: 'BRL',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })}
      </span>
    </div>
  )
}

export function QuantityInput({ quantity }: QuantityInputProps) {
  return (
    <div className="flex flex-1 items-center justify-evenly bg-zinc-200 rounded-md text-xs py-1 px-2 gap-1 text-violet-800 sm:gap-3">
      <button >
        <Minus className="w-2.5 h-2.5 sm:w-4 sm:h-4" />
      </button>
      <span className="text-zinc-700 sm:text-base">{quantity}</span>
      <button >
        <Plus className="w-2.5 h-2.5 sm:w-4 sm:h-4" />
      </button>
    </div>
  )
}

export function Container(props: ContainerProps) {
  return (
    <div className="flex gap-2"
      {...props}
    />
  )
}