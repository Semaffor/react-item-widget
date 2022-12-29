import React, { useContext } from 'react'

import MyInput from '../../components/UI/input/MyInput'
import MyButton from '../../components/UI/button/MyButton'
import { AuthContext } from '../../context'

import cl from './Login.module.scss'

const Login = () => {
  const { setAuth } = useContext(AuthContext)

  const login = (e) => {
    e.preventDefault()
    setAuth(true)
    localStorage.setItem('isAuth', 'true')
  }

  return (
    <div className={cl.Login}>
      <h1>Authorization</h1>

      <form onSubmit={e => login(e)}>
          <MyInput type={'text'} placeholder={'login'}></MyInput>
          <MyInput type={'password'} placeholder={'password'}></MyInput>
        <MyButton>Log in</MyButton>
      </form>
    </div>
  )
}

export default Login