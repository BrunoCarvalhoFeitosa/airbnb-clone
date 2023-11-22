"use client"
import { useCallback, useState } from "react"
import { useRouter } from "next/navigation"
import { SafeReservation, SafeUser } from "@/app/types"
import axios from "axios"
import toast from "react-hot-toast"
import Container from "@/app/components/globals/Container"
import Heading from "@/app/components/globals/Modals/Heading"
import ListingCard from "@/app/components/listings/ListingCard"

interface TripsClientProps {
    reservations: SafeReservation[]
    currentUser?: SafeUser | null
}

const TripsClient: React.FC<TripsClientProps> = ({ reservations, currentUser }) => {
    const [deletingId, setDeletingId] = useState("")
    const router = useRouter()

    const onCancel = useCallback((id: string) => {
        setDeletingId(id)

        axios.delete(`/api/reservations/${id}`)
            .then(() => {
                toast.success("Reserva cancelada.")
                router.refresh()
            })
            .catch((error) => {
                toast.error(error?.response?.data?.error)
            })
            .finally(() => {
                setDeletingId("")
            })
    }, [router])

    return (
        <Container>
            <div className="pt-6">
                <Heading
                    title="Reservas"
                    subtitle="Histórico de viajens que você já fez e/ou que estão agendadas para ainda serem feitas."
                />
            </div>
            <div className="pt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
                {reservations.map((reservation) => (
                    <ListingCard
                        key={reservation.id}
                        data={reservation.listing}
                        reservation={reservation}
                        actionId={reservation.id}
                        onAction={onCancel}
                        actionLabel="Cancelar reserva"
                        currentUser={currentUser}
                        disabled={deletingId === reservation.id}
                    />
                ))}
            </div>
        </Container>
    )
}

export default TripsClient