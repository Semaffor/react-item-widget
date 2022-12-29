import React, { useEffect, useState } from 'react'

import PostItem from '../PostItem/PostItem'
import Pagination from '../Pagination/Pagination'

import cl from './PostList.module.scss'

const PostList = ({ posts, onDeletePost, paginationProps, setPaginationProps }) => {

  if (posts.length === 0) {
    return (
      <h2>Empty.</h2>
    )
  }

  return (
    <div className={cl.PostList}>

      <h1 style={{ textAlign: 'center' }}>Posts</h1>
      {
        posts.map((post, i) => (
          <PostItem
            key={i}
            post={post}
            onDelete={onDeletePost}
          />
        ))
      }
      <Pagination
        paginationProps={paginationProps}
        setPaginationProps={setPaginationProps}
      />
    </div>
  )
}

export default PostList