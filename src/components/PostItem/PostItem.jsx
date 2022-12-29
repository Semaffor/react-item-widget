import React from 'react'
import cl from './PostItem.module.scss'
import MyButton from '../UI/button/MyButton'
import { Link, useNavigate } from 'react-router-dom'

const PostItem = ({ post, onDelete }) => {
  const { id, title, body } = post
  const router = useNavigate()

  return (
      <Link className={cl.PostItem} to={`/post/${id}`}>
        <div className={cl.PostItem__content}>
          <i>{id}</i> -
          <strong>{title}</strong>
          <div>
            {body}
          </div>
        </div>
        <div>
          <MyButton onClick={e => onDelete(post)}>Delete</MyButton>
        </div>

      </Link>
  )
}

export default PostItem