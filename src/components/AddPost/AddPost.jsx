import React, { useState } from 'react'

import MyButton from '../UI/button/MyButton'
import MyInput from '../UI/input/MyInput'

import cl from './AddPost.module.scss'

const AddPost = ({ addNewPost }) => {

  const [state, setState] = useState({
    id: '',
    title: '',
    description: '',
  })

  const submitForm = (e) => {
    e.preventDefault()
    const { title, description } = state
    const id = Math.floor(Math.random() * 100);
    const newPost = {
      id,
      title,
      description,
    }
    setState({
      id: '',
      title: '',
      description: '',
    })
    addNewPost(newPost)
  }

  const onChangeInput = (prop, newValue) => {
    setState(prevState => ({
      ...prevState, [prop]: newValue,
    }))
  }

  return (
    <form className={cl.form}>
      <MyInput
        type={'text'}
        value={state.title}
        placeholder={'Post title'}
        onChange={e => onChangeInput('title', e.target.value)}
      />
      <MyInput
        type={'text'}
        value={state.description}
        placeholder={'Post description'}
        onChange={e => onChangeInput('description', e.target.value)}
      />
      <MyButton
        onClick={e => submitForm(e)}
      >
        Add new post
      </MyButton>
    </form>
  )
}

export default AddPost