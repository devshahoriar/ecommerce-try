import CatSideBar from './CatSideBar'
import Slider from './Slider'

const Hero = () => {
  return (
    <div className="container">
      <div className="flex justify-center gap-4 mt-4">
        <CatSideBar />
        <Slider />
      </div>
    </div>
  )
}

export default Hero
