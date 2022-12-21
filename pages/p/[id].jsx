/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/rules-of-hooks */
import { useRouter } from 'next/router'
import Header from '../../components/Header'
import InnerImageZoom from 'react-inner-image-zoom'
import { Swiper, SwiperSlide } from 'swiper/react'
import Rating from 'react-rating'
import { Pagination, Navigation } from 'swiper'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.min.css'
import { StarFilled, StarOutlined } from '@ant-design/icons'
import Product from '../../components/Product'
import Footer from '../../components/Footer'
import axios from 'axios'
import { serverUrl } from '../../util/constant'
import { useDispatch, useSelector } from 'react-redux'
import { add } from '../../redux/feters/cart'

const Review = () => {
  return (
    <div className="flex items-center my-4">
      <div>
        <img
          className="h-10 w-10 object-cover mr-3 rounded-full object-top"
          src="https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
          alt=""
        />
      </div>
      <div>
        <Rating
          className="text-2xl"
          readonly
          initialRating={4}
          // onChange={(v) => setRrating(v)}
          emptySymbol={<StarOutlined />}
          fullSymbol={<StarFilled className="text-yellow-500" />}
        />
        <p className="text-2xl">This is good</p>
      </div>
    </div>
  )
}

const id = ({ product: { attributes } }) => {
  const { name, price, offerPrice, star, desc, media, slug } = attributes
  const { data: imageSlide } = media
  const dispatch = useDispatch()
  const cart = useSelector((s) => s.cart)
  const _hendelClick = () => {
    const data = {
      name,
      price,
      slug,
      qun: 1,
      img: imageSlide[0].attributes.formats.small.url,
    }
    const l = dispatch(add(data))
  }

  return (
    <>
      <Header />
      <div className="container">
        <div className="lg:flex">
          <div className="m-2 pSlider lg:flex-1 lg:w-[60%] block lg:mt-6">
            <Swiper
              // slidesPerView={1}
              // spaceBetween={10}
              className="block"
              modules={[Pagination, Navigation]}
              pagination={true}
              navigation={{
                nextEl: '#next',
                prevEl: '#pev',
                disabledClass: 'disableBtn',
              }}
            >
              {imageSlide?.map((_, i) => (
                <SwiperSlide key={i}>
                  <InnerImageZoom
                    fullscreenOnMobile={true}
                    hideHint={true}
                    zoomType="hover"
                    src={serverUrl + _.attributes.formats.large.url}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="flex justify-between">
              <button
                id="pev"
                className="dark:bg-darkC bg-blue-100 px-2 py-1 rounded-sm hover:bg-main dark:hover:bg-main"
              >
                Previous
              </button>
              <button
                id="next"
                className="dark:bg-darkC bg-blue-100 px-2 py-1 rounded-sm hover:bg-main dark:hover:bg-main"
              >
                Next
              </button>
            </div>
          </div>
          <div className="lg:w-[40%]">
            <div className="m-2">
              <h1 className="text-2xl mt-3 lg:text-4xl">{name}</h1>
              <p className="mt-2">Price ${price}</p>
              <div className="my-1">
                <button
                  onClick={_hendelClick}
                  className="bg-blue-100 px-2 py-1 rounded-md dark:bg-darkC hover:bg-main hover:dark:bg-main mr-2"
                >
                  Add To Cart
                </button>
                <button className="bg-blue-100 px-2 py-1 rounded-md dark:bg-darkC hover:bg-main hover:dark:bg-main">
                  Buy Now
                </button>
              </div>
              <Rating
                className="text-2xl"
                readonly
                initialRating={star}
                // onChange={(v) => setRrating(v)}
                emptySymbol={<StarOutlined />}
                fullSymbol={<StarFilled className="text-yellow-500" />}
              />
              <p className="mt-2  lg:h-[15rem] lg:overflow-hidden hover:lg:overflow-auto lg:scrollbar-thin">
                {desc}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="border-t border-main mt-4 pt-3 m-3 lg:flex lg:justify-between">
          <div className="w-[40%]">
            <h1 className="text-4xl">Customer Review:</h1>
            <div>
              <Review />
              <Review />
              <Review />
              <Review />
            </div>
          </div>
          <div className="lg:w-[40%]">
            <h1 className="text-4xl">Related Product:</h1>
            <div>
              <Product />
              <Product />
              <Product />
              <Product />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export async function getServerSideProps({ query }) {
  const slug = query.id

  const { data } = await axios({
    method: 'get',
    url:
      'http://localhost:1337/api/products?populate=*&filters[slug][$eq]=' +
      slug,
  })
  if (data?.data.length !== 1) {
    return {
      redirect: {
        permanent: false,
        destination: '/notFound',
      },
    }
  }
  return {
    props: {
      product: data?.data[0],
    },
  }
}

export default id
