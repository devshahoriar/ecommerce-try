import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/pagination'
import SlideItem from './SlideItem'
import { useGetSlideQuery } from '../redux/api/homeApi'

const Bulet = (index, className) => {
  console.log(index, className)
  return <span className={classN}>{index + 1}</span>
}

const Slider = () => {
  const { data, isError, isLoading } = useGetSlideQuery()
  const slides = data?.data?.attributes?.slides

  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + ' pagenate' + '">' + '</span>'
    },
  }
  return (
    <div className="mx-3 overflow-hidden md:w-[45rem] md:mx-0 lg:w-[70%] xl:w-[75%] relative">
      <Swiper
        pagination={pagination}
        spaceBetween={40}
        modules={[Autoplay, Pagination]}
        loop={true}
        autoplay={{
          delay: 3000,
        }}
        className="myP"
      >
        {slides?.map((_, i) => (
          <SwiperSlide key={i}>
            <SlideItem img={_?.img?.data?.attributes?.formats?.large?.url} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default Slider
