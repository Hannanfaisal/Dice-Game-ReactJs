import React from "react";
import styles from "./Box.module.css";

export default function Box(props) {
  return (
    <div onClick={props.click} className={props.isSelected?styles.selectedBox : styles.box}>
      <h3>{props.value}</h3>  
    </div>
  )
}

