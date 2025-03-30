"use client"
import { useState } from "react";
import { motion } from "motion/react";

export default function Short({ogLink, shortened}) {
    const [butText, setButText] = useState(true);

    const copy = () => {
        navigator.clipboard.writeText(shortened);

        setTimeout(() => {
            setButText(false);
        }, 200);

        setTimeout(() => {
            setButText(true);
        }, 1000);
    }

    return (
        <motion.div 
            className="w-[90%] mx-auto flex justify-between p-4 items-center bg-white rounded-lg mb-4"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 0.2,
                scale: { type: "spring", visualDuration: 0.2, bounce: 0.2 },
            }}
            >
            <p>{ogLink}</p>
            <section className="flex gap-4 items-center">
                <p className="text-(--cyan)">{shortened}</p>
                <button className="cursor-pointer text-lg text-white px-3 py-2 rounded-lg font-poppins-sbold" onClick={copy} style={{ background: butText ? "var(--cyan)" : "var(--dark-violet"}}>{butText ? "Copy" : "Copied!"}</button>
            </section>
        </motion.div>
    );
}