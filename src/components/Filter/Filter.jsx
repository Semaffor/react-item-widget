import React from 'react'

import MyInput from '../UI/input/MyInput'

import cl from './Filter.module.scss'

const Filter = ({ filter, setFilter }) => {
  const waysToSort = [
    { value: 'title', body: 'Title' },
    { value: 'description', body: 'Description' },
  ]

  const onChangeFilterState = (prop, value) => {
    setFilter({ ...filter, [prop]: value })
  }
  return (
    <div>
      <MyInput
        value={filter.query}
        onChange={e => onChangeFilterState('query', e.target.value)}
        placeholder={'Search...'}
      />
      <select
        className={cl.Filter}
        value={filter.sort}
        onChange={e => onChangeFilterState('sort', e.target.value)}
      >
        <option value={''} disabled>Sort by</option>
        {
          waysToSort.map(({ value, body }, i) =>
            <option
              key={i}
              value={value}
            >
              {body}
            </option>,
          )
        }
      </select>
    </div>
  )
}

export default Filter