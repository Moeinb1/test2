import Button, { ButtonProps } from '@mui/material/Button'
import { ReactNode } from 'react'

interface Properties extends ButtonProps {
    label: string | ReactNode
    height?: '2' | '3' | '4'
}

export const PMButton = (properties: Properties) => {
    const { label, height, onClick } = properties

    return (
        <div className='w-full'>
            <Button
                sx={{ height: `${height ?? '3'}rem` }}
                {...properties}
                onClick={onClick}
            >
                {label}
            </Button>
        </div>
    )
}
