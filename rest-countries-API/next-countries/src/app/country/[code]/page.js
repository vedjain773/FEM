"use client";

import Nav from "@/app/ui/nav";
import Info from "@/app/ui/info";
import BacktoHome from "@/app/ui/BacktoHome";
import { useParams } from "next/navigation";

export default function MoreInfo() {
    const params = useParams();

    return (
        <div>
            <Nav />
            <BacktoHome />
            <Info code={params.code}/>
        </div>
    );
}

export async function generateStaticParams() {
    const countries = await fetch("http://localhost:3000/country").then((res) => res.json())

    return countries.map((country) => ({
        code: country.code
    }))
}