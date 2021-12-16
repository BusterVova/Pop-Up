import React from 'react'
import './Checkbox.scss'

const Checkbox = ({label}) => {
  return (
    <label className="element_label">
      {label()}
      <input type="checkbox" />
      <span className="checkmark"></span>
    </label>
  )
}

export default Checkbox