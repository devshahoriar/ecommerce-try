import Image from 'next/image'
import img1 from '../components/images/banner1.png'

const Banner1 = () => {
  return (
    <div className="container">
      <a href="" className='flex justify-center mt-4'>
        <Image src={img1} alt='Banner Image' />
      </a>
    </div>
  )
}

export default Banner1
