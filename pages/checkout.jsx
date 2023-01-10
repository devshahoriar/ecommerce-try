/* eslint-disable react-hooks/rules-of-hooks */
import { useRouter } from 'next/router'
import { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CartProduct from '../components/CartProduct'
import Header from '../components/Header'
import { useMakeOrderMutation } from '../redux/api/order'
import { remove_all } from '../redux/feters/cart'
import user from '../redux/feters/user'
import { serverUrl } from '../util/constant'

import isAuth from '../util/isAuth'

const checkout = () => {
  const router = useRouter()
  const cart = useSelector((s) => s.cart)
  const user = useSelector((s) => s.user)
  const all_price = cart?.reduce((acc, c) => acc + c.qun * c.price, 0)
  const [order, { isError }] = useMakeOrderMutation()
  const [addr, setAddr] = useState()
  const [payment, setPayment] = useState()
  const dispatch = useDispatch()

  useEffect(() => {
    if (cart?.length === 0 && !user.isLoged) {
      router.replace('cart')
    }
  }, [cart, router])

  const _hendelOrder = async () => {
    const data = {
      address: addr,
      products: JSON.stringify(cart),
      payment,
      user_id: user.user.id + '',
      all_price: all_price + '',
    }
    try {
      const order_result = await order({ data, jwt: user.jwt })
      localStorage.removeItem('cart')
      dispatch(remove_all())
      router.replace('/')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <Header />
      <div className="conteiner">
        <div className="flex flex-col items-center mx-2 md:mx-0">
          <div className="w-full md:w-[720px]">
            {cart?.map((_, i) => (
              <CartProduct
                name={_.name}
                img={serverUrl + _.img}
                key={i}
                price={_.price}
                qun={_.qun}
                slug={_.slug}
                ishideControll
              />
            ))}
            <h1 className="text-right">Price : {all_price} taka</h1>
          </div>
          <div className="w-full md:w-[720px] ">
            <h1 className="text-2xl">
              <span className="text-red-500">*</span>Delivary Details:
            </h1>
            <textarea
              className="w-full border-main border p-1 rounded-md h-20 focus:outline-none my-3"
              type="text"
              placeholder="Address"
              onChange={({ target }) => setAddr(target.value)}
              value={addr}
            />
            <h1 className="text-2xl">
              <span className="text-red-500">*</span>Payment Details:
            </h1>
            <textarea
              className="w-full border-main border p-1 rounded-md h-20 focus:outline-none my-3"
              type="text"
              placeholder="Payment"
              onChange={({ target }) => setPayment(target.value)}
              value={payment}
            />
          </div>
          <button
            onClick={_hendelOrder}
            className="bg-main px-2 p-1 hover:bg-opacity-40 rounded-md mb-5"
          >
            Order
          </button>
        </div>
      </div>
    </>
  )
}

export const getServerSideProps = async (ctx) => {
  if (!isAuth(ctx)) {
    return {
      redirect: {
        destination: '/login',
        permanent: true,
      },
    }
  }

  return {
    props: {},
  }
}

export default checkout
