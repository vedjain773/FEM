"use client"

import styles from "./CardGrp.module.css"
import data from "../../../data/data.json"
import Card from "../Card/Card";
import { useState } from "react";

export default function CardGrp() {
    const [complist, setCompList] = useState(data);
    const [list, setList] = useState(data);

    const [filterStat, setFilterStat] = useState({
        all: true,
        active: false,
        inactive: false
    });

    const toggleFilters = (id) => {
        if (id == 0) {
            setFilterStat({
                all: true,
                active: false,
                inactive: false
            });

            setList(complist);
        } else if (id == 1) {
            setFilterStat({
                all: false,
                active: true,
                inactive: false
            });

            setList(complist.filter((item) => {
                return item.isActive == true;
            }));
        } else if (id == 2) {
            setFilterStat({
                all: false,
                active: false,
                inactive: true
            });

            setList(complist.filter((item) => {
                return item.isActive == false;
            }));
        }
    }

    const toggleCardOn = (id) => {
        let newList = list;
        
        for (let i = 0; i < newList.length; i++) {
            if (newList[i].id == id) {
                newList[i].isActive = true;
            }
        }

        setList(newList);

        if (filterStat.active) {
            toggleFilters(1);
        } else if (filterStat.inactive) {
            toggleFilters(2);
        }

        let newCompList = complist;

        for (let i = 0; i < newCompList.length; i++) {
            if (newCompList[i].id == id) {
                newCompList[i].isActive = true;
            }
        }

        setCompList(newCompList);
    }

    const toggleCardOff = (id) => {
        let newList = list;
        
        for (let i = 0; i < newList.length; i++) {
            if (newList[i].id == id) {
                newList[i].isActive = false;
            }
        }

        setList(newList);

        if (filterStat.active) {
            toggleFilters(1);
        } else if (filterStat.inactive) {
            toggleFilters(2);
        }

        let newCompList = complist;

        for (let i = 0; i < newCompList.length; i++) {
            if (newCompList[i].id == id) {
                newCompList[i].isActive = false;
            }
        }

        setCompList(newCompList);
    }

    const remove = (id) => {
        const newList = list.filter(item => {
            return item.id != id;
        });
        setList(newList);

        const newCompList = complist.filter((item) => {
            return item.id != id;
        });
        setCompList(newCompList);
    }

    return (
        <>
            <div className={styles.filter}>
                <div className={styles.text}>Extension List</div>
                <div className={styles.btnGrp}>
                    <button onClick={() => toggleFilters(0)} style={{backgroundColor: filterStat.all ? "var(--filter-btn-active)" : "var(--filter-btn-bg)", color: filterStat.all ? "var(--filter-text-active)" : "var(--filter-text)"}}>All</button>
                    <button onClick={() => toggleFilters(1)} style={{backgroundColor: filterStat.active ? "var(--filter-btn-active)" : "var(--filter-btn-bg)", color: filterStat.active ? "var(--filter-text-active)" : "var(--filter-text)"}}>Active</button>
                    <button onClick={() => toggleFilters(2)} style={{backgroundColor: filterStat.inactive ? "var(--filter-btn-active)" : "var(--filter-btn-bg)", color: filterStat.inactive ? "var(--filter-text-active)" : "var(--filter-text)"}}>Inactive</button>
                </div>
            </div>

            <div className={styles.cardgrp}>
                {list.map((item) => {
                    return (
                        <Card
                        name={item.name}
                        desc={item.description}
                        logo={item.logo}
                        active_={item.isActive}
                        onToggleOn={() => toggleCardOn(item.id)}
                        onToggleOff={() => toggleCardOff(item.id)}
                        remove={() => remove(item.id)}
                        key={item.id}
                        />
                    );
                })}
            </div>
        </>
    );
}