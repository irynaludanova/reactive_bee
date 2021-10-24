import React from "react"
import classes from "./MySelect.module.css"
export const MySelect = ({ options, defaultValue, value, onChange }) => {
  return (
    <select
      className={classes.mySelect}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      <option disabled value="value">
        {defaultValue}
      </option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.name}
        </option>
      ))}
    </select>
  )
}
