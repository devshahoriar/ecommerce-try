/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { ArrowRightOutlined } from '@ant-design/icons'
import Image from 'next/image'

const Item = ({ title, image }) => {
  return (
    <a href="" className='md:w-full md:m-2'>
      <div className="flex items-center justify-between mx-4 my-2 border border-main p-1 rounded-md group hover:bg-main transition-colors md:mx-0 ">
        <div className="flex items-center">
          <img
            className="w-12 h-12 object-cover object-top rounded-md md:w-8 md:h-8"
            src={image}
            alt="p_"
          />
          <p className="text-2xl md:text-lg items-start ml-6 group-hover:text-white transition-colors md:ml-2">{title}</p>
        </div>
        <span className='flex items-center mr-4 text-2xl text-white group-hover:opacity-100 opacity-0 transition-opacity md:text-xl md:mr-1 sm:mr-0'>
          <ArrowRightOutlined />
        </span>
      </div>
    </a>
  )
}
const Categoris = () => {
  return (
    <div className="container">
      <div className='md:flex md:justify-between'>
        <Item title='Man' image='https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'/>
        <Item title='Woman' image='https://images.unsplash.com/photo-1592621385612-4d7129426394?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'/>
        <Item title='Home' image='https://images.unsplash.com/photo-1501183638710-841dd1904471?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aG9tZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'/>
        <Item title='Mart' image='https://images.unsplash.com/photo-1588421024623-940056140e58?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8TWFydHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'/>
        <Item title='Laptop' image='https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80'/>
      </div>
    </div>
  )
}

export default Categoris
