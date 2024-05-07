import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  useDisclosure
} from '@chakra-ui/react'
import { ShoppingCart } from '@phosphor-icons/react'
import { useRef } from 'react'
import Coffee from './coffee'

export default function Cart() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef(null)

  return (
    <>
      <button ref={btnRef} onClick={onOpen} className="bg-amber-100 p-2 rounded-md">
        <ShoppingCart className="text-amber-600" size={18} weight="fill" />
      </button>
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader className="bg-gray-100 border-b-zinc-200 border-b-[1px] font-body">
            Cafés selecionados
          </DrawerHeader>

          <DrawerBody className="bg-gray-100 font-body">
            <Coffee />
            <Coffee />
          </DrawerBody>

          <DrawerFooter display="block" className="bg-gray-100 font-body">
            <div className="flex flex-col gap-1 py-4 *:flex *:items-center *:justify-between">
              <div>
                <span className="text-sm">Total de itens</span>
                <span className="text-base">R$ 29,70</span>
              </div>

              <div>
                <span className="text-sm">Entrega</span>
                <span className="text-base">R$ 3,50</span>
              </div>

              <div className="text-lg font-bold">
                <span>Total</span>
                <span>R$ 33,20</span>
              </div>
            </div>

            <button className="bg-amber-500 text-slate-50 text-sm font-bold rounded-md py-2 w-full uppercase">
              confirmar pedido
            </button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}