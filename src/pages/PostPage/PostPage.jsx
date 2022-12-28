import React, { useMemo, useState } from 'react'

import AddPost from '../../components/AddPost/AddPost'
import PostList from '../../components/PostList/PostList'

import cl from './PostPage.module.scss'
import PostFilter from '../../components/Filter/Filter'
import MyInput from '../../components/UI/input/MyInput'

const PostPage = () => {
  const [posts, setPosts] = useState([
    { id: 1, title: '444123', description: '1aaa' },
    { id: 2, title: '123', description: '3aaa' },
    { id: 3, title: '123', description: '2aaa' },
    { id: 4, title: '123', description: 'aaa' },
  ])

  const [filter, setFilter] = useState({ sort: '', query: '' })

  const sortedPosts = useMemo(() => {
    if (filter.sort) {
      return [...posts].sort((a, b) =>
        a[filter.sort].localeCompare(b[filter.sort]))
    }
    return posts
  }, [filter.sort, posts])

  const sortedAndSearchedPosts = useMemo(() => {
    const searchToLower = filter.query.toLowerCase()
    return sortedPosts.filter(({ title, description }) => (
      title.toLowerCase().includes(searchToLower) ||
      description.toLowerCase().includes(searchToLower)
    ))
  }, [filter.query, sortedPosts])


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
      {
        sortedAndSearchedPosts.length !== 0
          ?
          <PostList
            posts={sortedAndSearchedPosts}
            onDeletePost={onDeletePost}
          />
          : <h2>Empty.</h2>
      }
    </div>
  )
}

export default PostPage