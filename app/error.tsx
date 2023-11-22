"use client"
import { useEffect } from "react"
import EmptyState from "./components/globals/EmptyState"

interface ErrorStateProps {
    error: Error
}

const ErrorState: React.FC<ErrorStateProps> = ({ error }) => {
    useEffect(() => {
        console.error(error)
    }, [])

    return (
        <EmptyState
            title="Oh não"
            subtitle="Algo deu errado."
        />
    )
}

export default ErrorState