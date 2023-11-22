"use client"
import { useCallback, useEffect, useState } from "react"
import { IoMdClose } from "react-icons/io"
import Button from "@/app/components/globals/Button"

interface ModalProps {
    isOpen?: boolean
    onClose: () => void
    onSubmit: () => void
    title?: string
    body?: React.ReactElement
    footer?: React.ReactElement
    actionLabel: string
    disabled?: boolean
    secondaryAction?: () => void
    secondaryActionLabel?: string 
}

const Modal: React.FC<ModalProps> = ({
    isOpen,
    onClose,
    onSubmit,
    title,
    body,
    footer,
    actionLabel,
    disabled,
    secondaryAction,
    secondaryActionLabel
}) => {
    const [showModal, setShowModal] = useState(isOpen)

    useEffect(() => {
        setShowModal(isOpen)
    }, [isOpen])

    const handleClose = useCallback(() => {
        if (disabled) return

        setShowModal(false)

        setTimeout(() => {
            onClose()
        }, 300)
    }, [disabled, onClose])

    const handleSubmit = useCallback(() => {
        if (disabled) return

        onSubmit()
    }, [disabled, onSubmit])

    const handleSecondaryAction = useCallback(() => {
        if (disabled || !secondaryAction) return

        secondaryAction()
    }, [disabled, secondaryAction])

    if (!isOpen) return null

    return (
        <>
            <div className="fixed inset-0 flex justify-center items-center overflow-x-hidden overflow-y-auto bg-neutral-800/90 focus:outline-none z-50">
                <div className="relative w-full md:w-4/6 lg:w-3/6 xl:w-2/5 h-full md:h-auto lg:h-auto my-6 mx-auto">
                    <div className={`h-full translate duration-300 ${showModal ? "translate-y-0" : "translate-y-full"} ${showModal ? "opacity-100" : "opacity-0"}`}>
                        <div className="relative w-full h-full md:h-auto lg:h-auto flex flex-col bg-white shadow-lg rounded-lg border-0 translate outline-none focus:outline-none">
                            <div className="relative flex justify-center items-center rounded-t border-b-[1px] p-4">
                                <div className="absolute left-5">
                                    <button
                                        onClick={handleClose}
                                        className="p-2 bg-white rounded-full border-0 transition hover:bg-zinc-100"
                                    >
                                        <IoMdClose size={18} />
                                    </button>
                                </div>
                                <div className="text-lg font-semibold">
                                    {title}
                                </div>
                            </div>
                            <div className="relative pt-3 p-6 flex-auto">
                                {body}
                            </div>
                            <div className="flex flex-col gap-2 pt-0 px-5 pb-5">
                                <div className="flex flex-row items-center gap-4 w-full">
                                    {secondaryAction && secondaryActionLabel && (
                                        <Button
                                            outline
                                            disabled={disabled}
                                            label={secondaryActionLabel}
                                            onClick={handleSecondaryAction}
                                        />
                                    )}
                                    <Button
                                        disabled={disabled}
                                        label={actionLabel}
                                        onClick={handleSubmit}
                                    />
                                </div>
                                {footer}
                            </div>
                        </div>
                    </div>
                </div>
            </div>   
        </>
    )
}

export default Modal