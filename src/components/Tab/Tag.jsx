import React from "react";
import './Tag.scss'

const Tag = ({name, value, onChange, active}) => {
  return (
    <div className="tag-wrapper">
      <input type="radio" id={name}
             className="tag-input"
             checked={active === value}
             onChange={onChange}
             name={name} value={value} />
        <label className="tag-label"
               htmlFor={name}>{name}
        </label>
    </div>
  )
}

export default Tag