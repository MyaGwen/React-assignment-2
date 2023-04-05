import React from 'react'
import Icon from '../Images/search-icon.svg'
import Mic from '../Images/google-mic-icon.png'
import Lens from '../Images/google-lens-icon.png'
import Input from './Input'

export const InputIcons = (props) => {
  return (
   <div className='inputicons'>
      <img src={Icon} alt='search icon'/>
      <Input />
      <img src={Mic} alt='google mic'/>
      <img className='lens' src={Lens} alt='google lens'/>
   </div>
  )
}

export default InputIcons;