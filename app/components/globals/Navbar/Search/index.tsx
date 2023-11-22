"use client"
import { useMemo } from "react"
import { useSearchParams } from "next/navigation"
import { BiSearch } from "react-icons/bi"
import useSearchModal from "@/app/hooks/useSearchModal"
import useCountries from "@/app/hooks/useCountries"
import { differenceInDays } from "date-fns"

const Search = () => {
    const searchModal = useSearchModal()
    const params = useSearchParams()
    const { getByValue } = useCountries()
    const locationValue = params?.get("locationValue")
    const startDate = params?.get("startDate")
    const endDate = params?.get("endDate")
    const guestCount = params?.get("guestCount")

    const locationLabel = useMemo(() => {
        if (locationValue) {
            return getByValue(locationValue as string)?.label
        }

        return "Qualquer lugar"
    }, [getByValue, locationValue])

    const durationLabel = useMemo(() => {
        if (startDate && endDate) {
            const start = new Date(startDate as string)
            const end = new Date(endDate as string)
            let diff = differenceInDays(end, start)

            if (diff === 0) {
                diff = 1
            }

            return `${diff} dias`
        }

        return "Qualquer semana"
    }, [])

    const guestLabel = useMemo(() => {
        if (guestCount) {
            return `${guestCount} hóspedes`
        }

        return "Adicionar"
    }, [guestCount])

    return (
        <div
            onClick={searchModal.onOpen}
            className="w-auto md:w-3/4 lg:w-auto md:mx-5 py-3 rounded-full border-[1px] shadow-md transition cursor-pointer"
        >
            <div className="flex flex-row justify-between items-center">
                <div className="pl-6 pr-2 lg:px-6 text-xs lg:text-sm font-semibold">
                    {locationLabel}
                </div>
                <div className="hidden md:block px-2 lg:px-6 flex-1 text-xs lg:text-sm font-semibold text-center border-x-[1px]">
                    {durationLabel}
                </div>
                <div className="flex flex-row items-center gap-3 pl-6 pr-2 text-xs lg:text-sm text-gray-500">
                    <div className="hidden md:block">
                        {guestLabel}
                    </div>
                    <div className="p-2 rounded-full bg-rose-500">
                        <BiSearch className="text-md font-bold text-white" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Search