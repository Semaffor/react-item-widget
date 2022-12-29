import React, { useEffect, useState } from 'react'

import cl from './Comments.module.scss'
import { useFetching } from '../../hooks/useFetching'
import { PostService } from '../../API/PostService'
import Loader from '../Loader/Loader'

const Comments = ({ postId }) => {

  const [comments, setComments] = useState([])
  const [fetchingComments, isLoadingComments, errorComments] = useFetching(async () => {
    const data = await PostService.getComments(postId)
    setComments(data)
  })

  useEffect(() => {
    fetchingComments()
  }, [])

  if (comments.length === 0) {
    return (
      <h1 style={{ alignItems: 'center' }}>Comments not found.</h1>
    )
  }

  return (
    <>
      {isLoadingComments
        ? <Loader />
        :
        comments.map(({ id, name, email, body }) => (
          <div key={id} className={cl.CommentsBlock}>
            <div>
              <span>user: <i>{name}</i>, <h5>email: {email}</h5></span>
            </div>
            <hr/>
            <div>{body}</div>
          </div>
        ))
      }
    </>
  )
}

export default Comments