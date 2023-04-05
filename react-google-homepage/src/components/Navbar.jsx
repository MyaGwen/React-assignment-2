import React from 'react'
import MenuIcon from './menuicon';
import Avatar from './Avatar'

export const Navbar = () => {
  return (
    <div className='Navbar'>
      <ul><li><a href="#">Gmail</a></li></ul>
      <ul><li><a href="#">Images</a></li></ul>
        <MenuIcon />
        <Avatar text='W'/>
        
    </div>
  )
}

export default Navbar