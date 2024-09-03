import { Box } from "@chakra-ui/react";
import Login from "./Login/page/Login"
import Register from "./Register/page/Login"
import Home from "./StudentHomePage/Page/Home"
import Editor from "../src/Editor/src/components/CodeEditor"
import Drawing from "../src/Draw/DrawingApp"
import SpeechToText from "./StudentHomePage/Assistant/SpeechToText"
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom'; 

const  App = () => {
  return (
    <Router> 
      <Routes> 
        <Route path='/' element={<Home />} /> 
        <Route path='/login' element={<Login />} /> 
        <Route path='/register' element={<Register />} />
        <Route path='/editor' element={<Editor />} />
       
        </Routes>
     </Router>
    
  )
}

export default App
