import React from 'react'
import MainPage from '../Main/MainPage'
import Container from '../../components/Container/Container'
import AddPost from '../../components/AddPost/AddPost'
import { BrowserRouter, Navigate, NavLink, Route, Routes } from 'react-router-dom'
import About from '../About/About'
import Header from '../../components/NavBar/Header'
import PostPage from '../Post/PostPage'

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Header/>
        <Container>
          <Routes>
            <Route path={'/'} element={<MainPage/>}/>
            <Route path={'/post/:id'} element={<PostPage/>}/>
            <Route path={'/about'} element={<About/>}/>
            <Route path={'*'} element={<Navigate to={"/"}/>}
            />
          </Routes>
        </Container>
      </BrowserRouter>
    </div>
  )
}

export default App
