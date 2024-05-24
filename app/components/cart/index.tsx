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
import { useNavigate } from '@remix-run/react'
import { useRef } from 'react'
import { useCart } from '../../hooks/cart'
import { Product } from '../product'
import { Total } from '../total'
import { Button } from '../ui/button'

export default function Cart() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef(null)
  const { cart, totalProductsPrice, hasAnyItem } = useCart();
  const navigate = useNavigate();

  const productsPrice = totalProductsPrice()
  const delivery = productsPrice * 0.1 // random value

  const handleRedirect = () => {
    navigate("/checkout")
    onClose()
  }

  return (
    <>
      <Button ref={btnRef} onClick={onOpen} variant="secondary" className="relative px-2">
        <ShoppingCart className="text-amber-600" size={28} weight="fill" />
        {hasAnyItem() && (<span className="absolute top-0 right-0 text-xs font-bold text-slate-50 bg-amber-600 p-1 rounded-full w-6 translate-x-1/2 translate-y-[-50%]">
          {cart.length}
        </span>)}
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
            {cart.map((item) => {
              return (
                <Product key={item.product.id} {...item} />
              )
            })}
          </DrawerBody>

          <DrawerFooter display="block" className="bg-gray-100 font-body">
            <Total
              productsPrice={productsPrice}
              delivery={delivery}
              total={productsPrice + delivery}
            />

            <Button
              disabled={!hasAnyItem()}
              onClick={handleRedirect}
              className="bg-yellow-500 text-slate-50 font-bold py-3 mb-2 w-full"
            >
              confirmar pedido
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}