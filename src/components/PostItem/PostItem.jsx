import React from 'react'
import cl from './PostItem.module.scss'
import MyButton from '../UI/button/MyButton'
import { Link, useNavigate } from 'react-router-dom'

const PostItem = ({ post, onDelete }) => {
  const { id, title, body } = post
  const router = useNavigate()

  return (
      <div className={cl.PostItem}>
        <Link className={cl.PostItem__content}  to={`/post/${id}`}>
          <i>{id}</i> -
          <strong>{title}</strong>
          <div>
            {body}
          </div>
        </Link>
        <div>
          <MyButton onClick={e => onDelete(post)}>Delete</MyButton>
        </div>

      </div>
  )
}

export default PostItem