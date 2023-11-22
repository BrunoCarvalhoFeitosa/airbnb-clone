"use client"
import { SafeUser } from "@/app/types"
import Container from "@/app/components/globals/Container"
import Logo from "@/app/components/globals/Navbar/Logo"
import Search from "@/app/components/globals/Navbar/Search"
import UserMenu from "@/app/components/globals/Navbar/UserMenu"
import Categories from "@/app/components/globals/Navbar/Categories"

interface NavbarProps {
    currentUser?: SafeUser | null
}

const Navbar: React.FC<NavbarProps> = ({ currentUser }) => {
    return (
        <div className="sticky top-0 w-full bg-white shadow-sm z-10">
            <div className="py-4 border-b-[1px]">
                <Container>
                    <div className="flex flex-row justify-between items-center gap-3 md:gap-0">
                        <Logo />
                        <Search />
                        <UserMenu currentUser={currentUser} />
                    </div>
                </Container>
            </div>
            <Categories />
        </div>
    )
}

export default Navbar