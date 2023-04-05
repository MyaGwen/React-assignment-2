import React from 'react'
import Icon from '../Images/menubutton.svg'

export const MenuIcon = (props) => {
  return (
    <img className='Menu'  src={Icon} alt={props.text}/>
  )
}

export default MenuIcon