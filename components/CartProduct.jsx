import Link from 'next/link'
import { useDispatch } from 'react-redux'
import { modify, remove, inc, dec } from '../redux/feters/cart'

/* eslint-disable @next/next/no-img-element */
const CartProduct = ({
  ishideControll = false,
  name = 'aproduct',
  price = 100,
  slug = 'dd',
  qun = 1,
  img = 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
}) => {
  const dispatch = useDispatch()

  return (
    <div>
      <div className="flex justify-between my-4 mx-2">
        <div className="flex">
          <img
            className="w-20 object-cover rounded-md h-28"
            src={img}
            alt="Product"
          />
          <div className="ml-2">
            <Link href={'/p/' + slug} className="hover:text-main">
              <h1 className="text-lg whitespace-nowrap w-[220px] md:w-[450px] sm:w-[350px] truncate">
                {name}
              </h1>
            </Link>
            <p>${price}</p>
          </div>
        </div>
        <div className="flex items-center">
          {ishideControll ? (
            <>
              <p>
                <span>
                  {qun} * {price} = {qun * price} taka
                </span>
              </p>
            </>
          ) : (
            <>
              <div className="mx-5">
                <button
                  onClick={() => dispatch(dec(slug))}
                  className="bg-main bg-opacity-20 px-1 rounded-md hover:bg-opacity-100"
                >
                  -
                </button>
                <span className="mx-3">{qun}</span>
                <button
                  onClick={() => dispatch(inc(slug))}
                  className="bg-main bg-opacity-20 px-1 rounded-md hover:bg-opacity-100"
                >
                  +
                </button>
              </div>
              <button
                className="bg-main px-2 hover:bg-opacity-40"
                onClick={() => dispatch(remove(slug))}
              >
                x
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default CartProduct
