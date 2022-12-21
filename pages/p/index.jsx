/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/rules-of-hooks */
import { CloseSquareOutlined } from '@ant-design/icons'
import { useEffect, useState } from 'react'
import Rating from 'react-rating'
import Header from '../../components/Header'
import ProductRow from '../../components/ProductRow'

const index = () => {
  const [showFilter, setShowFilter] = useState(false)
  const [minPrice, setMinPrice] = useState(0)
  const [maxPrice, setMaxPrice] = useState(0)
  const [rating, setRrating] = useState(0)

  useEffect(() => {
    console.log(rating)
  }, [rating])

  return (
    <>
      <Header />
      <div className="container">
        <div className="flex justify-between mx-3 py-5 border-main border-b">
          <button
            className="hover:text-main dark:hover:text-main"
            onClick={() => setShowFilter((r) => !r)}
          >
            Filters
          </button>
          <div className="hidden md:block">
            <input
              type="text"
              placeholder="Product Name"
              className="p-1 focus:outline-none border-none text-main bg-blue-100 dark:bg-[#191b32] rounded-md"
            />
            <button className="dark:text-white bg-blue-100 dark:bg-[#191b32] rounded-md p-1 hover:bg-main dark:hover:bg-main ml-2">
              Search
            </button>
          </div>
          <div>
            <span className="mr-1">Show :</span>
            <select
              className="bg-blue-100 dark:bg-[#191b32] rounded-md"
              name="short"
            >
              <option value="">Default</option>
              <option value="">Price low to high</option>
              <option value="">Price high to low</option>
            </select>
          </div>
        </div>
        <div className="flex relative">
          {showFilter && (
            <div className="absolute bg-blue-100 w-[80%] dark:bg-[#191b32] z-40 top-2 left-[50%] translate-x-[-50%] rounded-sm shadow-lg">
              <div className="px-4 py-3 relative">
                <button
                  onClick={() => setShowFilter((r) => !r)}
                  className="absolute top-2 right-4 hover:text-main"
                >
                  <CloseSquareOutlined />
                </button>
                <div className="mt-3">
                  price:
                  <div className="flex gap-2 mt-3 items-center">
                    <input
                      className="w-20 p-1 outline-none border-none dark:bg-zinc-700 appearance-none"
                      type="number"
                      placeholder="min"
                      onChange={(e) => setMinPrice(Number(e.target.value))}
                    />
                    <span>To</span>
                    <input
                      className="w-20 p-1 outline-none border-none dark:bg-zinc-700 appearance-none"
                      type="number"
                      placeholder="max"
                      onChange={(e) => setMaxPrice(Number(e.target.value))}
                    />
                  </div>
                </div>
                <div className="mt-5 mb-5">
                  <p className="mb-2">Rating:</p>
                  <Rating
                    initialRating={rating}
                    onChange={(v) => setRrating(v)}
                    emptySymbol={
                      <img
                        src="https://dreyescat.github.io/react-rating/assets/images/star-empty.png"
                        className="icon h-6 w-6"
                        alt="icon"
                      />
                    }
                    fullSymbol={
                      <img
                        src="https://dreyescat.github.io/react-rating/assets/images/star-full.png"
                        className="icon h-6 w-6"
                        alt="icon"
                      />
                    }
                  />
                </div>
                <button className="border border-main px-2 py-1 hover:bg-main">
                  Done
                </button>
              </div>
            </div>
          )}
          <div>
            <ProductRow />
          </div>
        </div>
      </div>
    </>
  )
}

export default index
