"use client";
import { useState } from "react";
import axios from "axios";
import Short from "./Short";

export default function ShortIn() {
    const [linkArr, setlinkArr] = useState([]);
    const [short, setShort] = useState([]);

    const sendReq = (req) => {
        const data = {
            url: req
        };

        const resp = axios.post("https://spoo.me", data, {
            headers: {
                'content-type': 'application/x-www-form-urlencoded',
                Accept: 'application/json',
            }
        }).then(res => res.data);

        return resp;
    }

    const [isFull, setisFull] = useState(true);

    const updateArr = async (value) => {
        if (value != "") {
            const test = await sendReq(value);

            setlinkArr([...linkArr, value]);
            setShort([...short, test.short_url]);
            setisFull(true);
        } else {
            setisFull(false);
        }
    }

    return (
        <div className="relative top-[-3.5rem]">
            <div className="w-[90%] bg-(--dark-violet) mx-auto rounded-lg overflow-hidden mb-6">
                <div className="bg-[url(/images/bg-boost-desktop.svg)] bg-cover p-8 mt-1">
                    <section className="flex justify-between gap-8">
                        <input className="outline-none block text-xl grow bg-white px-4 rounded-lg" placeholder="Shorten a link here" />
                        <button className="cursor-pointer bg-(--cyan) text-xl text-white px-5 py-3 rounded-lg font-poppins-sbold" onClick={(ev) => {updateArr(ev.currentTarget.previousSibling.value)}}>Shorten It!</button>
                    </section>
                    <p className="text-red-500" style = {{display: isFull ? "none" : "block"}}>Please enter a valid URL</p>
                </div>
            </div>

            {linkArr.map((link, index) => (
                <Short ogLink={link} shortened={short[index]} key={index} />
            ))}
        </div>
    );
}