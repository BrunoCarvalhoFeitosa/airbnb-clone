"use client"
import Select from "react-select"
import useCountries from "@/app/hooks/useCountries"
import FlagIcon from "@/app/components/globals/Inputs/CountrySelect/FlagIcon"

export type CountrySelectValue = {
    flag: string
    label: string
    latlng: number[]
    region: string
    value: string
}

interface CountrySelectProps {
    value?: CountrySelectValue
    onChange: (value: CountrySelectValue) => void
}

const CountrySelect: React.FC<CountrySelectProps> = ({ value, onChange }) => {
    const { getAll } = useCountries()
    
    return (
        <Select
            placeholder="Diga-nos sua localização"
            isClearable
            options={getAll()}
            value={value}
            onChange={(value) => onChange(value as CountrySelectValue)}
            formatOptionLabel={(option: any) => (
                <div className="flex flex-row items-center gap-3">
                    <div className="flex justify-center items-center w-[30px] h-[20px] text-black bg-rose-500 rounded-sm">
                        <FlagIcon country={option.flag} />
                    </div>
                    <div className="flex items-center gap-1">
                        <div>
                            {option.label},
                        </div>
                        <div className="text-neutral-500">
                            {option.region}
                        </div>
                    </div>
                </div>
            )}
            classNames={{
                control: () => "p-3 border-2",
                input: () => "text-lg cursor-pointer",
                option: () => "text-lg",
            }}
            theme={(theme) => ({
                ...theme,
                borderRadius: 6,
                colors: {
                    ...theme.colors,
                    primary: "black",
                    primary25: "#FFE4E6"
                }
            })}
        />
    )
}

export default CountrySelect