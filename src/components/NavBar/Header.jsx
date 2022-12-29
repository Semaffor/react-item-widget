import React from 'react'

import cl from './NavBar.module.scss'
import { NavLink, Route, Routes } from 'react-router-dom'
import About from '../../pages/About/About'

const Header = () => {
  return (
    <header className={cl.NavBar}>
      <NavLink className={cl.NavBar__link} to={'/'}>Posts</NavLink>
      <NavLink className={cl.NavBar__link} to={'/about'}>About</NavLink>
    </header>
  )
}

export default Header