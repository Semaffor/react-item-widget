import React, { useContext } from 'react'

import cl from './NavBar.module.scss'
import { NavLink, Route, Routes } from 'react-router-dom'
import { AuthContext } from '../../context'

const Header = () => {
  const { isAuth, setAuth } = useContext(AuthContext)

  const logout = () => {
    localStorage.removeItem('isAuth')
    setAuth(false)
  }

  return (
    <header className={cl.NavBar}>
      <div>
        <NavLink className={cl.NavBar__link} to={'/'}>Posts</NavLink>
        <NavLink className={cl.NavBar__link} to={'/about'}>About</NavLink>
      </div>
      {isAuth
        ? <NavLink className={cl.NavBar__link} onClick={logout}>Выйти</NavLink>
        : null
      }
    </header>
  )
}

export default Header