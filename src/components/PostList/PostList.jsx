import React from 'react'

import cl from './PostList.module.scss'
import PostItem from '../PostItem/PostItem'

const PostList = ({posts, onDeletePost}) => {

  if (posts.length === 0) {
    return (
      <h2>Empty.</h2>
    )
  }

  return (
    <div className={cl.PostList}>

        <h1>Посты</h1>
        {
          posts.map((post, i) => (
            <PostItem
              key={i}
              post={post}
              onDelete={onDeletePost}
            />
          ))
        }
    </div>
  )
}

export default PostList