"use client"
import Link from "next/link"
import Airbnb from "@/public/svgs/Airbnb"

const Logo = () => {
    return (
        <Link href="/" className="cursor-pointer">
            <Airbnb width="120" height="48" />
        </Link>
    )
}

export default Logo