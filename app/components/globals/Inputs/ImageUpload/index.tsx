"use client"
import { useCallback } from "react"
import { CldUploadWidget } from "next-cloudinary"
import Image from "next/image"
import { TbPhotoPlus } from "react-icons/tb"

declare global {
    var cloudinary: any
}

interface ImageUploadProps {
    value: string
    onChange: (value: string) => void
}

const ImageUpload: React.FC<ImageUploadProps> = ({ value, onChange }) => {
    const handleUpload = useCallback((result: any) => {
        onChange(result.info.secure_url)
    }, [onChange])

    return (
        <CldUploadWidget
            onUpload={handleUpload}
            uploadPreset="zhklxnib"
            options={{
                maxFiles: 1
            }}
        >
            {({ open }) => {
                return (
                    <div
                        onClick={() => open?.()}
                        className="relative flex flex-col justify-center items-center gap-4 p-20 border-2 border-dashed transition text-neutral-600 hover:opacity-70 cursor-pointer"
                    >
                        <div>
                            <TbPhotoPlus size={35} />
                        </div>
                        <div className="text-lg font-semibold">
                            Clique para adicionar
                        </div>
                        {value && (
                            <div className="absolute inset-0 w-full h-full">
                                <Image
                                    fill
                                    src={value}
                                    alt="Upload"
                                    style={{ objectFit: "cover" }}
                                />
                            </div>
                        )}
                    </div>
                )
            }}
        </CldUploadWidget>
    )
}

export default ImageUpload