import React from 'react'
import { Link } from 'react-router-dom'
import './button.scss'


export default function Button({type, text, mods}) {
  return (
    <button className='button' type='button'><Link to="/about">Home</Link></button>
  )
}
