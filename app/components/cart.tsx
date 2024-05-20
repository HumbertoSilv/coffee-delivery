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
import { Total } from './total'
import { Button } from './ui/control'

export default function Cart() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef(null)

  return (
    <>
      <Button ref={btnRef} onClick={onOpen} variant="secondary" className="p-3">
        <ShoppingCart className="text-amber-600" size={22} weight="fill" />
      </Button>

      <Drawer
        isOpen={isOpen}
        placement='right'
        size="sm"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader fontWeight="bold" className="bg-gray-100 border-b-zinc-200 border font-title">
            Cafés selecionados
          </DrawerHeader>

          <DrawerBody className="bg-gray-100 font-body">
            <Coffee />
            <Coffee />
            <Coffee />
          </DrawerBody>

          <DrawerFooter display="block" className="bg-gray-100 font-body">
            <Total />

            <Button className="bg-yellow-500 text-slate-50 font-bold py-3 mb-2 w-full">
              confirmar pedido
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}