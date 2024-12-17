import React from 'react'
import './Button.css'
const Button = (props) => {
  return (
    <div>
      <button onClick={props.callApi}>Click to generate a joke</button>
    </div>
  )
}

export default Button
