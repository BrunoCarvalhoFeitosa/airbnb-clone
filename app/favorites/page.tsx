import ClientOnly from "@/app/components/globals/ClientsOnly"
import EmptyState from "@/app/components/globals/EmptyState"
import getCurrentUser from "@/app/actions/getCurrentUser"
import getFavoriteListings from "@/app/actions/getFavoriteListings"
import FavoritesClient from "./FavoritesClient"

const FavoritesPage = async () => {
    const listings = await getFavoriteListings()
    const currentUser = await getCurrentUser()

    if (listings.length === 0) {
        return (
            <ClientOnly>
                <EmptyState
                    title="Nenhum favorito encontrado"
                    subtitle="Parece que você não favoritou nenhum lugar"
                />
            </ClientOnly>
        )
    }

    return (
        <ClientOnly>
            <FavoritesClient
                listings={listings}
                currentUser={currentUser}
            />
        </ClientOnly>
    )
}

export default FavoritesPage