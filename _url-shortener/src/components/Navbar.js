import Image from "next/image";
import logo from "../../public/images/logo.svg";

export default function Navbar() {
    return (
        <nav className="font-poppins-med w-[90%] mx-auto mb-5 flex justify-between items-center">
            <section className="flex gap-8 items-center">
                <Image 
                    src={logo}
                    alt=""                
                />
                <div className="text-(--gray)">Features</div>
                <div className="text-(--gray)">Prices</div>
                <div className="text-(--gray)">Resources</div>
            </section>
            <section className="flex gap-8 items-center">
                <div className="text-(--gray)">Login</div>
                <button className="text-white font-poppins-sbold rounded-full px-5.5 py-2 bg-(--cyan)">Sign Up</button>
            </section>
        </nav>
    );
}