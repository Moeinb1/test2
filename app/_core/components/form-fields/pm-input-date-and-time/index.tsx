'use client'

import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker'
import { AdapterDateFnsJalali } from '@mui/x-date-pickers/AdapterDateFnsJalali'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { useState } from 'react'

interface Props {
    name: string
    value: string
    error?: string
    label?: string
    isRequired?: boolean
    onChange: (event: string) => void
}

export const PMInputDateAndTime = (properties: Props) => {
    const { label, isRequired, name, value, error, onChange } = properties

    const [dateAndTime, setDateAndTime] = useState<Date>(new Date())

    const changeHandel = (e: any) => {
        const newDate = new Date(e.$d)
        setDateAndTime(newDate)
        onChange(dateAndTime.toLocaleString())
    }

    return (
        <div className='w-full px-0'>
            {label && (
                <label className='pm-form-input-label gap-1'>
                    {label}&nbsp;{isRequired && <span className='flex items-center'>{'(*)'}</span>}
                </label>
            )}
            <div className={`pm-form-input-box px-0 `}>
                <LocalizationProvider dateAdapter={AdapterDateFnsJalali}>
                    <DateTimePicker
                        onChange={changeHandel}
                        defaultValue={new Date(value)}
                    />
                </LocalizationProvider>
            </div>

            {error && <p className='pm-form-input-error'>{error}</p>}
        </div>
    )
}
