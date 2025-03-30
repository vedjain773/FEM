import Image from "next/image";
import heropic from "../../public/images/illustration-working.svg";
import Navbar from "./Navbar";

export default function Hero() {
    return (
        <div className="mb-35">
            <Navbar />
            <main className="grid grid-cols-2 w-[90%] mx-auto mt-24">
                <div className="flex flex-col">
                    <p className="font-poppins-bold text-7xl leading-20 text-(--very-dark-blue) mb-3">More than just shorter links</p>
                    <p className="font-poppins-reg text-(--grayish-violet) text-xl mb-10">Build your brand's recognition and get detailed insights on how your links are performing.</p>
                    <button className="bg-(--cyan) font-poppins-bold text-lg text-white rounded-full w-fit py-2 px-6 ">Get Started</button>
                </div>
                <Image
                    src={heropic}
                    alt=""
                    className="relative right-[-10rem] scale-125"
                />
            </main>
        </div>
    );
}