import { useEffect } from 'react'
import { Provider, useDispatch } from 'react-redux'
import api from '../redux/api/api'
import { auth } from '../redux/api/auth'
import { addAll } from '../redux/feters/cart'
import store from '../redux/store'
import '../styles/globals.css'
import { getCookie } from 'cookies-next'
import user from '../redux/feters/user'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    store.dispatch(addAll(localStorage.getItem('cart')))
    const c = getCookie('jwt')
    if (c) {
      store.dispatch(auth.endpoints.revalidate.initiate(getCookie('jwt')))
    }
  }, [])

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
