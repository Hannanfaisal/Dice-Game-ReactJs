import React from "react";
import styles from "./Button.module.css";

export default function Button(props) {
 //    const [title ,click] = props;
  return (
    <button onClick={props.click} className={ props.type === "black"? styles.btn : styles.btnOutline}>
        {props.title}
    </button>
  )
}
