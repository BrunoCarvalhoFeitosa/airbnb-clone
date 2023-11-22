"use client"
import { useCallback, useState } from "react"
import { useRouter } from "next/navigation"
import { toast } from "react-hot-toast"
import axios from "axios"
import { SafeReservation, SafeUser } from "@/app/types"
import Container from "@/app/components/globals/Container"
import Heading from "@/app/components/globals/Modals/Heading"
import ListingCard from "@/app/components/listings/ListingCard"

interface ReservationsClientProps {
    reservations: SafeReservation[]
    currentUser?: SafeUser | null
}

const ReservationsClient: React.FC<ReservationsClientProps> = ({ reservations, currentUser }) => {
    const [deletingId, setDeletingId] = useState<string>("")
    const router = useRouter()

    const onCancel = useCallback((id: string) => {
        setDeletingId(id)

        axios.delete(`/api/reservations/${id}`)
            .then(() => {
                toast.success("Reserva cancelada com sucesso.")
                router.refresh()
            })
            .catch(() => {
                toast.error("Algo deu errado.")
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
                    subtitle="Reservas feitas em suas propriedades."
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
                        actionLabel="Cancelar reserva do hospede"
                        currentUser={currentUser}
                        disabled={deletingId === reservation.id}
                    />
                ))}
            </div>
        </Container>
    )
}

export default ReservationsClient