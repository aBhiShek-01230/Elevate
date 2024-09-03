import React, { useState } from 'react';
import './AI.css';
import Ai from "/Font/AiAndImage.gif"

const AI = () => {
  const [inputValue, setInputValue] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);
  const handleChange = (e) => setInputValue(e.target.value);

  return (
    <div className={`doubt-input ${isFocused && 'focused'}`} >
      {!isFocused && !inputValue && (
        <div className="icons">
          <img className="chat-icon" src={Ai}/>
        </div>
      )}
      <input
        type="text"
        value={inputValue}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleChange}
        placeholder="Have a Doubt?"
      />
      <img 
        src="/Font/send.svg" 
        alt="send" 
        style={{
          width: '20px',
          cursor: inputValue ? 'pointer' : 'auto',
          opacity: inputValue ? 1 : 0.8
        }} 
      />
    </div>
  );
};

export default AI;