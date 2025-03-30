import Image from "next/image";
import logo from "../../public/images/logo.svg";
import facebook from "../../public/images/icon-facebook.svg";
import twitter from "../../public/images/icon-twitter.svg";
import pinterest from "../../public/images/icon-pinterest.svg";
import instagram from "../../public/images/icon-instagram.svg";

export default function Footer() {
    return (
        <footer className="bg-(--very-dark-violet)">
            <div className="w-[90%] mx-auto flex items-start justify-between py-12">
                <section>
                    <Image
                        src={logo}
                        alt=""
                    />
                </section>
                <section className="flex text-[1rem] font-poppins-med text-(--grayish-violet) gap-10">
                    <ul>
                        <li className="text-white font-poppins-sbold mb-3 text-[1.125rem]">Features</li>
                        <li className="mb-1">Link Shortening</li>
                        <li className="mb-1">Branded links</li>
                        <li>Analytics</li>
                    </ul>

                    <ul>
                        <li className="text-white font-poppins-sbold mb-3 text-[1.125rem]">Resources</li>
                        <li className="mb-1">Blog</li>
                        <li className="mb-1">Developers</li>
                        <li>Support</li>
                    </ul>

                    <ul>
                        <li className="text-white font-poppins-sbold mb-3 text-[1.125rem]">Company</li>
                        <li className="mb-1">About</li>
                        <li className="mb-1">Our Team</li>
                        <li className="mb-1">Careers</li>
                        <li>Contact</li>
                    </ul>
                </section>
                <section className="flex gap-5">
                    <Image src={facebook} alt="facebook" />
                    <Image src={twitter} alt="twitter" />
                    <Image src={pinterest} alt="pinterest" />
                    <Image src={instagram} alt="instagram" />
                </section>
            </div>
        </footer>
    );
}