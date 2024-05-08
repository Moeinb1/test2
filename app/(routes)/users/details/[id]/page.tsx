'use client'
import services from '@/app/services'
import { useQuery } from '@tanstack/react-query'
import dynamic from 'next/dynamic'
import { useRouter, useParams } from 'next/navigation'
import React, { useEffect } from 'react'

const CardDetail = dynamic(() => import('../../../../_core/components/card-detail'), {
    ssr: false,
})

const Id = () => {
    return <CardDetail />
}
Id.header = { showNotification: true, showProfile: true }

export default Id
