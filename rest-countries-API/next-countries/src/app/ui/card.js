"use client";

import styles from "../page.module.css";
import { useState, useEffect} from "react";
import Link from "next/link"; 

export default function Card({src, country_name, pop, region, capital, code}) {
    const [visibility, setvisibility] = useState(true);

    useEffect(() => {
        const search_ele = document.getElementById("search");
        const filter_ele = document.getElementById("list");

        function getValue(event) {
            if (event.target.value.toLowerCase() == country_name.toLowerCase()) {
                setvisibility(true);
            } else if (event.target.value == "") {
                setvisibility(true);
            } else if (event.target.value.toLowerCase() != country_name.toLowerCase()){
                setvisibility(false);
            }
        }

        function getFiltered(event) {
            if (event.target.textContent.toLowerCase() == region.toLowerCase()) {
                setvisibility(true);
            } else {
                setvisibility(false);
            }
        }

        search_ele.addEventListener("change", getValue);
        
        const list_items = filter_ele.children;
        var i;
        for (i = 0; i < list_items.length; i++) {
            list_items[i].addEventListener("click", getFiltered);
        }
    }, [])

    const url = "/country/" + code;

    return (
        <div className={styles.card} style={{
            display: visibility ? "block" : "none"
        }}>
            <img src={src} className={styles.flag}></img>
            <Link href={url} className={styles.clickable}>
                <div className={styles.text}>
                    <p className={styles.countryName}>{country_name}</p>
                    <ul className={styles.list}>
                        <li>Population: {pop}</li>
                        <li>Region: {region}</li>
                        <li>Capital: {capital}</li>
                    </ul>
                </div>
            </Link>
        </div>
    );
}