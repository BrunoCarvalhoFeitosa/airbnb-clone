"use client"
import { useCallback, useState } from "react"
import { useRouter } from "next/navigation"
import { SafeListing, SafeUser } from "@/app/types"
import axios from "axios"
import toast from "react-hot-toast"
import Container from "@/app/components/globals/Container"
import Heading from "@/app/components/globals/Modals/Heading"
import ListingCard from "@/app/components/listings/ListingCard"

interface PropertiesClientProps {
    listings: SafeListing[]
    currentUser?: SafeUser | null
}

const PropertiesClient: React.FC<PropertiesClientProps> = ({ listings, currentUser }) => {
    const [deletingId, setDeletingId] = useState<string>("")
    const router = useRouter()

    const onCancel = useCallback((id: string) => {
        setDeletingId(id)

        axios.delete(`/api/listings/${id}`)
            .then(() => {
                toast.success("Propriedade excluída com sucesso.")
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
                    title="Propriedades"
                    subtitle="Propriedades cadastradas por você."
                />
            </div>
            <div className="pt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
                {listings.map((listing) => (
                    <ListingCard
                        key={listing.id}
                        data={listing}
                        actionId={listing.id}
                        onAction={onCancel}
                        actionLabel="Deletar propriedade"
                        currentUser={currentUser}
                        disabled={deletingId === listing.id}
                    />
                ))}
            </div>
        </Container>
    )
}

export default PropertiesClient