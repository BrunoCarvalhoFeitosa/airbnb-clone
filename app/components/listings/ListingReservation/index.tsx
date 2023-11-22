"use client"
import { Range } from "react-date-range"
import Calendar from "@/app/components/globals/Inputs/Calendar"
import Button from "@/app/components/globals/Button"

interface ListingReservationProps {
    price: number
    dateRange: Range
    totalPrice: number
    onChange: (value: Range) => void
    onSubmit: () => void
    disabled?: boolean
    disabledDates: Date[]
}

const ListingReservation: React.FC<ListingReservationProps> = ({
    price,
    dateRange,
    totalPrice,
    onChange,
    onSubmit,
    disabled,
    disabledDates
}) => {
    return (
        <div className="bg-white rounded-xl border-[1px] border-neutral-200 overflow-hidden">
            <div className="flex flex-row items-center gap-1 p-4">
                <div className="text-xl font-semibold">
                    {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
                        price
                    )}
                </div>
                <div className="font-light text-neutral-600">
                    per noite
                </div>
            </div>
            <hr />
            <div>
                <Calendar
                    value={dateRange}
                    disabledDates={disabledDates}
                    onChange={(value) => onChange(value.selection)}
                />
            </div>
            <hr />
            <div className="p-4">
                <Button
                    disabled={disabled}
                    label="Reservar"
                    onClick={onSubmit}
                />
            </div>
            <div className="p-4 flex flex-row justify-between items-center text-lg">
                <div className="font-bold">
                    Total
                </div>
                <div>
                    {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
                        totalPrice
                    )}
                </div>
            </div>
        </div>
    )
}

export default ListingReservation