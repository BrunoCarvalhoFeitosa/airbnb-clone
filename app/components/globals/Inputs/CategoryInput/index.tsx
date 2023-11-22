"use client"
import { IconType } from "react-icons"

interface CategoryInputProps {
    icon: IconType
    label: string
    selected?: boolean
    onClick: (value: string) => void
}

const CategoryInput: React.FC<CategoryInputProps> = ({
    icon: Icon,
    label,
    selected,
    onClick
}) => {
    return (
        <div
            onClick={() => onClick(label)}
            className={`flex flex-col gap-3 p-4 border-2 rounded-xl transition hover:border-black ${selected ? "border-black" : "border-neutral-200"} cursor-pointer`}
        >
            <div>
                <Icon size={30} />
            </div>
            <div className="font-semibold">
                {label}
            </div>
        </div>
    )
}

export default CategoryInput