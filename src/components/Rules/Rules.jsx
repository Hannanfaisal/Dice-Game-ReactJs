import React from "react";
import styles from "./Rules.module.css"

export default function Rules() {
  return (
    <div className={styles.rules}>
        <h1>How to play Dice game</h1>
        <p>Select any number</p>
        <p>Click on dice image</p>
        <p>After click on  dice  if selected number is equal to dice number you will get same point as dice </p>
        <p>If you get wrong guess then  2 point will be dedcuted </p>
    </div>
  )
}
