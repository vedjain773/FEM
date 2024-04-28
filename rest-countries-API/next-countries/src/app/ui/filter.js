"use client";

import styles from "../page.module.css";
import { useState } from "react";

export default function Filter() {
    const [visibility, setvisibility] = useState(false);

    const toggle = () => {
        setvisibility(!visibility);
    }    
    
    const [text, settext] = useState("");

    const handleClick = (text) => {
        settext(text);
    }

    return (
        <div className={styles.filter} onClick={toggle}>
            <div className={styles.cont}>
                <p id="filtered">{text ? text : "Filter by Region"}</p>
                <span>{visibility ? "-" : "+"}</span>
            </div>
            <div style={{
                    display: visibility ? "block" : "none"
                }} className={styles.listcont}>
                    <ul className={styles.list2} id="list">
                        <li onClick={() => handleClick("Africa")}>Africa</li>
                        <li onClick={() => handleClick("Americas")}>Americas</li>
                        <li onClick={() => handleClick("Asia")}>Asia</li>
                        <li onClick={() => handleClick("Europe")}>Europe</li>
                        <li onClick={() => handleClick("Oceania")}>Oceania</li>
                    </ul>
                </div>
        </div>
    );
}