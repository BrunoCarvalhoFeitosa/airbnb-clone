"use client"
import { useMemo, useState } from "react"
import dynamic from "next/dynamic"
import axios from "axios"
import toast from "react-hot-toast"
import { useRouter } from "next/navigation"
import { FieldValues, SubmitHandler, useForm } from "react-hook-form"
import { categories } from "@/app/components/globals/Navbar/Categories"
import useRentModal from "@/app/hooks/useRentModal"
import Modal from "@/app/components/globals/Modals/index"
import Heading from "@/app/components/globals/Modals/Heading"
import CategoryInput from "@/app/components/globals/Inputs/CategoryInput"
import CountrySelect from "@/app/components/globals/Inputs/CountrySelect"
import Counter from "@/app/components/globals/Inputs/Counter"
import ImageUpload from "@/app/components/globals/Inputs/ImageUpload"
import Input from "@/app/components/globals/Inputs"

enum STEPS {
    CATEGORY = 0,
    LOCATION = 1,
    INFO = 2,
    IMAGES = 3,
    DESCRIPTION = 4,
    PRICE = 5
}

const RentModal = () => {
    const [step, setStep] = useState(STEPS.CATEGORY)
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const rentModal = useRentModal()
    const router = useRouter()
    const {
        register,
        handleSubmit,
        setValue,
        watch,
        reset,
        formState: { errors }
    } = useForm<FieldValues>({
        defaultValues: {
            category: "",
            location: null,
            guestCount: 1,
            roomCount: 1,
            bathroomCount: 1,
            imageSrc: "",
            price: 1,
            title: "",
            description: ""
        }
    })

    const category = watch("category")
    const location = watch("location")
    const guestCount = watch("guestCount")
    const roomCount = watch("roomCount")
    const bathroomCount = watch("bathroomCount")
    const imageSrc = watch("imageSrc")

    const Map = useMemo(    
        () => dynamic(
            () => import("@/app/components/globals/Map"), {
                ssr: false
            }
        ), [location]
    )

    const setCustomValue = (id: string, value: any) => {
        setValue(id, value, {
            shouldDirty: true,
            shouldTouch: true,
            shouldValidate: true
        })
    }

    const onBack = () => {
        setStep((value) => value - 1)
    }

    const onNext = () => {
        setStep((value) => value + 1)
    }

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        if (step !== STEPS.PRICE) {
            return onNext()
        }

        setIsLoading(true)

        axios.post("/api/listings", data)
            .then(() => {
                toast.success("Imóvel anunciado com sucesso.")
                router.refresh()
                reset()
                setStep(STEPS.CATEGORY)
                rentModal.onClose()
            })
            .catch((error) => {
                console.error("Error while fetch rent", error)
                toast.error("Ocorreu um erro ao salvar imóvel.")
            }).finally(() => {
                setIsLoading(false)
            })
    }

    const actionLabel = useMemo(() => {
        if (step === STEPS.PRICE) {
            return "Cadastrar imóvel"
        }

        return "Próximo"
    }, [step])

    const secondaryActionLabel = useMemo(() => {
        if (step === STEPS.CATEGORY) {
            return undefined
        }

        return "Voltar"
    }, [step])

    let bodyContent = (
        <div className="flex flex-col gap-8">
            <Heading
                title="Como você descreve seu imóvel?"
                subtitle="Escolha uma categoria."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-h-[50vh] overflow-y-auto pr-3">
                {categories.map((item) => (
                    <div key={item.label} className="col-span-1">
                        <CategoryInput
                            onClick={(category) => setCustomValue("category", category)}
                            selected={category === item.label}
                            label={item.label}
                            icon={item.icon}
                        />
                    </div>
                ))}
            </div>
        </div>
    )

    if (step === STEPS.LOCATION) {
        bodyContent = (
            <div className="flex flex-col gap-8">
                <Heading
                    title="Onde seu imóvel fica lozalizado?"
                    subtitle="Ajude os visitantes a encontrarem."
                />
                <CountrySelect
                    value={location}
                    onChange={(value) => setCustomValue("location", value)}
                />
                <Map center={location?.latlng} />
            </div>
        )
    }

    if (step === STEPS.INFO) {
        bodyContent = (
            <div className="flex flex-col gap-8">
                <Heading
                    title="Compartilhe algumas informações"
                    subtitle="Quais comodidades seu imóvel oferece?"
                />
                <Counter
                    title="Hospedes"
                    subtitle="Quantos hospedes você aceita em seu imóvel?"
                    value={guestCount}
                    onChange={(value) => setCustomValue("guestCount", value)}
                />
                <hr />
                <Counter
                    title="Quartos"
                    subtitle="Quantos quartos seu imóvel possui?"
                    value={roomCount}
                    onChange={(value) => setCustomValue("roomCount", value)}
                />
                <hr />
                <Counter
                    title="Banheiros"
                    subtitle="Quantos banheiros seu imóvel possui?"
                    value={bathroomCount}
                    onChange={(value) => setCustomValue("bathroomCount", value)}
                />
            </div>
        )
    }

    if (step === STEPS.IMAGES) {
        bodyContent = (
            <div className="flex flex-col gap-8">
                <Heading
                    title="Adicione uma foto do seu imóvel"
                    subtitle="Mostre aos convidados como é o seu imóvel"
                />
                <ImageUpload
                    value={imageSrc}
                    onChange={(value) => setCustomValue("imageSrc", value)}
                />
            </div>
        )
    }

    if (step === STEPS.DESCRIPTION) {
        bodyContent = (
            <div className="flex flex-col gap-8">
                <Heading
                    title="Como você descreve seu imóvel?"
                    subtitle=""
                />
                <Input
                    id="title"
                    label="Título"
                    disabled={isLoading}
                    register={register}
                    errors={errors}
                    required
                />
                <hr />
                <Input
                    id="description"
                    label="Descrição"
                    disabled={isLoading}
                    register={register}
                    errors={errors}
                    required
                />
            </div>
        )
    }

    if (step === STEPS.PRICE) {
        bodyContent = (
            <div className="flex flex-col gap-8">
                <Heading
                    title="Agora, defina seu preço"
                    subtitle="Quanto você cobra per noite?"
                />
                <Input
                    id="price"
                    label="Preço"
                    type="number"
                    disabled={isLoading}
                    register={register}
                    errors={errors}
                    formatPrice
                    required
                />
            </div>
        )
    }

    return (
        <Modal
            isOpen={rentModal.isOpen}
            onClose={rentModal.onClose}
            onSubmit={handleSubmit(onSubmit)}
            actionLabel={actionLabel}
            secondaryActionLabel={secondaryActionLabel}
            secondaryAction={step === STEPS.CATEGORY ? undefined : onBack}
            title="Anuncie seu espaço"
            body={bodyContent}
        />
    )
}

export default RentModal