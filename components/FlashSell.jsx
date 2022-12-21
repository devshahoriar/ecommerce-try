import { useEffect, useState } from 'react'
import Countdown from 'react-countdown'
import { useGetProdutsWithOfferPriceQuery } from '../redux/api/homeApi'
import ProductRow from './ProductRow'
const FlashSell = () => {
  const { data, isLoading } = useGetProdutsWithOfferPriceQuery()
  const products = data?.data
  const [t, setTime] = useState()
  useEffect(() => {
    var date = new Date(2023, 11, 17)
    var seconds = date.getTime() / 1000
    setTime(seconds)
  }, [])
  return (
    <div className="container px-4 md:px-0 mt-10">
      <div>
        <p className="text-4xl font-bold">FlshSale</p>
        <div className="mt-3 border-main border-b px-1 pt-2 pb-4 md:px-3 bg-zinc-100 dark:bg-zinc-800">
          <div className="flex justify-between">
            <p className="hidden md:block">On Sale Now</p>
            <div className="flex text-sm items-center">
              <p className="mr-2">Ending in </p>
              <Countdown date={Date.now() + 20 * 24 * 60 * 60 * 1000} />
            </div>
            <a
              href=""
              className="text-sm border-b hover:border-main border-[#ddd0] md:text-base"
            >
              See More
            </a>
          </div>
        </div>
        {isLoading ? <h1>Loading...</h1> : <ProductRow products={products} />}
      </div>
    </div>
  )
}

export default FlashSell
