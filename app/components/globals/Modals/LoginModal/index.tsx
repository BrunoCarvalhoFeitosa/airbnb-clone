"use client"
import { useCallback, useState } from "react"
import { toast } from "react-hot-toast"
import { signIn } from "next-auth/react"
import { FieldValues, SubmitHandler, useForm } from "react-hook-form"
import { FcGoogle } from "react-icons/fc"
import { AiFillGithub } from "react-icons/ai"
import { useRouter } from "next/navigation"
import useLoginModal from "@/app/hooks/useLoginModal"
import useRegisterModal from "@/app/hooks/useRegisterModal"
import Modal from "@/app/components/globals/Modals/index"
import Input from "@/app/components/globals/Inputs"
import Heading from "@/app/components/globals/Modals/Heading"
import Button from "@/app/components/globals/Button"

const LoginModal = () => {
    const router = useRouter()
    const loginModal = useLoginModal()
    const registerModal = useRegisterModal()
    const [isLoading, setIsLoading] = useState(false)

    const { register, handleSubmit, formState: { errors } } = useForm<FieldValues>({
        defaultValues: {
            email: "",
            password: ""
        },
    })
  
    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true)

        signIn("credentials", { 
            ...data, 
            redirect: false,
        })
        .then((callback) => {
            setIsLoading(false)

            if (callback?.ok) {
                toast.success("Autenticado com sucesso.")
                router.refresh()
                loginModal.onClose()
            }
 
            if (callback?.error) {
                toast.error(callback.error)
            }
        })
    }

    const onToggle = useCallback(() => {
        loginModal.onClose()
        registerModal.onOpen()
    }, [loginModal, registerModal])

    const bodyContent = (
        <div className="flex flex-col gap-4">
            <Heading
                title="Bem vindo ao Airbnb"
                subtitle="Entre agora na sua conta."
            />
            <Input
                id="email"
                label="Email"
                disabled={isLoading}
                register={register}  
                errors={errors}
                required
            />
            <Input
                id="password"
                label="Password"
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
                label="Continuar com Google"
                icon={FcGoogle}
                onClick={() => signIn("google")}
            />
            <Button 
                outline 
                label="Continuar com GitHub"
                icon={AiFillGithub}
                onClick={() => signIn("github")}
            />
            <div className="mt-4 text-center font-semibold text-zinc-400">
                <p>Primeira vez no Airbnb?
                    <span 
                        onClick={onToggle} 
                        className="ml-1 font-bold text-neutral-800 underline hover:text-rose-500 cursor-pointer"
                    >
                        Crie uma conta
                    </span>
                </p>
            </div>
        </div>
    )

    return (
        <Modal
            isOpen={loginModal.isOpen}
            onClose={loginModal.onClose}
            onSubmit={handleSubmit(onSubmit)}
            disabled={isLoading}
            title="Fazer login"
            actionLabel="Entrar no Airbnb"
            body={bodyContent}
            footer={footerContent}
        />
    )
}

export default LoginModal