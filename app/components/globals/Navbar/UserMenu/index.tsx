"use client"
import { useCallback, useState } from "react"
import { signOut } from "next-auth/react"
import { useRouter } from "next/navigation"
import { SafeUser } from "@/app/types"
import { AiOutlineMenu } from "react-icons/ai"
import Avatar from "@/app/components/globals/Navbar/Avatar"
import MenuItem from "@/app/components/globals/Navbar/MenuItem"
import useRegisterModal from "@/app/hooks/useRegisterModal"
import useLoginModal from "@/app/hooks/useLoginModal"
import useRentModal from "@/app/hooks/useRentModal"

interface UserMenuProps {
    currentUser?: SafeUser | null
}

const UserMenu: React.FC<UserMenuProps> = ({ currentUser }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const registerModal = useRegisterModal()
    const loginModal = useLoginModal()
    const rentModal = useRentModal()
    const router = useRouter()

    const toggleOpen = useCallback(() => {
        setIsOpen((value) => !value)
    }, [])

    const onRent = useCallback(() => {
        if (!currentUser) {
            return loginModal.onOpen()
        }

        rentModal.onOpen()
    }, [currentUser, loginModal, rentModal])

    return (
        <div className="relative">
            <div className="flex flex-row items-center gap-3">
                <div
                    onClick={onRent}
                    className="hidden lg:block py-3 px-4 rounded-full text-sm font-semibold transition bg-neutral-100 hover:bg-neutral-200 cursor-pointer"
                >   
                    Anuncie seu espaço no Airbnb
                </div>
                <div
                    onClick={toggleOpen}
                    className="flex flex-row items-center gap-3 rounded-full p-4 lg:py-1 lg:px-2 border-[1px] border-neutral-200 transition hover:shadow-md cursor-pointer"
                >
                    <div className="text-lg">
                        <AiOutlineMenu />
                    </div>
                    <div className="hidden lg:block">
                        <Avatar src={currentUser?.image} />
                    </div>
                </div>
            </div>
            {isOpen && (
                <div className="absolute top-12 right-0 w-[40vw] lg:w-3/4 bg-white shadow-md text-sm rounded-xl overflow-hidden">
                    <div className="flex flex-col cursor-pointer">
                        {currentUser ? (
                            <>
                                <MenuItem
                                    label="Minhas viajens"
                                    onClick={() => router.push("/trips")}
                                />
                                <MenuItem
                                    label="Meus favoritos"
                                    onClick={() => router.push("/favorites")}
                                />
                                <MenuItem
                                    label="Minhas reservas"
                                    onClick={() => router.push("/reservations")}
                                />
                                <MenuItem
                                    label="Minhas propriedades"
                                    onClick={() => router.push("/properties")}
                                />
                                <MenuItem
                                    label="Anunciar meu espaço"
                                    onClick={rentModal.onOpen}
                                />
                                <hr />
                                <MenuItem
                                    label="Sair do Airbnb"
                                    onClick={() => signOut()}
                                />
                            </>
                        ) : (
                            <>
                                <MenuItem
                                    label="Cadastrar-se"
                                    onClick={registerModal.onOpen}
                                />
                                <MenuItem
                                    label="Entrar"
                                    onClick={loginModal.onOpen}
                                />
                            </>
                        )}
                    </div>
                </div>
            )}
        </div>
    )
}

export default UserMenu