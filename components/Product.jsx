import Link from 'next/link'
import { serverUrl } from '../util/constant'

/* eslint-disable @next/next/no-img-element */
const Product = ({ product }) => {
  const { name, price, offerPrice, slug, media } = product?.attributes || {
    name: 'nn',
    price: 100,
    slug: 'd',
  }
  const img =
    media?.data[0].attributes?.formats.medium.url ||
    '/uploads/medium_md_salman_iiqg2xbmvk0_unsplash_48794a5e9f.jpg'

  return (
    <Link href={'/p/' + slug}>
      <div className="my-6 border border-transparent hover:border-main transition-colors duration-500 pb-2 sm:my-2">
        <img
          className="p-3 w-full object-cover h-52"
          src={serverUrl + img}
          alt="product"
        />
        <div className="ml-5">
          <h1 className="mt-2 text-xl truncate w-[95%] hover:text-main transition-colors duration-500">
            {name}
          </h1>
          <p className="text-lg text-main">
            ${offerPrice > 0 ? offerPrice : price}
          </p>
          {offerPrice > 0 && (
            <>
              <span className="text-xs opacity-60 line-through">{price}</span>
              <span className="ml-2 text-xs">
                -{Math.round((price / offerPrice) * 100 - 100).toFixed(2)}%
              </span>
            </>
          )}
        </div>
      </div>
    </Link>
  )
}

export default Product
