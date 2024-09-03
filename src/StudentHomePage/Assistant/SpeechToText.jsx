import React, { useState } from 'react'
import "./SpeechToText.css"
const SpeechToText = () => {
  const[textInput,setTextInput] = useState('');
  return (
    <div className='main'>
    
      <textarea name="" id=""
      placeholder='Write something or try "Text to Speech" Feature'
      value={textInput}
      onChange={(e)=>{setTextInput(e.target.value)}}
      > 
      </textarea>

      <button>
        Speak
      </button>
    </div>
  )
}

export default SpeechToText

