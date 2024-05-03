import { MapPin, ShoppingCart } from '@phosphor-icons/react'
import Logo from "./logo"

export default function Header() {
  return (
    <header className="flex justify-between p-4">
      <Logo />

      <aside className="flex justify-between gap-2">
        <div className="flex bg-violet-100 rounded-md p-2 gap-1 text-violet-800 text-xs items-center">
          <MapPin size={18} weight="fill" />
          Porto Alegre, RS
        </div>
        <div className="bg-amber-100 p-2 rounded-md">
          <ShoppingCart className="text-amber-600" size={18} weight="fill" />
        </div>
      </aside>
    </header>
  )
}
