import React, { useEffect, useState } from 'react'
import { BrowserRouter } from 'react-router-dom'

import Container from '../../components/Container/Container'
import Header from '../../components/NavBar/Header'
import AppRoutes from '../../router/AppRoutes'
import { AuthContext } from '../../context'

function App() {

  const [isAuth, setAuth] = useState(false)
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    if (localStorage.getItem('isAuth')){
      setAuth(true)
    }
    setLoading(false)
  }, [])

  return (
    <AuthContext.Provider value={{
      isAuth, setAuth, isLoading
    }}>
      <BrowserRouter>
        <Header />
        <Container>
          <AppRoutes />
        </Container>
      </BrowserRouter>
    </AuthContext.Provider>
  )
}

export default App
