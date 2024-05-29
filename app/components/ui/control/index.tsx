import { Minus, Plus } from '@phosphor-icons/react'
import { type ComponentProps } from 'react'

interface QuantityInputProps {
  quantity: number
  increaseItem: () => void
  decreaseItem: () => void
}

export function QuantityInput({ quantity, increaseItem, decreaseItem }: QuantityInputProps) {
  return (
    <div className="flex flex-1 items-center justify-evenly bg-zinc-200 rounded-md text-xs py-1 px-2 gap-1 text-violet-800 sm:gap-3">
      <button onClick={decreaseItem} >
        <Minus className="w-2.5 h-2.5 sm:w-4 sm:h-4" />
      </button>
      <span className="text-zinc-700 sm:text-base">{quantity}</span>
      <button onClick={increaseItem} >
        <Plus className="w-2.5 h-2.5 sm:w-4 sm:h-4" />
      </button>
    </div>
  )
}

export function Container(props: ComponentProps<'div'>) {
  return (
    <div className="flex gap-2"
      {...props}
    />
  )
}