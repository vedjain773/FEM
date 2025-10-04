"use client"

import styles from "./Navbar.module.css"
import { useState } from "react";

export default function Navbar() {
    const [theme, setTheme] = useState("dark");

    const handleClick = () => {
        if (theme == "dark") {
            setTheme("light");
        } else {
            setTheme("dark");
        }
    }

    return (
        <>
            <nav className={styles.navbar}>
                <img src="assets/images/logo.svg"></img>
                <img onClick={handleClick} id={theme == "dark" ? "dark" : "light"} className={styles.theme} src={theme == "dark" ? "assets/images/icon-sun.svg" : "assets/images/icon-moon.svg"}></img>
            </nav>
        </>
    );
}