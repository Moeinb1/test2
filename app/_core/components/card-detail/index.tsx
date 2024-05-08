import services from '@/app/services'
import { Button, Typography } from '@mui/material'
import { useMutation, useQuery } from '@tanstack/react-query'
import Image from 'next/image'
import { useParams, useRouter } from 'next/navigation'
import React, { useEffect } from 'react'

const CardDetail = () => {
    const pararms = useParams()
    const router = useRouter()
    console.log(pararms)

    const getUserDetails: any = useQuery({
        queryKey: ['get_user_details'],
        queryFn: async () => {
            const response = await services.getUserDetails.getUserDetails(pararms)
            return response?.data
        },
    }) || ['']

    const deleteUser: any = useMutation({
        mutationKey: ['delete_user'],
        mutationFn: async () => {
            const response = await services.deleteUser.deleteUser(pararms)
            return response?.data
        },
        onSuccess(data, variables, context) {
            router.push('/users')
            console.log('yes deleted')
        },
    })
    useEffect(() => {
        if (!getUserDetails == undefined) getUserDetails.refetch()
    }, [])

    return (
        <div
            className=' flex flex-col border h-screen rounded-md bg-gray-200 p-4'
            key={getUserDetails?.data?.data?.length}
        >
            {' '}
            <div className='flex  justify-center items-center'>
                {getUserDetails?.data?.data?.id}
                <Typography> :id</Typography>
            </div>{' '}
            <div className='flex  justify-center items-center'>
                {getUserDetails?.data?.data?.first_name}
                <Typography> :first name</Typography>
            </div>{' '}
            <div className='flex  justify-center items-center'>
                {getUserDetails?.data?.data?.last_name}
                <Typography> :last name</Typography>
            </div>{' '}
            <div className='flex  justify-center items-center'>
                {getUserDetails?.data?.data?.email}
                <Typography> :email</Typography>
            </div>{' '}
            <div className='flex flex-col justify-center items-center'>
                <Image
                    src={getUserDetails?.data?.data?.avatar}
                    width={100}
                    height={100}
                    className='w-20 my-3'
                    alt='avatar'
                />
            </div>{' '}
            <div className='flex justify-between '>
                {' '}
                <Button
                    onClick={() => deleteUser.mutate()}
                    className='!bg-rose-600 hover:!bg-rose-700'
                    variant='contained'
                >
                    delete
                </Button>{' '}
            </div>
        </div>
    )
}

export default CardDetail
