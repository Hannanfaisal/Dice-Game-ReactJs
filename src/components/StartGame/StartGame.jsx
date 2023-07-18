import React from 'react'
import styles from "./StartGame.module.css"
import Button from '../Button/Button'
import GamePlay from '../GamePlay/GamePlay'

export default function StartGame(props) {
    
  return (
    <div className={styles.startGame}>
        <div className="img">
            <img src="images/dices.png" alt="" srcset="" />
        </div>
        <div className={styles.content}>
               <h1>DICE GAME</h1>
            
            <div className='btn'><Button click={ props.click } title="Play Now"/></div>
          
        </div>
    </div>
  )
}
