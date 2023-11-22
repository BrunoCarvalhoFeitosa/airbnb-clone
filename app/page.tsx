import getListings, { IListingParams } from "@/app/actions/getListings"
import getCurrentUser from "@/app/actions/getCurrentUser"
import ClientOnly from "@/app/components/globals/ClientsOnly"
import Container from "@/app/components/globals/Container"
import EmptyState from "@/app/components/globals/EmptyState"
import ListingCard from "@/app/components/listings/ListingCard"

interface HomeProps {
    searchParams: IListingParams
}

const Home = async ({ searchParams }: HomeProps) => {
    const listing = await getListings(searchParams)
    const currentUser = await getCurrentUser()

    if (listing.length === 0) {
        return (
            <ClientOnly>
                <EmptyState showReset />
            </ClientOnly>
        )
    }

    return (
        <ClientOnly>
            <Container>
                <div className="py-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 content-center gap-8">
                    {listing.map((listing: any) => (
                        <ListingCard
                            key={listing.id}
                            currentUser={currentUser}
                            data={listing}
                        />
                    ))}
                </div>
            </Container>
        </ClientOnly>
    )
}

export default Home