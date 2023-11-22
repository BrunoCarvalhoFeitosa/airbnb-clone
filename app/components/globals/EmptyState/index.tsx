"use client"
import { useRouter } from "next/navigation"
import Heading from "@/app/components/globals/Modals/Heading"
import Button from "@/app/components/globals/Button"

interface EmptyStateProps {
    title?: string
    subtitle?: string
    showReset?: boolean
}

const EmptyState: React.FC<EmptyStateProps> = ({
    title = "Nada correspondente",
    subtitle = "Tente novamente removendo alguns de seus filtros.",
    showReset
}) => {
    const router = useRouter()

    return (
        <div className="flex flex-col justify-center items-center h-[calc(100vh-200px)]">
            <div className="pt-24">
                <Heading
                    center
                    title={title}
                    subtitle={subtitle}
                />
            </div>
            <div className="mt-4 w-48">
                {showReset && (
                    <Button
                        outline
                        label="Remover todos os filtros"
                        onClick={() => router.push("/")}
                    />
                )}
            </div>
        </div>
    )
}

export default EmptyState