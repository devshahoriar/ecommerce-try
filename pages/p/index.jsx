/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/rules-of-hooks */
import { CloseSquareOutlined, CloseCircleOutlined } from '@ant-design/icons'
import Head from 'next/head'
import { useRouter } from 'next/router'
import queryString from 'query-string'
import { useEffect, useState } from 'react'
import Rating from 'react-rating'
import { useDispatch } from 'react-redux'
import Header from '../../components/Header'
import ProductRow from '../../components/ProductRow'
import { useGetProductQuery } from '../../redux/api/productApi'
import useDebounce from '../../util/use-debounce'

const index = () => {
  const r = useRouter()
  const [showFilter, setShowFilter] = useState(false)
  const [minPrice, setMinPrice] = useState(0)
  const [maxPrice, setMaxPrice] = useState(0)
  const [rating, setRrating] = useState(5)
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('')
  const [skip, setSkip] = useState(true)

  const deSearch = useDebounce(search, 500)
  const deMax = useDebounce(maxPrice, 500)
  const deMin = useDebounce(minPrice, 500)
  const deRating = useDebounce(rating, 500)

  const { data, isError, isLoading } = useGetProductQuery(
    {
      minPrice: deMin,
      maxPrice: deMax,
      rating: deRating,
      search: deSearch,
      category
    },
    { skip }
  )
  const dispatch = useDispatch()
  const products = data?.data

  useEffect(() => {
    const parsed = queryString.parse(location.search)
    parsed.maxPrice && setMaxPrice(parsed.maxPrice)
    parsed.minPrice && setMinPrice(parsed.minPrice)
    parsed.rating && setRrating(parsed.rating)
    parsed.search && setSearch(parsed.search)
    parsed.category && setCategory(parsed.category)
    setSkip(false)
  }, [])

  const _hendelSearch = () => {
    const q = queryString.stringify({
      ...(maxPrice && { maxPrice }),
      ...(minPrice && { minPrice }),
      ...(search.length > 0 && { search }),
      ...(rating && { rating }),
    })
    r.push('/p?' + q)
  }

  return (
    <>
      <Header />
      <Head>
        <title>Our Shop</title>
      </Head>
      <div className="container">
        <div className="flex justify-between mx-3 py-5 border-main border-b">
          <div>
            <button
              className="hover:text-main dark:hover:text-main"
              onClick={() => setShowFilter((r) => !r)}
            >
              Filters
            </button>
            {category && (
              <div className="flex justify-center items-center">
                <h1>Category : {category}</h1>
                <button
                  onClick={() => {
                    setCategory('')
                    _hendelSearch()
                  }}
                  className="flex justify-center items-center flex-col ml-2"
                >
                  <CloseCircleOutlined className="bg-main rounded-full " />
                </button>
              </div>
            )}
          </div>
          <div className="hidden md:block">
            <input
              onChange={(e) => setSearch(e.target.value)}
              value={search}
              type="text"
              placeholder="Product Name"
              className="p-1 focus:outline-none border-none text-main bg-blue-100 dark:bg-[#191b32] rounded-md"
            />
            <button
              onClick={_hendelSearch}
              className="dark:text-white bg-blue-100 dark:bg-[#191b32] rounded-md p-1 hover:bg-main dark:hover:bg-main ml-2"
            >
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
                      onChange={(e) => setMinPrice(e.target.value)}
                      value={minPrice}
                      onClick={(e) => e.target.select()}
                    />
                    <span>To</span>
                    <input
                      className="w-20 p-1 outline-none border-none dark:bg-zinc-700 appearance-none"
                      type="number"
                      placeholder="max"
                      onChange={(e) => setMaxPrice(e.target.value)}
                      value={maxPrice}
                      onClick={(e) => e.target.select()}
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
                <button
                  onClick={() => {
                    setShowFilter((r) => !r)
                    _hendelSearch()
                  }}
                  className="border border-main px-2 py-1 hover:bg-main"
                >
                  Done
                </button>
              </div>
            </div>
          )}
          <div>
            <ProductRow products={products} />
          </div>
        </div>
      </div>
    </>
  )
}

export default index
