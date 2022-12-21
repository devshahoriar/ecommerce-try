import Head from 'next/head'
import Image from 'next/image'
import Banner1 from '../components/Banner1'
import Bottom from '../components/Bottom'
import Categoris from '../components/Categoris'
import FlashSell from '../components/FlashSell'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Slider from '../components/Slider'
import TitleWithProducts from '../components/TitleWithProducts'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Our Shop</title>
        <meta name="description" content="Our shop E-commerch site" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Hero />
      <Banner1 />
      <Categoris />
      <FlashSell />
      <TitleWithProducts />
      <Bottom />
      <Footer />
    </>
  )
}
