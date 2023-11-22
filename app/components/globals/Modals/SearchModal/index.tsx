"use client"
import { useCallback, useMemo, useState } from "react"
import qs from "query-string"
import dymanic from "next/dynamic"
import { useRouter, useSearchParams } from "next/navigation"
import { Range } from "react-date-range"
import { formatISO } from "date-fns"
import CountrySelect, { CountrySelectValue } from "@/app/components/globals/Inputs/CountrySelect"
import useSearchModal from "@/app/hooks/useSearchModal"
import Modal from "@/app/components/globals/Modals"
import Heading from "@/app/components/globals/Modals/Heading"
import Calendar from "@/app/components/globals/Inputs/Calendar"
import Counter from "../../Inputs/Counter"

enum STEPS {
    LOCATION = 0,
    DATE = 1,
    INFO = 2
}

const SearchModal = () => {
    const router = useRouter()
    const params = useSearchParams()
    const searchModal = useSearchModal()
    const [location, setLocation] = useState<CountrySelectValue>()
    const [step, setStep] = useState(STEPS.LOCATION)
    const [guestCount, setGuestCount] = useState(1)
    const [roomCount, setRoomCount] = useState(1)
    const [bathroomCount, setBathroomCount] = useState(1)
    const [dateRange, setDateRange] = useState<Range>({
        startDate: new Date(),
        endDate: new Date(),
        key: "selection"
    })

    const Map = useMemo(() => dymanic(() => import("@/app/components/globals/Map"), {
        ssr: false
    }), [location])

    const onBack = useCallback(() => {
        setStep((value) => value - 1)
    }, [])

    const onNext = useCallback(() => {
        setStep((value) => value + 1)
    }, [])

    const onSubmit = useCallback(() => {
        if (step !== STEPS.INFO) {
            return onNext()
        }

        let currentQuery = {}

        if (params) {
            currentQuery = qs.parse(params.toString())
        }

        const updatedQuery: any = {
            ...currentQuery,
            locationValue: location?.value,
            guestCount,
            roomCount,
            bathroomCount
        }

        if (dateRange.startDate) {
            updatedQuery.startDate = formatISO(dateRange.startDate)
        }

        if (dateRange.endDate) {
            updatedQuery.endDate = formatISO(dateRange.endDate)
        }

        const url = qs.stringifyUrl({
            url: "/",
            query: updatedQuery
        }, { skipNull: true })

        setStep(STEPS.LOCATION)
        searchModal.onClose()
        router.push(url)
    }, [
        step,
        searchModal,
        location,
        router,
        guestCount,
        roomCount,
        bathroomCount,
        dateRange,
        onNext,
        params
    ])

    const actionLabel = useMemo(() => {
        if (step === STEPS.INFO) {
            return "Buscar"
        }

        return "Próximo"
    }, [step])

    const secondaryActionLabel = useMemo(() => {
        if (step === STEPS.LOCATION) {
            return undefined
        }

        return "Voltar"
    }, [step])

    let bodyContent = (
        <div className="flex flex-col gap-8">
            <Heading
                title="Para onde você quer ir?"
                subtitle="Encontre o lugar perfeito"
            />
            <CountrySelect
                value={location}
                onChange={(value) => setLocation(value as CountrySelectValue)}
            />
            <hr />
            <Map center={location?.latlng} />
        </div>
    )

    if (step === STEPS.DATE) {
        bodyContent = (
            <div className="flex flex-col gap-8">
                <Heading
                    title="Quando você planeja ir?"
                    subtitle="Certifique-se de que todos estejam livres."
                />
                <Calendar
                    value={dateRange}
                    onChange={(value) => setDateRange(value.selection)}
                />
            </div>
        )
    }

    if (step === STEPS.INFO) {
        bodyContent = (
            <div className="flex flex-col gap-8">
                <Heading
                    title="Mais informações"
                    subtitle="Encontre seu lugar perfeito"
                />
                <Counter
                    title="Hóspedes"
                    subtitle="Quantos hóspedes serão?"
                    value={guestCount}
                    onChange={(value) => setGuestCount(value)}
                />
                <Counter
                    title="Quartos"
                    subtitle="Quantos quartos você precisará?"
                    value={roomCount}
                    onChange={(value) => setRoomCount(value)}
                />
                <Counter
                    title="Banheiros"
                    subtitle="Quantos banheiros você precisará?"
                    value={bathroomCount}
                    onChange={(value) => setBathroomCount(value)}
                />
            </div>
        )
    }

    return (
        <Modal
            isOpen={searchModal.isOpen}
            onClose={searchModal.onClose}
            onSubmit={onSubmit}
            title="Filtros"
            actionLabel={actionLabel}
            secondaryActionLabel={secondaryActionLabel}
            secondaryAction={step === STEPS.LOCATION ? undefined : onBack}
            body={bodyContent}
        />
    )
}

export default SearchModal