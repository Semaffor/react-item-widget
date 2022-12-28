import React from 'react'

import cl from './PostList.module.scss'
import PostItem from '../PostItem/PostItem'

const PostList = ({posts, onDeletePost}) => {
  return (
    <div className={cl.PostList}>
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
    </div>
  )
}

export default PostList