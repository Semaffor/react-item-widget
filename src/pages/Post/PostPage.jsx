import React, { useEffect, useState } from 'react'

import { useParams } from 'react-router'
import { useFetching } from '../../hooks/useFetching'
import { PostService } from '../../API/PostService'
import Loader from '../../components/Loader/Loader'
import Comments from '../../components/Comments/Comments'

const PostPage = () => {
  const params = useParams()
  const [post, setPost] = useState({})

  const [fetchingPost, isLoadingPost, errorPost] = useFetching(async () => {
    const data = await PostService.getPost(params.id)
    setPost(data)
  })

  useEffect(() => {
    fetchingPost()
  }, [])

  return (
    <div>
      {errorPost ? <h1>Ошибка</h1> : null}
      {isLoadingPost
        ? <Loader />
        :
        <div>
          <span>Title: {post.title}</span>
          <hr/>
          <span>Description: {post.body}</span>
        </div>
      }

      <h1>Комментарии</h1>
      <Comments postId={params.id} />
    </div>
  )
}

export default PostPage