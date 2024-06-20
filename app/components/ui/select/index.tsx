import { type ComponentProps } from "react"

type SelectProps = ComponentProps<'select'> & {
  options: string[]
}

export function Select({ className, options, ...props }: SelectProps) {
  return (
    <div 
      // eslint-disable-next-line max-len
      className={`p-2 bg-stone-200/30 border rounded-md outline-none border-stone-300 focus-within:border-amber-500 focus-within:ring-4 focus-within:ring-yellow-400/10 ${className}`}
    >
      <select
        className="flex justify-self-auto text-sm p-1 outline-none border-stone-300 text-zinc-900/40"
        {...props}
      >
        <option value="" selected disabled hidden>UF*</option>
        {options.map(option => (
          <option className="text-stone-800" key={option}>{option}</option>
        ))}
      </select>
    </div>
  )
}
