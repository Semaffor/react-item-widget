import React from 'react'
import cl from './PostItem.module.scss'
import MyButton from '../UI/button/MyButton'

const PostItem = ({ post, onDelete}) => {
  const { id, title, description } = post

  return (
    <div className={cl.PostItem}>
      <div className={cl.PostItem__content}>
        <i>{id}</i> -
        <strong>{title}</strong>
        <div>
          {description}
        </div>
      </div>
      <div>
        <MyButton onClick={e => onDelete(post)}>Delete</MyButton>
      </div>

    </div>
  )
}

export default PostItem