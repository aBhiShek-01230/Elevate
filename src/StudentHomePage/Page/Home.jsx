import React, { useState } from "react";
import "./Home.css";
import menu from "../../../public/Home/Menu.png";
import Features from "../left/left";
import home from "../../../public/Home/home.svg";
import courses from "../../../public/Font/courses.svg";
import msg from "../../../public/Font/msg.svg";
import live from "../../../public/Font/live.svg";
import cal from "../../../public/Font/calender.svg";
import doubt from "../../../public/Font/doubt.png";
import playlist from "../../../public/Font/playlist.png";
import practise from "../../../public/Font/practise.png";
import support from "../../../public/Font/support.svg";
import Card from "../middle/card";
import Search from "../Search/Search";
import Popular from "../Popular/card";
import Activity from "../Activity/activity";
import bell from "/Font/bell.svg";
import profilepic from "/Home/profile.png";
import Calendar from "../calendar/calendar";
import Greeting from "../greeting/greeting";
import AI from "../AI/AI";
import Chat from "../Chat/Chat";
import back from "/Font/backArr.svg";
import aiImg from "/Home/ai.png";
import bgChat from "/Font/bgChat.jpg";
import Ai from "/Font/AiAndImage.gif";
import DOMPurify from "dompurify";
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const recLogo = "Elev";
  const [isHidden, setIsHidden] = useState(true);
  const [width, setWidth] = useState(70);
  const [marginLeft, setmarginLeft] = useState(4);
  const [display, setDisplay] = useState(false);
  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);
  const handleChange = (e) => setInputValue(e.target.value);
  const [inputValue, setInputValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [ans, setAns] = useState("");
  const [loading, setLoading] = useState(false);
  const [loadingHistory, setLoadingHistory] = useState([false]);

  const [previousInputValue, setPreviousInputValue] = useState("");
  const [chatHistory, setChatHistory] = useState([]);

  const expand = () => {
    setIsHidden((prev) => !prev);
    setWidth((prevWidth) => (prevWidth === 70 ? 60 : 70));
    setmarginLeft((prevMargin) => (prevMargin === 4 ? 14 : 4));
  };
  const [userReply, setUserReply] = useState("");
  async function generateAnswer() {
    
    setUserReply(inputValue);
    if (inputValue !== previousInputValue) {
      setPreviousInputValue(inputValue);
      setChatHistory((prevHistory) => [...prevHistory, inputValue]);
    }
    const url =
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyAU2yUIDs0u1q6DM8d_-wxo6JRwmqLySOg";
    const data = { contents: [{ parts: [{ text: inputValue }] }] };
    setLoadingHistory((prevLoadingHistory) => [...prevLoadingHistory, true]);

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      const answer = result.candidates[0].content.parts[0].text;
      // console.log(answer);
      let parsedAnswer = answer
        .replace(/(\*{2})(.*?)\1/g, (match, p1, p2) => {
          return ` <br/> <b style="color: rgb(44, 234, 44);">${p2}</b> `;
        })
        .replace(/\*/g, () => {
          return `<br/>`;
        });

      parsedAnswer = parsedAnswer.replace(/```(.*?)```/gs, (match, code) => {
        return `<p style="color: #b70deb; padding: 10px; border-radius: 5px"> <code>${code}</code></p>`;
      });

      parsedAnswer = parsedAnswer.replace(
        /`{1,3}(.*?)`{1,3}/gs,
        (match, p3) => {
          return `<b style="color: #e3c728;" >${p3}</b>`;
        }
      );

      setAns(parsedAnswer);
      setChatHistory((prevHistory) => [
        ...prevHistory,
        { userReply: inputValue, ans: parsedAnswer },
      ]);
    } catch (error) {
      console.error("Error:", error);
    }finally {
      setLoadingHistory((prevLoadingHistory) => {
        const newLoadingHistory = [...prevLoadingHistory];
        newLoadingHistory[newLoadingHistory.length - 1] = false;
        return newLoadingHistory;
      });
    }
  }
  

  return (
  <div className="home">
      <div className="container">
      {/* left */}
      <div className="left">
        <div className="upper">
          <img src={menu} onClick={expand} alt="menu" />
          {!isHidden ? (
            <h1>
              <span style={{ color: "#6DB6DF" }}>{recLogo}</span>ate
            </h1>
          ) : null}
        </div>
        <div className="compo">
          <div className="feat">
            {/* dashboard */}
            <div className="mid">
              <img src={home} alt="menu" />
              {!isHidden ? <p>Dashboard</p> : null}
            </div>
            {/* courses */}
            <div className="mid">
              <img src={courses} alt="menu" style={{ width: "20px" }} />
              {!isHidden ? <p>Courses</p> : null}
            </div>
            {/* messages */}
            <div className="mid">
              <div className="msg">
                <img src={msg} alt="menu" />
                <span className="msg-count">2</span>
              </div>
              {!isHidden ? <p>Messages</p> : null}
            </div>
            {/* live */}
            <div className="mid">
              <img src={live} alt="menu" />
              {!isHidden ? <p>Live and Upcoming</p> : null}
            </div>
            {/* calender */}
            <div className="mid">
              <img src={cal} alt="menu" />
              {!isHidden ? <p>Calendar</p> : null}
            </div>
            {/* Doubt */}
            <div className="mid">
              <div className="msg">
                <img src={doubt} alt="menu" />
                <span
                  className="msg-count"
                  style={{ fontSize: "8px", backgroundColor: "transparent" }}
                >
                  ✅
                </span>
              </div>
              {!isHidden ? <p>Ask a Doubt</p> : null}
            </div>
            {/* playlist */}
            <div className="mid">
              <img src={playlist} alt="menu" />
              {!isHidden ? <p>Your Playlist</p> : null}
            </div>
            {/* practise */}
            <div className="mid">
              <img src={practise} alt="menu" />
              {!isHidden ? <p>Practise</p> : null}
            </div>
          </div>
          {/* support */}
          <div className="mid last">
            <img src={support} alt="menu" style={{ width: "16px" }} />
            {!isHidden ? <p>Support</p> : null}
          </div>
        </div>
        {/* features */}
      </div>

      {/* middle */}
      <div className="middle" style={{ marginLeft: `${marginLeft}%` }}>
        <div className="middleCont" style={{ width: `${width}vw` }}>
          <div className="search">
            <Search/>
            <div className="try" onClick={()=>navigate("/editor")}>Try Code Editor ↗️</div>
            <div className="try" 
            onClick={() => window.location.href = "https://chemistrylab.netlify.app/"}>
              Try Chemistry Lab ↗️</div>
            <div className="try" 
            onClick={() => window.location.href = "https://1canvas123.netlify.app/"}>Try Drawing tool ↗️</div>
          </div>
          <div className="about">
            <p>Dashboard</p>
            <div className="courses">
              <h3>My Courses</h3>
              <div className="view">
                <p>View All</p>
                <div className="line"></div>
              </div>
            </div>
          </div>
          <div className="card">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
          <div className="lowerMiddle">
            <Popular />
            <Activity />
          </div>
        </div>
      </div>

      {/* right */}
      <div className="right">
        <div className="rightCont" style={{ height: "100%" }}>
          <div className="prof">
            <div className="bell">
              <img src={bell} alt="notifications" />
            </div>
            <div className="profile">
              <div className="div1">
                <img src={profilepic} className="image1" alt="profile" />
                <p>Emily Johnson</p>
              </div>
              <img src="/Font/downArr.svg" alt="more" className="image2" />
            </div>
          </div>
          {display ? (
            <div className="chat">
              <div className="ChatBox">
                <div className="back">
                  <img
                    onClick={() => setDisplay(false)}
                    src={back}
                    alt="back"
                  />
                </div>
                <div className="scrollPage">
                  {chatHistory.map((chat, index) => (
                    <div key={index} className="scrollableChat">
                      {chat.userReply && (
                        <div className="user">
                          <p>{chat.userReply}</p>
                        </div>
                      )}
                      <div className="imggg">
                        <img src={aiImg} alt="AI" />
                        {loadingHistory[index] && <img src="/Font/loadingAnim.gif" />}
                      </div>

                      {chat.ans && (
                        <div className="reply">
                          <div className="aiMsg">
                            <p
                              className="fade-in"
                              dangerouslySetInnerHTML={{
                                __html: DOMPurify.sanitize(chat.ans),
                              }}
                            />
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div>
              <div className="greet">
                <Greeting />
              </div>
              <div className="calender">
                <Calendar />
              </div>
            </div>
          )}
          <div className="ai" onClick={() => setDisplay(true)}>
            <div className={`doubt-input ${isFocused && "focused"}`}>
             <div className="together">
             {!isFocused && !inputValue && (
                <div className="icons">
                  <img className="chat-icon" src={Ai} />
                </div>
              )}
              <input
                type="text"
                value={inputValue}
                onFocus={handleFocus}
                onBlur={handleBlur}
                onChange={handleChange}
                placeholder="Have a Doubt?"
                onKeyPress={(e) => {
                  if (e.key === "Enter" && inputValue.trim() !== "") {
                    setLoading(true);
                    generateAnswer();
                    setInputValue("");
                  }
                }}
              />
             </div>
              <img
              className="send"
                onClick={(e) => {
                  setLoading(true);
                  e.preventDefault();
                  generateAnswer();
                  setInputValue("");
                }}
                src="/Font/send.svg"
                alt="send"
                style={{
                  width: "20px",
                  cursor: inputValue ? "pointer" : "auto",
                  opacity: inputValue ? 1 : 0.8,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Home;
