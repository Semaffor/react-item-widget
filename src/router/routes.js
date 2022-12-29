import React from 'react'

import { Navigate } from 'react-router-dom'
import MainPage from '../pages/Main/MainPage'
import PostPage from '../pages/Post/PostPage'
import About from '../pages/About/About'
import Error from '../pages/Error/Error'
import Login from '../pages/Login/Login'

export const privateRoutes = [
  {path: '/', element: <MainPage/>},
  {path: '/post/:id', element: <PostPage/>},
  {path: '/about', element: <About/>},
  {path: '/auth', element:<Navigate to={"/"}/>},
  {path: '*', element:<Error errorCode={404} />},
]

export const publicRoutes = [
  {path: '/auth', element: <Login/>},
  {path: '*', element:<Navigate to={"/auth"}/>},
]