'use client'
import { useAppDispatch } from '@/app/_core/redux/hooks'
import services from '@/app/services'
import { Button, ButtonGroup, TextField, Typography } from '@mui/material'
import { useMutation, useQuery } from '@tanstack/react-query'
import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation'
import React, { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setTitle, setInfo } from '../../_core/config/state-managment/slices/userSlice'
const UsersList = () => {
    const dispatch: any = useDispatch()
    const selectId = useSelector((state: any) => state.userSlice)
    const selectPage = useSelector((state: any) => state.userSlice)
    const getUserList: any = useQuery({
        queryKey: ['get_user_list', selectPage?.data?.info?.data],

        queryFn: async () => {
            console.log(selectPage)
            const response = await services.userList.userList({ page: selectPage?.data?.info?.data })
            return response?.data
        },
    }) || ['']

    const deleteUser: any = useMutation({
        mutationKey: ['delete_user'],
        mutationFn: async () => {
            console.log()
            const response = await services.deleteUser.deleteUser({ id: selectId?.data?.title?.data })
            return response?.data
        },
        onSuccess(data, variables, context) {
            router.push('/users')
            console.log('yes deleted')
        },
    })
    useEffect(() => {}, [])
    const router = useRouter()

    return (
        <div className='flex justify-center '>
            <div className='grid grid-cols-3 justify-center items-center gap-2 !overflow-y-auto h-screen'>
                {getUserList?.data?.data?.map((item: any, index: number) => (
                    <div
                        className=' flex flex-col border rounded-md bg-gray-200 p-4'
                        key={index}
                    >
                        {' '}
                        <div className='flex  justify-center items-center'>
                            {item.id}
                            <Typography> :id</Typography>
                        </div>{' '}
                        <div className='flex  justify-center items-center'>
                            {item.first_name}
                            <Typography> :first name</Typography>
                        </div>{' '}
                        <div className='flex  justify-center items-center'>
                            {item.last_name}
                            <Typography> :last name</Typography>
                        </div>{' '}
                        <div className='flex  justify-center items-center'>
                            {item.email}
                            <Typography> :email</Typography>
                        </div>{' '}
                        <div className='flex flex-col justify-center items-center'>
                            <Image
                                src={item.avatar}
                                width={100}
                                height={100}
                                className='w-20 my-3'
                                alt='avatar'
                            />
                        </div>{' '}
                        <div className='flex justify-between '>
                            {' '}
                            <Button
                                onClick={() => {
                                    dispatch(setTitle({ data: item.id }))
                                    console.log(selectId)
                                    deleteUser.mutate()
                                }}
                                className='!bg-rose-600 hover:!bg-rose-700'
                                variant='contained'
                            >
                                delete
                            </Button>{' '}
                            <Button
                                onClick={() => router.push(`/users/details/${item.id}`)}
                                variant='contained'
                            >
                                show details
                            </Button>
                        </div>
                    </div>
                ))}

                <div className='flex justify-between w-full col-span-3'>
                    <Button
                        onClick={() =>
                            dispatch(
                                setInfo({ data: selectPage?.data?.info?.data ? selectPage?.data?.info?.data + 1 : 2 }),
                            )
                        }
                    >
                        next
                    </Button>
                    <Button
                        onClick={() =>
                            dispatch(
                                setInfo({
                                    data: selectPage?.data?.info?.data > 1 ? selectPage?.data?.info?.data1 - 1 : 1,
                                }),
                            )
                        }
                    >
                        prev
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default UsersList
