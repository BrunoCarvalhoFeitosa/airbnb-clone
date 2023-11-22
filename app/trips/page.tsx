import ClientOnly from "@/app/components/globals/ClientsOnly"
import EmptyState from "@/app/components/globals/EmptyState"
import getCurrentUser from "@/app/actions/getCurrentUser"
import getReservations from "@/app/actions/getReservations"
import TripsClient from "./TripsClient"

const TripsPage = async () => {
    const currentUser = await getCurrentUser()

    if (!currentUser) {
        return (
            <EmptyState
                title="Não autorizado"
                subtitle="Por favor, faça login."
            />
        )
    }

    const reservations = await getReservations({
        userId: currentUser?.id
    })

    if (reservations.length === 0) {
        return (
            <ClientOnly>
                <EmptyState
                    title="Nenhuma reserva encontrada"
                    subtitle="Parece que você não reservou nenhuma viagem ainda."
                />
            </ClientOnly>
        )
    }

    return (
        <ClientOnly>
            <TripsClient
                reservations={reservations}
                currentUser={currentUser}
            />
        </ClientOnly>
    )
}

export default TripsPage