import React, { useEffect, useMemo, useState } from 'react'

import AddPost from '../../components/AddPost/AddPost'
import PostList from '../../components/PostList/PostList'
import PostFilter from '../../components/Filter/Filter'
import { useFetching } from '../../hooks/useFetching'
import { usePosts } from '../../hooks/usePost'
import { PostService } from '../../API/PostService'
import Loader from '../../components/Loader/Loader'

import cl from './MainPage.module.scss'

const MainPage = () => {
  const [posts, setPosts] = useState([])
  const [filter, setFilter] = useState({ sort: '', query: '' })
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)

  const [paginationProps, setPaginationProps] = useState({
    page: 1,
    limit: 10,
    totalCount: 0,
  })
  const [fetchPosts, isLoading, error] = useFetching(async () => {
    console.log(paginationProps.limit)
    const response = await PostService.getPosts(paginationProps.limit, paginationProps.page)
    setPaginationProps({...paginationProps, totalCount: response.headers['x-total-count']})
    setPosts(response.data)
  })

  useEffect(() => {
    fetchPosts()
  }, [paginationProps.page, paginationProps.limit])

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

      {error
        ? <h2>An error has occurred</h2>
        : null
      }

      {isLoading
        ? <Loader />
        :
        <PostList
          posts={sortedAndSearchedPosts}
          onDeletePost={onDeletePost}
          paginationProps={paginationProps}
          setPaginationProps={setPaginationProps}
        />
      }
    </div>
  )
}

export default MainPage