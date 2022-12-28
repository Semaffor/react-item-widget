import React, { useEffect, useState } from 'react'

import cl from './PostList.module.scss'
import PostItem from '../PostItem/PostItem'
import MyButton from '../UI/button/MyButton'
import { getPageCount } from '../../util/pages'
import cn from 'classnames'

const PostList = ({ posts, onDeletePost, paginationProps, setPaginationProps}) => {

  const { totalCount, limit, page } = paginationProps
  const [totalPages, setTotalPages] = useState(0)
  const pagesNumArray = Array.from({ length: 10 }, (_, i) => i + 1)

  useEffect(() => {
    setTotalPages(getPageCount(totalCount, limit))
  }, [totalCount, limit])

  if (posts.length === 0) {
    return (
      <h2>Empty.</h2>
    )
  }

  const changePage = (pageNum) => {
    setPaginationProps({...paginationProps, page: pageNum})
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
      <div className={cl.Pagination}>
        {
          pagesNumArray.map(pageNum =>
            <span
              key={pageNum}
              onClick={e => changePage(pageNum)}
              className={cn(cl.Pagination__Item, pageNum === page ? cl.Active : null)}
            >
              {pageNum}
            </span>,
          )
        }
      </div>
    </div>
  )
}

export default PostList