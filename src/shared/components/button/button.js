import React from 'react'
import { Link } from 'react-router-dom'
import './button.scss'
import ButtonTypes from './buttonTypes'


export default function Button({type, text, buttonFn, route}) {
  if (type === ButtonTypes.BUTTON) {
    return (
      <button className='button' type='button' onClick={buttonFn}></button>
    )
  }
  if (type === ButtonTypes.LINK) {
    return (
      <button className='button' type='button'><Link to={route}>{text}</Link></button>
    )
  }
}
