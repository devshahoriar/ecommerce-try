/* eslint-disable react-hooks/rules-of-hooks */
import { useRouter } from 'next/router'
import { useState } from 'react'
import { useRegisterMutation } from '../redux/api/auth'
import style from '../styles/reg.module.css'
import isAuth from '../util/isAuth'
const register = () => {
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [pass, setPass] = useState()
  const router = useRouter()
  const [register, { isError, error, isLoading, isSuccess }] =
    useRegisterMutation()

  const _hendelRegister = (e) => {
    e.preventDefault()
    register({
      username: name,
      email: email,
      password: pass,
    })
  }
  return (
    <div className={style.regBg}>
      <section className={style.regSection}>
        <div className={style.regfrom}>
          <form action="" className="" onSubmit={_hendelRegister}>
            <input
              type="text"
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setPass(e.target.value)}
            />
            <button>Sign Up</button>
            <button
              onClick={() => router.push('/login')}
              className={style.regMobil}
              disabled={isLoading}
            >
              Login
            </button>
            {isError && <p>This is error!</p>}
            {isSuccess && (
              <h1 className="mt-2">Register done. Now you can login.</h1>
            )}
          </form>
        </div>
        <div className={style.bgImage}>
          <div className={style.regDesc}>
            <h1>Register</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima
              nulla nisi eligendi doloribus nostrum, ipsam ut illum eum aliquam
              incidunt, a, provide.
            </p>
            <button onClick={() => router.push('/login')}>Log In</button>
          </div>
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

export default register
