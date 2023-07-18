import React from "react";
import styles from "./Header.module.css";

export default function Header(props) {
   
  return (
    <nav className={styles.navbar}>
        <div className="nav-logo">
            <img src="images/dice_3.png" alt="" width="50px" height="50px" srcset="" />
            <h1>Dice Game</h1>
        </div>
        <ul className="navlist">
            <li>Home</li>
            <li>Contact</li>
            <li>About</li>
            <li><input type="checkbox" name="radio"  onClick={props.toggleMode} />Light Mode</li>
        </ul>
    </nav>
  )
}
