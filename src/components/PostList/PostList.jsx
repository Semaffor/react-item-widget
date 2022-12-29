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

      <select
        value={paginationProps.limit}
        onChange={e => setPaginationProps({...paginationProps, limit: e.target.value})}
      >
        <option value={'5'}>5</option>
        <option value={'10'}>10</option>
        <option value={'25'}>25</option>
      </select>

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