import React from 'react'

export const Footer = () => {
  return (
    <footer>
      <div className='location'>Ghana</div>
      <div className='footer-cols'>
        <div className='left-col'>
          <ul>
            <li><a href="#">About</a></li>
            <li><a href="#">Advertising</a></li>
            <li><a href="#">Business</a></li>
            <li><a href="#">How Search works</a></li>
          </ul>
        </div>
        <div className='right-col'>
          <ul>
            <li><a href="#">Privacy</a></li>
            <li><a href="#">Terms</a></li>
            <li><a href="#">Settings</a></li>
          </ul>
        </div>
      </div>
    </footer >
  )
}

export default Footer;

