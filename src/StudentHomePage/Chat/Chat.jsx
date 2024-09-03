import React, { useState } from 'react'
import "./Chat.css"
import back from "/Font/backArr.svg"
import aiImg from "/Home/ai.png"
import bgChat from "/Font/bgChat.jpg"
const Chat = () => {
  const[display,setDisplay] = useState('y');
  return (
    <div className='ChatBox' style={{display:`${display}`}}>
      <div className="back">
        <img onClick={()=>setDisplay('none')} src={back} alt="" />
      </div>
      <div className="scrollPage">
      <div className="scrollableChat">
       <div className="user" >
              <p>Hi! how are you
              </p>
            </div>
            <div className="imggg">
            <img src={aiImg} alt="" />
            </div>
            <div className="reply">
            <div className="aiMsg">
            
              <p>Hey Welcome! How can i assist you today.Feel free to ask anything
              Hey Welcome! How can i assist you today.Feel free to ask anything
              </p>
            </div>
            </div>
       </div>
      
       <div className="scrollableChat">
       <div className="user" >
              <p>Hi! how are you
              </p>
            </div>
            <div className="imggg">
            <img src={aiImg} alt="" />
            </div>
            <div className="reply">
            <div className="aiMsg">
            
              <p>Hey Welcome! How can i assist you today.Feel free to ask anything
              Hey Welcome! How can i assist you today.Feel free to ask anything
              </p>
            </div>
            </div>
       </div>
       <div className="scrollableChat">
       <div className="user" >
              <p>Hi! how are you
              </p>
            </div>
            <div className="imggg">
            <img src={aiImg} alt="" />
            </div>
            <div className="reply">
            <div className="aiMsg">
            
              <p>Hey Welcome! How can i assist you today.Feel free to ask anything
              Hey Welcome! How can i assist you today.Feel free to ask anything
              </p>
            </div>
            </div>
       </div>
            
      </div>
       
            
    </div>
  )
}

export default Chat
