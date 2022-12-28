import React from 'react'

import cl from './MyButton.module.scss'

const MyButton = ({ children, ...props }) => {
  return (
    <button {...props} className={cl.Button}>
      {children}
    </button>
  )
}

export default MyButton