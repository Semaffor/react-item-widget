import React, { useState } from 'react'

import PostItem from '../../components/PostItem/PostItem'

import cl from './PostPage.module.scss'
import AddPost from '../../components/AddPost/AddPost'
import PostList from '../../components/PostList/PostList'

const PostPage = () => {
  const [posts, setPosts] = useState([
    { id: 1, title: '123', description: 'aaa' },
    { id: 2, title: '123', description: 'aaa' },
    { id: 3, title: '123', description: 'aaa' },
    { id: 4, title: '123', description: 'aaa' },
  ])

  if (posts.length === 0) {
    return (
      <h1>Пустота</h1>
    )
  }

  const addNewPost = (newPost) => {
    setPosts(prevState => ([
      ...prevState, newPost,
    ]))
  }

  const onDeletePost = (postToDelete) => {
    setPosts(posts.filter(post => post.id !== postToDelete.id))
  }

  return (
    <div>
      <AddPost addNewPost={addNewPost} />
      {
        posts.length !== 0
          ? <PostList posts={posts} onDeletePost={onDeletePost} />
          : <h2>Пусто</h2>
      }
    </div>
  )
}

export default PostPage