import React, { useState } from "react";
import styles from "./GamePlay.module.css";
import Box from "../Box/Box";
import Button from "../Button/Button";

export default function GamePlay(props) {

    const [isSelected,setIsSelected] = useState();
    const [rollDice, setRollDice] = useState(1);
    const [score, setScore] = useState(0);
    const [errMsg, setErrMsg] = useState("");
    const [btnType, setBtnType] = useState("black");
    

    const generateRandomDice = () =>{
        return ((Math.random() * 5) + 1).toFixed(0);
    }

    const reset = () =>{
        setScore(0);
    }

    


    const boxNumber = [1,2,3,4,5,6];

    const boxes = boxNumber.map((i,val) => {
        
        return <Box value={val} isSelected={ val == isSelected} click={()=>{
            
            
            setIsSelected(val) }}/>
    })
    
    
  return (
    <div className={styles.gamePlay}>
            <div className={styles.gamePlayHeader}>
            <div className="score">
                <h1 style={{fontSize: "100px",lineHeight:"10px",textAlign:"center"}}>{score}</h1>
                <p style={{fontSize:"24px",fontWeight:"500",lineHeight:"0px"}}>Total Score</p>
            </div>
            <div>
                <p style={{textAlign:"end", color:"red"}}>{errMsg}</p>
                <div className={styles.numberRow}>
                  {boxes }
                </div>
                <p style={{textAlign:"end",lineHeight:"10px",fontWeight:"600",fontSize:"24px"}}>Select Number</p>
            </div>
        </div>
        <div className="body" style={ {marginTop:"25px", alignItems:"center", display:"flex",flexDirection:"column"}}>
                <img className={styles.diceImg} onClick={()=>{

                    if(isSelected == null){
                        setErrMsg("You have not selected any number")
                        return
                    }
                    else{
                        setErrMsg("")
                    }          
                    
                     setIsSelected()

                    setRollDice(generateRandomDice)

                    

                    if(isSelected === generateRandomDice){
                        setScore( (score)=>score+generateRandomDice)
                    }
                    else{
                        setScore((score)=>score-2)
                    }

                }} src={`images/dice_${rollDice}.png`} width="250" height="250" alt="" /> 
                <p style={{fontWeight:"500",fontSize:"20px"}}>Click on the Dice to roll</p>
                <Button title="Reset Score" type={btnType} click={reset}/>
                <div style={{height:"15px"}}></div>
                <Button title={props.rules === false ? "Show Rules":"Hide Rules"} click={props.toggleRules}/>
            </div>
    </div>
  )
}
