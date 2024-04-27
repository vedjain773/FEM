"use client";

import styles from "../page.module.css";
import { useState } from "react";

export default function Nav() {
    const [theme, settheme] = useState(true);
    function toggle() {
        settheme(!theme);
    }

    return (
        <div className={styles.navcont}>
            <nav className={styles.nav}>
                <p>Where in the world?</p>
                <button className={styles.button} id={theme ? "light" : "dark"} onClick={toggle}>{theme ? "Light" : "Dark"} Mode</button>
            </nav>
        </div>
    );
}