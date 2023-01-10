/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import {
  UserOutlined,
  BulbOutlined,
  BulbFilled,
  MenuOutlined,
  CloseSquareOutlined,
  ShoppingCartOutlined,
} from '@ant-design/icons'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import style from '../styles/header.module.css'
import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'
import { addAll } from '../redux/feters/cart'

const Header = () => {
  const router = useRouter()
  const [mood, setMood] = useState()
  const [showMobileMenu, setMobilMenu] = useState(false)
  const cart = useSelector((s) => s.cart)
  const user = useSelector((s) => s.user)
  const auth = user.isLoged
  const updateMode = () => {
    setMood(!mood)
    if (mood) {
      localStorage.theme = 'light'
      document.documentElement.classList.remove('dark')
    } else {
      localStorage.theme = 'dark'
      document.documentElement.classList.add('dark')
    }
  }

  useEffect(() => {
    setMood(localStorage.theme !== 'light')
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [])

  const showHideMobileMenu = () => setMobilMenu((r) => !r)

  return (
    <div className="bg-blue-100 w-full dark:bg-[#191b32]">
      <header className={style.header}>
        <div className={style.appLogo}>
          <h1 className="applogoA">
            <Link href='/'>
            
            Our <span>Shop</span>
            </Link>
          </h1>
        </div>
        <div className={style.appMenu}>
          <Link href="/" className="dark:hover:text-main">
            Home
          </Link>
          <a href="#" className="dark:hover:text-main">
            About
          </a>
          <Link href="/p" className="dark:hover:text-main">
            Product
          </Link>
        </div>
        <div className={style.rightBar}>
          <div className={style.desktopHum}>
            <Link className={style.iconbutton + ' relative group'} href="/cart">
              <ShoppingCartOutlined />
              <span className="absolute text-sm -right-2 -top-2 bg-main rounded-full h-[17px] w-[17px] group-hover:text-white flex justify-center items-center">
                {cart.length}
              </span>
            </Link>
            <button className={style.iconbutton} onClick={updateMode}>
              {mood ? <BulbFilled /> : <BulbOutlined />}
            </button>
            {auth ? (
              <Link href="/profile">
                <img
                  src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
                  className={style.avater}
                />
              </Link>
            ) : (
              <button
                onClick={() => router.push('/login')}
                className={style.iconbutton}
              >
                <UserOutlined />
              </button>
            )}
          </div>
          <button
            onClick={showHideMobileMenu}
            className={style.iconbutton + ' ' + style.mobileHam}
          >
            <MenuOutlined />
          </button>
        </div>
      </header>
      <AnimatePresence>
        {showMobileMenu && (
          <motion.div
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 200 }}
            transition={{ ease: 'easeOut', duration: 0.3 }}
            className={style.mobileMenu + ' z-50'}
          >
            <div>
              <div className="relative">
                <button
                  onClick={showHideMobileMenu}
                  className={style.closeButton}
                >
                  <CloseSquareOutlined />
                </button>
                <div className={style.accountDesc}>
                  <img
                    src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
                    alt=""
                  />
                  <h1>Shuvo Ahmed</h1>
                  <div className={style.accountContr}>
                    <button>Log Out</button>|<button>Profile</button>
                  </div>
                  <div className="flex gap-3">
                    <button
                      onClick={updateMode}
                      className={style.mobileMoodButton}
                    >
                      {mood ? <BulbFilled /> : <BulbOutlined />}{' '}
                      <span>{mood ? 'light' : 'Dark'}</span>
                    </button>
                    <Link href="/cart" className={style.mobileMoodButton}>
                      <ShoppingCartOutlined />
                      <span className="">{cart.length}</span>
                    </Link>
                  </div>
                </div>
                <div className={style.mobileNav}>
                  <a href="#">Home</a>
                  <a href="#">About</a>
                  <a href="#">Product</a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Header
