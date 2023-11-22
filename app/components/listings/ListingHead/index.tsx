"use client"
import Image from "next/image"
import { SafeUser } from "@/app/types"
import useCountries from "@/app/hooks/useCountries"
import Heading from "@/app/components/globals/Modals/Heading"
import HeartButton from "@/app/components/globals/HeartButton"

interface ListingHeadProps {
    title: string
    imageSrc: string
    locationValue: string
    id: string
    currentUser?: SafeUser | null
}

const ListingHead: React.FC<ListingHeadProps> = ({
    title,
    imageSrc,
    locationValue,
    id,
    currentUser
}) => {
    const { getByValue } = useCountries()
    const location = getByValue(locationValue)

    return (
        <>
            <div className="pt-8">
                <Heading
                    title={title}
                    subtitle={`${location?.region}, ${location?.label}`}
                />
            </div>
            <div className="relative w-full h-[60vh] rounded-xl overflow-hidden">
                <div>
                    <Image
                        fill
                        src={imageSrc}
                        alt="Foto do imovel"
                        className="w-full object-cover transition hover:scale-125 cursor-zoom-in"
                    />
                </div>
                <div className="absolute top-5 right-5">
                    <HeartButton
                        listingId={id}
                        currentUser={currentUser}
                    />
                </div>
            </div>
        </>
    )
}

export default ListingHead