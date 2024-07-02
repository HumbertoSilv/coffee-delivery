import { CaretLeft, CaretRight } from "@phosphor-icons/react"
import { useKeenSlider } from "keen-slider/react"
import { useEffect, useState } from "react"
import { type Product } from "../../hooks/cart"
import Card from "../card"
import { ListSkeleton } from "../skeleton"

export default function Carousel({ products }: { products: Product[] }) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [loading, setLoading] = useState(false)
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slides: {
      perView: "auto",
      spacing: 15,
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    }
  })

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 1000);

  }, [products])

  if (loading) return (
    <div className="overflow-hidden flex py-6 max-w-[1180px] m-auto gap-5">
      <ListSkeleton />
    </div>
  )

  return (
    <div className="relative">
      <div ref={sliderRef} className="keen-slider overflow-hidden select-none flex py-6 max-w-[1180px] m-auto">
        {products.map(product => {
          return (
            <Card key={product.title} {...product} />
          )
        })}
        {instanceRef.current && (
          <>
            <button
              className="hover:scale-105 shadow-base py-3 absolute top-[45%] left-[-5px]"
              onClick={() => instanceRef.current?.prev()
              }
              hidden={currentSlide === 0}
            >
              <CaretLeft weight="bold" size={30} color="#71717a" />
            </button>

            <button
              className="hover:scale-105 shadow-base py-3 absolute top-[45%] right-[-5px] left-auto"
              onClick={() => instanceRef.current?.next()
              }
              hidden={
                currentSlide ===
                instanceRef.current.track.details.slides.length - 1
              }
            >
              <CaretRight weight="bold" size={30} color="#71717a" />
            </button>
          </>
        )}
      </div>
    </div>
  )
}
