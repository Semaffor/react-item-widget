import React, { useEffect, useState } from 'react'
import cn from 'classnames'

import { getPageCount } from '../../util/pages'

import cl from './Pagination.module.scss'

const Pagination = ({ paginationProps, setPaginationProps }) => {

  const { totalCount, limit, page } = paginationProps
  const [totalPages, setTotalPages] = useState(0)
  const pagesNumArray = Array.from({ length: totalPages }, (_, i) => i + 1)

  useEffect(() => {
    setTotalPages(getPageCount(totalCount, limit))
  }, [totalCount, limit])


  const changePage = (pageNum) => {
    setPaginationProps({ ...paginationProps, page: pageNum })
  }

  return (
    <div className={cl.Pagination}>
      {
        pagesNumArray.map((pageNum, i) =>
          <span
            key={i}
            onClick={e => changePage(pageNum)}
            className={cn(cl.Pagination__Item, pageNum === page ? cl.Active : null)}
          >
              {pageNum}
            </span>,
        )
      }
    </div>
  )
}

export default Pagination