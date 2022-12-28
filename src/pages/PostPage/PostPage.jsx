import React, { useEffect, useMemo, useState } from 'react'

import AddPost from '../../components/AddPost/AddPost'
import PostList from '../../components/PostList/PostList'

import cl from './PostPage.module.scss'
import PostFilter from '../../components/Filter/Filter'
import MyInput from '../../components/UI/input/MyInput'
import { usePosts } from '../../hooks/usePost'

const PostPage = () => {
  const [posts, setPosts] = useState([
    { id: 1, title: '444123', description: '1aaa' },
    { id: 2, title: '123', description: '3aaa' },
    { id: 3, title: '123', description: '2aaa' },
    { id: 4, title: '123', description: 'aaa' },
  ])
  const [filter, setFilter] = useState({ sort: '', query: '' })
  co
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)

  useEffect(() => {
    console.log("Монтирование EFFECT")
  })

  const addNewPost = (newPost) => {
    setPosts(prevState => ([
      ...prevState, newPost,
    ]))
  }

  const onDeletePost = (postToDelete) => {
    setPosts(posts.filter(post => post.id !== postToDelete.id))
  }

  return (
    <div className={cl.PostPage}>
      <AddPost
        addNewPost={addNewPost}
      />
      <hr />

      <PostFilter
        filter={filter}
        setFilter={setFilter}
      />

      <PostList
        posts={sortedAndSearchedPosts}
        onDeletePost={onDeletePost}
      />

    </div>
  )
}

export default PostPage