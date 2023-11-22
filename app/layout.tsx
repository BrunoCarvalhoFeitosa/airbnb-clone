import type { Metadata } from "next"
import { Nunito } from "next/font/google"
import { Theme } from "@radix-ui/themes"
import ClientOnly from "@/app/components/globals/ClientsOnly"
import ToasterProvider from "@/app/providers/ToasterProvider"
import getCurrentUser from "@/app/actions/getCurrentUser"
import Navbar from "@/app/components/globals/Navbar"
import RegisterModal from "@/app/components/globals/Modals/RegisterModal"
import LoginModal from "@/app/components/globals/Modals/LoginModal"
import RentModal from "@/app/components/globals/Modals/RentModal"
import SearchModal from "@/app/components/globals/Modals/SearchModal"
import Footer from "@/app/components/globals/Footer"
import "@radix-ui/themes/styles.css"
import "./globals.css"

const font = Nunito({ subsets: ["latin"] })

export const dynamic = "force-dynamic"

export const metadata: Metadata = {
    title: "Airbnb, faça sua reserva e viaje para onde quiser com a sua família.",
    description: "Airbnb, faça sua reserva para casas, chalés e pousadas localizadas em lugares paradisíacos.",
    icons: {
        icon: "/images/fav.png",
        shortcut: "/images/fav.png"
    },
    authors: {
        name: "Bruno Carvalho Feitosa",
        url: "https://br.linkedin.com/in/bruno-carvalho-feitosa"
    }
}

export default async function RootLayout({ children }: {
    children: React.ReactNode
}) {
    const currentUser = await getCurrentUser()
  
    return (
        <html lang="pt-br">
            <body className={font.className}>
                <Theme>
                    <ClientOnly>
                        <ToasterProvider />
                        <Navbar currentUser={currentUser} />
                        <RegisterModal />
                        <LoginModal />
                        <RentModal />
                        <SearchModal />    
                    </ClientOnly>
                    <div>
                        {children}
                    </div>
                    <ClientOnly>
                        <Footer />
                    </ClientOnly>
                </Theme>
            </body>
        </html>
    )
}