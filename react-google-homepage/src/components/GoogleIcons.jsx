import React from 'react'
import Icon from '../Images/search-icon.svg'
import Mic from '../Images/google-mic-icon.png'
import Lens from '../Images/google-lens-icon.png'

export const GoogleIcons = (props) => {
  return (
   <div className='googleicons'>
      <img src={Icon} alt='search icon'/>
      <img src={Mic} alt='google mic'/>
      <img className='lens' src={Lens} alt='google lens'/>
   </div>
  )
}

export default GoogleIcons;