"use client"
import { useCallback, useMemo } from "react"
import { useRouter } from "next/navigation"
import { format } from "date-fns"
import { SafeListing, SafeReservation, SafeUser } from "@/app/types"
import Image from "next/image"
import useCountries from "@/app/hooks/useCountries"
import HeartButton from "@/app/components/globals/HeartButton"
import Button from "@/app/components/globals/Button"

interface ListingCardProps {
    data: SafeListing
    reservation?: SafeReservation
    onAction?: (id: string) => void
    disabled?: boolean
    actionLabel?: string
    actionId?: string
    currentUser?: SafeUser | null
}

const ListingCard: React.FC<ListingCardProps> = ({
    data,
    reservation,
    onAction,
    disabled,
    actionLabel,
    actionId = "",
    currentUser
}) => {
    const { getByValue } = useCountries()
    const router = useRouter()
    const location = getByValue(data.locationValue)

    const handleCancel = useCallback((event: React.MouseEvent<HTMLButtonElement>) => {
        event.stopPropagation()

        if (disabled) {
            return
        }

        onAction?.(actionId)
    }, [onAction, actionId, disabled])

    const price = useMemo(() => {
        if (reservation) {
            return reservation.totalPrice
        }

        return data.price
    }, [reservation, data.price])

    const reservationDate = useMemo(() => {
        if (!reservation) {
            return null
        }

        const start = new Date(reservation.startDate)
        const end = new Date(reservation.endDate)

        return `${format(start, "PP")} - ${format(end, "PP")}`
    }, [reservation])

    return (
        <div
            onClick={() => router.push(`/listings/${data.id}`)}
            className="group col-span-1 cursor-pointer"
        >
            <div className="flex flex-col gap-2 w-full">
                <div className="relative w-full rounded-xl aspect-square overflow-hidden">
                    <div>
                        <Image
                            fill
                            alt="Casa"
                            src={data.imageSrc}
                            className="w-full h-full object-cover transition group-hover:scale-110"
                        />
                    </div>
                    <div className="absolute top-3 right-3">
                        <HeartButton
                            listingId={data.id}
                            currentUser={currentUser}
                        />
                    </div>
                </div>
                <div className="font-semibold text-lg min-h-[60px]">
                    {location?.region}, {location?.label}
                </div>
                <div className="font-light text-neutral-500">
                    {reservationDate ?? data.category}
                </div>
                <div className="flex flex-row items-center gap-1">
                    <div className="font-bold">
                        {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
                            price
                        )}
                    </div>
                    {!reservation && (
                        <div className="font-light">
                            noite
                        </div>
                    )}
                </div>
                {onAction && actionLabel && (
                    <Button
                        disabled={disabled}
                        small
                        label={actionLabel}
                        onClick={handleCancel}
                    />
                )}
            </div>
        </div>
    )
}

export default ListingCard