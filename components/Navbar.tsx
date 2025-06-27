import React from 'react'
import Link from 'next/link'
import Image from "next/image";
import image from "../public/images/logo.svg"
import Navitems from "@/components/Navitems";

const Navbar = () => {
    return (
        <nav className="navbar">
            <Link href={"/"} >
                <div className="flex items-center gap-2.5 cursor-pointer">
                    <Image src={image} alt={'logo'} width={46} height={44} />
                </div>
            </Link>
            <div className="flex items-center gap-8">
                <Navitems />
            </div>
        </nav>
    )
}
export default Navbar
