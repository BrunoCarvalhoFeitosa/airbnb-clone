"use client"
import { useCallback, useState } from "react"
import { signIn } from "next-auth/react"
import { FieldValues, SubmitHandler, useForm } from "react-hook-form"
import { toast } from "react-hot-toast"
import { AiFillGithub } from "react-icons/ai"
import { FcGoogle } from "react-icons/fc"
import axios from "axios"
import useLoginModal from "@/app/hooks/useLoginModal"
import useRegisterModal from "@/app/hooks/useRegisterModal"
import Modal from "@/app/components/globals/Modals/index"
import Heading from "@/app/components/globals/Modals/Heading"
import Input from "@/app/components/globals/Inputs/index"
import Button from "@/app/components/globals/Button"

const RegisterModal = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const loginModal = useLoginModal()
    const registerModal = useRegisterModal()
    const { register, handleSubmit, formState: { errors } } = useForm<FieldValues>({
        defaultValues: {
            name: "",
            email: "",
            password: ""
        }
    })

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true)

        axios.post("/api/register", data)
            .then(() => {
                toast.success("Cadastro efetuado com sucesso.")
                registerModal.onClose()
                loginModal.onOpen()
            })
            .catch((error) => {
                toast.error("Erro ao finalizar seu cadastro.")
                console.error("Error while fetching register data", error)
            })
            .finally(() => {
                setIsLoading(false)
            })
    }

    const onToggle = useCallback(() => {
        loginModal.onOpen()
        registerModal.onClose()
    }, [loginModal, registerModal])

    const bodyContent = (
        <div className="flex flex-col gap-2">
            <Heading
                title="Bem-vindo ao Airbnb"
                subtitle="Crie uma conta agora mesmo."
            />
            <Input
                id="name"
                label="Nome completo"
                disabled={isLoading}
                register={register}
                errors={errors}
                required
            />
            <Input
                id="email"
                label="E-mail"
                disabled={isLoading}
                register={register}
                errors={errors}
                required
            />
            <Input
                id="password"
                label="Senha"
                type="password"
                disabled={isLoading}
                register={register}
                errors={errors}
                required
            />
        </div>
    )

    const footerContent = (
        <div className="flex flex-col gap-4 mt-3">
            <hr />
            <Button
                outline
                label="Cadastre-se com o Google"
                icon={FcGoogle}
                onClick={() => signIn("google")}
            />
            <Button
                outline
                label="Cadastre-se com o Github"
                icon={AiFillGithub}
                onClick={() => signIn("github")}
            />
            <div className="flex flex-row justify-center items-center gap-2">
                <div className="font-semibold text-zinc-400">
                    Já tem uma conta?
                </div>
                <div
                    onClick={onToggle}
                    className="font-bold text-neutral-800 underline hover:text-rose-500 cursor-pointer"
                >
                    Entre
                </div>
            </div>
        </div>
    )

    return (
        <Modal
            isOpen={registerModal.isOpen}
            onClose={registerModal.onClose}
            onSubmit={handleSubmit(onSubmit)}
            disabled={isLoading}
            title="Cadastre-se"
            actionLabel="Concluir cadastro no Airbnb"
            body={bodyContent}
            footer={footerContent}
        />
    )
}

export default RegisterModal