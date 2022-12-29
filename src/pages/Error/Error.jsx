import React from 'react'

import img_forbidden from '../../assets/forbidden.png'
import img_notFound from '../../assets/notFound.png'

const Error = ({ errorCode }) => {

  if (errorCode === 403) {
    return (
      <>
        <img src={img_forbidden} alt={"error 403"}/>
      </>
    )
  }

  if (errorCode === 404) {
    return (
      <>
        <img src={img_notFound} alt={"error 403"}/>
      </>
    )
  }
}

export default Error