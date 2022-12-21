/* eslint-disable react-hooks/rules-of-hooks */
import { useRouter } from 'next/router'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useLoginMutation } from '../redux/api/auth'
import { addUser } from '../redux/feters/user'
import style from '../styles/Login.module.css'
import { setCookie } from 'cookies-next'
import isAuth from '../util/isAuth'

const dev = () => {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  const [err, setErr] = useState('')
  const [login, { isLoading, isError }] = useLoginMutation()
  const dispatch = useDispatch()
  const _henDelSignin = async (e) => {
    e.preventDefault()
    try {
      const data = await login({
        identifier: email,
        password: pass,
      }).unwrap()
      dispatch(addUser(data))
      setCookie('jwt', data?.jwt)
      router.replace('/')
    } catch (error) {
      setErr(error?.data.error?.message)
    }
  }
  return (
    <div className={style.loginBg}>
      <section className={style.logInSection}>
        <div className={style.PhotoBg}>
          <div className={style.bgDesc}>
            <h1>Log In</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis
              doloribus corrupti voluptas illo! Maxime aspernatur aperiam a
              aliquid corrupti
            </p>
            <button onClick={() => router.push('/register')}>Register</button>
          </div>
        </div>
        <div className={style.fromSide}>
          <form action="" method="post" onSubmit={_henDelSignin}>
            <input
              onChange={({ target }) => setEmail(target.value)}
              type="email"
              placeholder="Email"
            />
            <input
              onChange={({ target }) => setPass(target.value)}
              type="password"
              placeholder="Password"
            />
            <button type="submit">Sign In</button>
            <button>Reset Password</button>
            <button
              onClick={() => router.push('/register')}
              className={style.mobileReg}
            >
              Register
            </button>
            {isError && <p>user and password wrong.</p>}
          </form>
        </div>
      </section>
    </div>
  )
}

export const getServerSideProps = async (ctx) => {
  if (isAuth(ctx)) {
    return {
      redirect: {
        destination: '/',
        permanent: true,
      },
    }
  }

  return {
    props: {},
  }
}

export default dev
