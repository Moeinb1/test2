'use client'

import { IoMdClose } from 'react-icons/io'
import { IconButton } from '@mui/material'
import { GoPlusCircle } from 'react-icons/go'
import { ChangeEvent, useEffect, useState } from 'react'

interface Props {
    error?: string
    label?: string
    isRequired?: boolean
    onChange: (event: File[]) => void
}

export const PMInputUploadFiles = (properties: Props) => {
    const { label, isRequired, error, onChange } = properties

    const [files, setFiles] = useState<File[]>([])

    const uploadFiles = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            console.log(event.target.files[0])
            setFiles(files.concat(event.target.files[0]))
        }
        onChange(files)
    }

    const removeFile = (index: number) => {
        const newFiles = files.slice(index, 1)
        setFiles(newFiles)
        onChange(files)
    }

    return (
        <div className='w-full px-0'>
            {label && (
                <label className='pm-form-input-label gap-1'>
                    {label}&nbsp;{isRequired && <span className='flex items-center'>{'(*)'}</span>}
                </label>
            )}

            <div className={`pm-form-input-box fex items-center justify-between gap-2`}>
                <div className='flex-[2] flex items-center gap-1 h-full overflow-hidden p-2 overflow-x-auto'>
                    {files.map((img, index) => (
                        <span
                            key={`img-item-key-${index}`}
                            className='bg-primary-100 flex gap-1 items-center h-full p-1'
                        >
                            <label className='max-w-[10rem] h-full overflow-hidden'>{img.name}</label>
                            <IconButton
                                size='small'
                                onClick={() => removeFile(index)}
                            >
                                <IoMdClose />
                            </IconButton>
                        </span>
                    ))}
                </div>

                <IconButton className='relative w-10 h-10 flex items-center justify-center overflow-hidden'>
                    <GoPlusCircle />

                    <input
                        type='file'
                        multiple
                        accept='image/*'
                        onChange={uploadFiles}
                        className='absolute top-0 right-0 bottom-0 left-0 z-10 opacity-0 cursor-pointer hover:bg-primary-200'
                    />
                </IconButton>
            </div>

            {error && <p className='pm-form-input-error'>{error}</p>}
        </div>
    )
}
