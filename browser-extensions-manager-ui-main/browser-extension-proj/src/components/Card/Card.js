"use client"

import { useState } from "react";
import styles from "./Card.module.css"

export default function Card({logo, name, desc, active_, onToggleOn, onToggleOff, remove}) {
    const [active, setActive] = useState(active_);

    const handleRadioOn = () => {
        setActive(true);
        onToggleOn();
    }

    const handleRadioOff = () => {
        setActive(false);
        onToggleOff();
    }

    return (
        <div className={styles.card}>
            <div className={styles.top}>
                <img src={logo}></img>
                <div>
                    <div className={styles.name}>{name}</div>
                    <div className={styles.desc}>{desc}</div>
                </div>
            </div>
            <div className={styles.bottom}>
                <button onClick={remove}>Remove</button>
                <fieldset style={{backgroundColor: active ? "var(--card-radio-bg-active)" : "var(--card-radio-bg)"}}>
                    <input type="radio" name={`${name}`} onClick={handleRadioOn} defaultChecked={active ? true : false}></input>
                    <input type="radio" name={`${name}`} onClick={handleRadioOff} defaultChecked={!active ? true: false}></input>
                </fieldset>
            </div>
        </div>
    );
}