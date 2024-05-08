import { MenuItem, Select } from '@mui/material'

interface Props {
    name: string
    value: string
    error?: string
    label?: string
    noneValue?: string
    background?: boolean
    isRequired?: boolean
    options: (number | string)[]
    onChange: (event: string) => void
}

export const PMSelectMUI = (properties: Props) => {
    const { label, options, isRequired, name, value, noneValue, background, error, onChange } = properties

    return (
        <div className='w-full px-0'>
            {label && (
                <label className='pm-form-input-label gap-1'>
                    {label}&nbsp;{isRequired && <span className='flex items-center'>{'(*)'}</span>}
                </label>
            )}

            <div
                className={`pm-form-input-box px-0 ${
                    background ? 'bg-primary-200 border-none hover:bg-primary-300' : 'hover:border-gray-400'
                }`}
            >
                <Select
                    id={name}
                    name={name}
                    value={value}
                    defaultValue={noneValue}
                    onChange={(event) => onChange(event.target.value)}
                >
                    {noneValue && (
                        <MenuItem
                            key={`item-none-${name}`}
                            value='0'
                            disabled
                        >
                            {noneValue}
                        </MenuItem>
                    )}

                    {options?.length > 0 &&
                        options?.map((item, index) => (
                            <MenuItem
                                key={`item-${item}-${name}-${index}`}
                                value={item}
                            >
                                {item}
                            </MenuItem>
                        ))}
                </Select>
            </div>

            {error && <p className='pm-form-input-error'>{error}</p>}
        </div>
    )
}
