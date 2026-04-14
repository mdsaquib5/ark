import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import { LiaLinkedinIn } from "react-icons/lia";
import { IoMdCall } from "react-icons/io";
import { MdOutlineAlternateEmail, MdOutlineWhatsapp } from "react-icons/md";

const Footer = () => {
    return (
        <>
            <footer>
                <div className="footer-content">
                    <h2 className="footer-title">NOOHARK</h2>
                    <p className="footer-desc">
                        Elevating your digital presence with cutting-edge solutions.
                        Let's collaborate on your next big idea.
                    </p>

                    <div className="footer-divider"></div>

                    <div className="footer-bottom">
                        <div className="footer-brand">© 2026 noohArk. All rights reserved.</div>
                        <div className="footer-links">
                            <Link href={'https://www.linkedin.com/company/noohark-technologies'} target="_blank"><LiaLinkedinIn size={20} />LinkedIn</Link>
                            <Link href={'https://www.instagram.com/noohark_tech'} target="_blank"><FaInstagram size={20} />Instagram</Link>
                            <Link href={'https://wa.me/917389221938'} target="_blank"><MdOutlineWhatsapp size={20} />Whatsapp</Link>
                            <Link href={'mailto:nooharktechnologies@gmail.com'} target="_blank"><MdOutlineAlternateEmail size={20} />Email</Link>
                            <Link href={'tel:+917389221938'} target="_blank"><IoMdCall size={20} />Phone</Link>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;