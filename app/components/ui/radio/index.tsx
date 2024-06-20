import type { InputHTMLAttributes, LegacyRef } from 'react';
import { forwardRef } from 'react';


type Props = InputHTMLAttributes<HTMLInputElement> & {
  isSelected: boolean
}

export const Radio = forwardRef(function Radio(
  { children, isSelected, ...rest }: Props,
  ref: LegacyRef<HTMLInputElement>,
) {
  return (
    <label
      data-state={isSelected}
      // eslint-disable-next-line max-len
      className="transition border flex justify-center items-center p-1 gap-1 rounded-md text-sm *:font-medium uppercase bg-zinc-200 text-slate-500 hover:bg-zinc-300 data-[state=true]:bg-purple-100 data-[state=true]:border-purple-700"
    >
      <input ref={ref} {...rest} hidden type="radio" />
      {children}
    </label>
  )
})
