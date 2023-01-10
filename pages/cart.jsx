/* eslint-disable react-hooks/rules-of-hooks */
import Link from 'next/link'
import { useSelector } from 'react-redux'
import CartProduct from '../components/CartProduct'
import Header from '../components/Header'
import { serverUrl } from '../util/constant'

const cart = () => {
  const cart = useSelector((s) => s.cart)
  return (
    <>
      <Header />
      <div className="flex flex-col items-center">
        <div className="w-full md:w-[720px]">
          {cart?.length === 0 ? (
            <h1 className="text-center mt-3">No Product In Cart</h1>
          ) : (
            cart?.map((_, i) => (
              <CartProduct
                name={_.name}
                img={serverUrl + _.img}
                key={i}
                price={_.price}
                qun={_.qun}
                slug={_.slug}
              />
            ))
          )}
        </div>
        {cart.length > 0 && (
          <div className="flex items-center flex-col">
            <h1>
              Price : {cart?.reduce((acc, c) => acc + c.qun * c.price, 0)} taka
            </h1>
            <Link
              href="/checkout"
              className="bg-main px-2 py-1 rounded-md hover:bg-opacity-40 mt-3"
            >
              Check Out
            </Link>
          </div>
        )}
      </div>
    </>
  )
}

export default cart
