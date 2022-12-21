/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import Header from '../components/Header'
import { useGetOrderQuery } from '../redux/api/order'
import { logOut } from '../redux/feters/user'
import { serverUrl } from '../util/constant'

import { deleteCookie } from 'cookies-next'

const Prod = ({ p }) => {
  const { name, qun, price, img, slug } = p
  return (
    <>
      <div className="my-3">
        <div className="flex">
          <img
            className="h-16 w-24 object-cover"
            src={serverUrl + img}
            alt=""
          />
          <div className="ml-5">
            <h1 className="text-2xl hover:text-main">
              <Link href={'/p/' + slug}>{name}</Link>
            </h1>
            <p className="text-sm">
              Price: {price} * {qun} = {price * qun} taka
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

const OrderProdSeg = ({ order }) => {
  const { address, all_price, payment, products, status } =
    order?.attributes || {}
  return (
    <>
      <div className="my-4 border-b border-b-main pb-2">
        {JSON.parse(products)?.map((p, i) => (
          <Prod key={i} p={p} />
        ))}
        <div className="flex items-center justify-between">
          <div>
            <p>Addres:{address}</p>
            <p>Payment:{payment}</p>
          </div>
          <div>Price: {all_price}taka</div>
        </div>
        <p>Order Status: {status}</p>
      </div>
    </>
  )
}

const profile = () => {
  const user = useSelector((s) => s.user)
  const dispatch = useDispatch()
  const router = useRouter()
  const {
    data: orders,
    isLoading,
    isError,
    error,
  } = useGetOrderQuery(
    { jwt: user.jwt, id: user.user.id },
    { refetchOnMountOrArgChange: true }
  )
  const _hendelLogout = () => {
    dispatch(logOut())
    localStorage.clear()
    deleteCookie('jwt')
    router.replace('/')
  }
  return (
    <>
      <Header />
      <div className="container">
        <div className="flex flex-col justify-center items-center">
          <div>
            <div className="mt-6">
              <img
                className="h-40 w-40 object-cover rounded-full border-main border-2 p-1"
                src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
                alt=""
              />
            </div>
            <div>
              <h1 className="text-center text-2xl my-2">
                {user.user.username}
              </h1>
              <p className="text-center"> {user.user.email}</p>
              <p className="text-center"> 01777596337</p>
              <p
                className="text-center cursor-pointer hover:text-main"
                onClick={_hendelLogout}
              >
                Logout
              </p>
            </div>
          </div>
          <div className="w-full ">
            <div className="m-5">
              <h1>Orders:</h1>
              {isLoading ? (
                <h1>Loading...</h1>
              ) : isError ? (
                <h1>Something error!</h1>
              ) : (
                orders.data.map((o, i) => <OrderProdSeg key={i} order={o} />)
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default profile
