import { serverUrl } from "../util/constant"

/* eslint-disable @next/next/no-img-element */
const SlideItem = ({ img }) => {
  return (
    <div>
      <div className="h-[250px] sm:h-[350px] md:h-[400px] xl:h-[450px]">
        <img
          className="w-full h-full object-cover object-center"
          src={serverUrl + img}
          alt=""
        />
      </div>
    </div>
  )
}

export default SlideItem
