import React from 'react'

const Filter = ({options, defaultValue, onChange, value}) => {
  return (
    <select
      value={value}
      onChange={e => onChange(e.target.value)}
    >
      <option value={''} disabled>{defaultValue}</option>
      {
        options.map(({value, body}, i) =>
          <option
            key={i}
            value={value}
          >
            {body}
          </option>
        )
      }
    </select>
  )
}

export default Filter