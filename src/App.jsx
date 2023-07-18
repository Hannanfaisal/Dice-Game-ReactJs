import React, { useState } from "react"
import "./App.css"
import Header from "./components/Header/Header"
import StartGame from "./components/StartGame/StartGame"
import GamePlay from "./components/GamePlay/GamePlay"
import Rules from "./components/Rules/Rules"
import Footer from "./components/Footer/Footer"

export default function App() {
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [isShowRules, setIsShowRules] = useState(false);
  const [mode,setMode] = useState(true)


  const toggleShowRules = () =>{
    setIsShowRules(!isShowRules);
  }
  const toggleMode =()=>{
    setMode(!mode)
  }



  return (
    
    <div style={{backgroundColor:`${mode? "white" : "rgb(68, 53, 53)"}`,color:`${mode? "black" : "white"}` }}> 
         
      <Header toggleMode={toggleMode}/>
      
      {isGameStarted? <GamePlay rules={isShowRules} toggleRules={toggleShowRules}/> : <StartGame click={ ()=>{ setIsGameStarted(!isGameStarted) } }/>}
       {isShowRules ? <Rules/> : ""} 
       
       <Footer/>

    </div>
         
  )
}

