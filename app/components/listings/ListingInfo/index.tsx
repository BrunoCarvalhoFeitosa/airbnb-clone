"use client"
import dinamyc from "next/dynamic"
import { IconType } from "react-icons"
import { SafeUser } from "@/app/types"
import useCountries from "@/app/hooks/useCountries"
import Avatar from "@/app/components/globals/Navbar/Avatar"
import ListingCategory from "../ListingCategory"

const Map = dinamyc(() => import("@/app/components/globals/Map"), {
    ssr: false
})

interface ListingInfoProps {
    user: SafeUser | undefined
    description: string
    guestCount: number
    roomCount: number
    bathroomCount: number
    locationValue: string
    category: {
        icon: IconType
        label: string
        description: string
    } | undefined
}

const ListingInfo: React.FC<ListingInfoProps> = ({
    user,
    description,
    guestCount,
    roomCount,
    bathroomCount,
    category,
    locationValue
}) => {
    const { getByValue } =  useCountries()
    const coordinates = getByValue(locationValue)?.latlng

    return (
        <div className="flex flex-col gap-8 col-span-4">
            <div className="flex flex-col gap-2">
                <div className="flex flex-row items-center gap-2 text-xl font-semibold">
                    <div className="w-full truncate">Propriedade de {user?.name}</div>
                    <Avatar src={user?.image} />
                </div>
                <div className="flex flex-row items-center gap-4 font-light text-neutral-500">
                    <div>
                        {guestCount} hospedes
                    </div>
                    <div>
                        {roomCount} quartos
                    </div>
                    <div>
                        {bathroomCount} banheiros
                    </div>
                </div>
            </div>
            <hr />
            <div>
                {category && (
                    <ListingCategory
                        icon={category.icon}
                        label={category.label}
                        description={category.description}
                    />
                )}
            </div>
            <hr />
            <div className="text-lg font-light text-neutral-500">
                {description}
            </div>
            <hr />
            <div>
                <Map center={coordinates} />
            </div>
        </div>
    )
}

export default ListingInfo