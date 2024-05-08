import Input from '@mui/material/Input'

interface Props {
    name: string
    label?: string
    value: string
    error?: string
    placeholder?: string
    endAdornment?: React.ReactNode
    startAdornment?: React.ReactNode
    isRequired?: boolean
    onChange: (event: string) => void
}

export const PMInputText = (properties: Props) => {
    const { name, label, error, value, onChange, placeholder, endAdornment, startAdornment, isRequired } = properties

    return (
        <div className='w-full'>
            {label && (
                <label className='pm-form-input-label gap-1'>
                    {label}&nbsp;{isRequired && <span className='flex items-center'>{'(*)'}</span>}
                </label>
            )}

            <div className='pm-form-input-box'>
                <Input
                    id={name}
                    name={name}
                    value={value}
                    placeholder={placeholder}
                    endAdornment={endAdornment}
                    startAdornment={startAdornment}
                    className='flex gap-2'
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => onChange(event.target.value)}
                />
            </div>

            {error && <p className='pm-form-input-error'>{error}</p>}
        </div>
    )
}
