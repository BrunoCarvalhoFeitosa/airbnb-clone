"use client"
import { SafeListing, SafeUser } from "@/app/types"
import Container from "@/app/components/globals/Container"
import Heading from "@/app/components/globals/Modals/Heading"
import ListingCard from "@/app/components/listings/ListingCard"

interface FavoritesClientProps {
    listings: SafeListing[]
    currentUser: SafeUser | null
}

const FavoritesClient: React.FC<FavoritesClientProps> = ({ listings, currentUser }) => {
    return (
        <Container>
            <div className="pt-6">
                <Heading
                    title="Favoritos"
                    subtitle="Lugares que você já favoritou para fazer suas viajens."
                />
            </div>
            <div className="pt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
                {listings.map((listing) => (
                    <ListingCard
                        key={listing.id}
                        data={listing}
                        currentUser={currentUser}
                    />
                ))}
            </div>
        </Container>
    )
}

export default FavoritesClient