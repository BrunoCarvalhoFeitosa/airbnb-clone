"use client"
import { usePathname, useSearchParams } from "next/navigation"
import { TbBeach, TbMountain, TbPool } from "react-icons/tb"
import { GiBoatFishing, GiCactus, GiCastle, GiCaveEntrance, GiForestCamp, GiIsland, GiWindmill } from "react-icons/gi"
import { FaSkiing } from "react-icons/fa"
import { BsSnow } from "react-icons/bs"
import { IoDiamond } from "react-icons/io5"
import { MdOutlineVilla } from "react-icons/md"
import Container from "@/app/components/globals/Container"
import CategorieBox from "@/app/components/globals/Navbar/CategorieBox"

export const categories = [
    {
        label: "Praia",
        icon: TbBeach,
        description: "Este imóvel fica perto da praia.",
    },
    {
        label: "Moinhos",
        icon: GiWindmill,
        description: "Este imóvel fica perto de moinhos",
    },
    {
        label: "Moderno",
        icon: MdOutlineVilla,
        description: "Esta imóvel é moderno."
    },
    {
        label: "Interior",
        icon: TbMountain,
        description: "Este imóvel fica no campo."
    },
    {
        label: "Piscina",
        icon: TbPool,
        description: "Este imóvel possui uma bela piscina."
    },
    {
        label: "Ilhas",
        icon: GiIsland,
        description: "Este imóvel fica em uma ilha."
    },
    {
        label: "Lago",
        icon: GiBoatFishing,
        description: "Este imóvel fica perto de um lago."
    },
    {
        label: "Esqui",
        icon: FaSkiing,
        description: "Este imóvel oferece atividades de esqui."
    },
    {
        label: "Castelos",
        icon: GiCastle,
        description: "Este imóvel é um castelo antigo."
    },
    {
        label: "Cavernas",
        icon: GiCaveEntrance,
        description: "Este imóvel fica próximo a uma caverna."
    },
    {
        label: "Acampamento",
        icon: GiForestCamp,
        description: "Este imóvel oferece atividades de acampamento."
    },
    {
        label: "Ártico",
        icon: BsSnow,
        description: "Este imóvel é em um ambiente ártico."
    },
    {
        label: "Deserto",
        icon: GiCactus,
        description: "Este imóvel fica no deserto."
    },
    {
        label: "Luxo",
        icon: IoDiamond,
        description: "Este imóvel é novo e luxuoso"
    }
]

const Categories = () => {
    const params = useSearchParams()
    const category = params?.get("category")
    const pathname = usePathname()
    const isMainPage = pathname === "/"

    if (!isMainPage) {
        return null
    }

    return (
        <Container>
            <div className="flex flex-row justify-between items-center pt-4 overflow-x-auto">
                {categories.map((item) => (
                    <CategorieBox
                        key={item.label}
                        label={item.label}
                        selected={category === item.label}
                        icon={item.icon}
                    />
                ))}
            </div>
        </Container>
    )
}

export default Categories