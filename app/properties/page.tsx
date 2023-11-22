import ClientOnly from "@/app/components/globals/ClientsOnly"
import EmptyState from "@/app/components/globals/EmptyState"
import getCurrentUser from "@/app/actions/getCurrentUser"
import getListings from "@/app/actions/getListings"
import PropertiesClient from "./PropertiesClient"

const PropertiesPage = async () => {
    const currentUser = await getCurrentUser()

    if (!currentUser) {
        return (
            <EmptyState
                title="Não autorizado"
                subtitle="Por favor, faça login."
            />
        )
    }

    const listings = await getListings({
        userId: currentUser?.id
    })

    if (!listings.length) {
        <ClientOnly>
            <EmptyState
                title="Nenhuma propriedade encontrada"
                subtitle="Parece que você não tem nenhuma propriedade cadastrada."
            />
        </ClientOnly>
    }

    return (
        <ClientOnly>
            <PropertiesClient
                listings={listings}
                currentUser={currentUser}
            />
        </ClientOnly>
    )
}

export default PropertiesPage