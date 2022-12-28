import React, { useMemo, useState } from 'react'

import AddPost from '../../components/AddPost/AddPost'
import PostList from '../../components/PostList/PostList'

import cl from './PostPage.module.scss'
import Filter from '../../components/Filter/Filter'
import MyInput from '../../components/UI/input/MyInput'

const PostPage = () => {
  const [posts, setPosts] = useState([
    { id: 1, title: '444123', description: '1aaa' },
    { id: 2, title: '123', description: '3aaa' },
    { id: 3, title: '123', description: '2aaa' },
    { id: 4, title: '123', description: 'aaa' },
  ])

  const [selectedSort, setSelectedSort] = useState('')
  const [searchQuery, setSearchQuery] = useState('')

  const sortedPosts = useMemo(() => {
    if (selectedSort) {
      return [...posts].sort((a, b) =>
        a[selectedSort].localeCompare(b[selectedSort]))
    }
    return posts
  }, [selectedSort, posts])

  const sortedAndSearchedPosts = useMemo(() => {
    const searchToLower = searchQuery.toLowerCase()
    return sortedPosts.filter(({ title, description }) => (
      title.toLowerCase().includes(searchToLower) ||
      description.toLowerCase().includes(searchToLower)
    ))
  }, [searchQuery, sortedPosts])


  const addNewPost = (newPost) => {
    setPosts(prevState => ([
      ...prevState, newPost,
    ]))
  }

  const onDeletePost = (postToDelete) => {
    setPosts(posts.filter(post => post.id !== postToDelete.id))
  }

  const waysToSort = [
    { value: 'title', body: 'Title' },
    { value: 'description', body: 'Description' },
  ]

  const sortPosts = (wayToSort) => {
    setSelectedSort(wayToSort)
  }

  return (
    <div className={cl.PostPage}>
      <AddPost
        addNewPost={addNewPost}
      />
      <hr />
      <MyInput
        value={searchQuery}
        onChange={e => setSearchQuery(e.target.value)}
        placeholder={'Search...'}
      />
      <Filter
        defaultValue={'Sort by'}
        options={waysToSort}
        value={selectedSort}
        onChange={sortPosts}
      />
      {
        posts.length !== 0
          ?
          <PostList
            posts={sortedAndSearchedPosts}
            onDeletePost={onDeletePost}
          />
          : <h2>Пу213сто</h2>
      }
    </div>
  )
}

export default PostPage