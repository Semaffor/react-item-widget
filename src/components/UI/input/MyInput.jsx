import React from 'react'

import cl from './MyInput.module.scss'

const MyInput = ({...props}) => {
  return (
    <input className={cl.MyInput} {...props}/>
  )
}

export default MyInput