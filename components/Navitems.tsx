"use client";
import React from 'react'
import Link from "next/link";
import {usePathname} from "next/navigation";
import {cn} from "@/lib/utils";



const navItems = [
    {label: "Home", href: "/"},
    {label: "Companion", href: "/companion"},
    {label: "My Journey", href: "/my-journey"}

]


const Navitems = () => {
    const path = usePathname();
    console.log(path);
    return (
        <nav className="flex items-center gap-4">
            {navItems.map(({label, href}) => (
                <Link href={href} key={label} className={cn(path === href && 'text-primary font-semibold')}  >{label}</Link>
            ))}
        </nav>
    )
}
export default Navitems
