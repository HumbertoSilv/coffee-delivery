import { MapPin } from '@phosphor-icons/react'
import Cart from './cart'
import Logo from "./logo"



export default function Header() {
  return (
    <header className="flex justify-between">
      <Logo />

      <aside className="flex justify-between gap-2">
        <div className="flex bg-violet-100 rounded-md p-2 gap-1 text-violet-800 text-sm items-center">
          <MapPin size={22} weight="fill" />
          Porto Alegre, RS
        </div>
        <Cart />
      </aside>
    </header>
  )
}
