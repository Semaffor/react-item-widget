import React, { useContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import { privateRoutes, publicRoutes } from './routes'
import { AuthContext } from '../context'
import Loader from '../components/Loader/Loader'

const AppRoutes = () => {
  const {isAuth, isLoading} = useContext(AuthContext)

  if (isLoading) {
    return <Loader/>
  }

  return (
    <Routes>
      {isAuth
        ?
        privateRoutes.map(({ path, element }, i) =>
          <Route key={i} path={path} element={element} />,
        )
        :
        publicRoutes.map(({ path, element }, i) =>
          <Route key={i} path={path} element={element} />,
        )
      }
    </Routes>
  )
}

export default AppRoutes