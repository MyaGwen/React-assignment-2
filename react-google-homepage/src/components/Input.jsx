import React from 'react'
import { useState } from 'react';

export const Input = () => {
  const [input, setInput] = useState('');
  const [list, setList] = useState([]);

  function updateInput(e){
    setInput(e.target.value);
  }

  const enterKeyPressed = ({ key }) => {
    // Capture search on Enter key
    if (key === "Enter") {
      setList(list => [...list, input])
      setInput('');
    }
  }

  const Search = ({ query }) => <li>{query}</li>

  
  return (
    <div className='input-wrapper'>
      <div className='input-container'>
        <input className='input-field' placeholder='search' onChange={updateInput} onKeyDown={enterKeyPressed} value ={input} />
      </div>
    </div>
  )
}

export default Input;