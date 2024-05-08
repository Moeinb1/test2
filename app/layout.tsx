'use client'
import type { Metadata } from 'next'
import { ToastContainer } from 'react-toastify'
import ReduxProvider from './_core/config/redux-provider'
import ThemeRegistry from './_core/config/mui/theme-registry'
import './_core/styles/globals.css'
import 'react-toastify/dist/ReactToastify.css'
import React from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

export default function RootLayout({ children }: { children: React.ReactNode }) {
    const queryClientMutualOptions = {
        onSuccess(data) {
            console.log(data)
        },
        onError: (error: any) => {
            console.log(error)
        },
    }
    const [queryClient] = React.useState(
        () =>
            new QueryClient({
                defaultOptions: {
                    mutations: {
                        ...queryClientMutualOptions,
                    },
                    queries: {
                        ...queryClientMutualOptions,
                        refetchOnWindowFocus: false,
                    },
                },
            }),
    )

    return (
        <html lang='en'>
            <body className='h-[100dvh] w-[100dvw] overflow-hidden'>
                <ThemeRegistry options={{ key: 'mui' }}>
                    <ReduxProvider>
                        <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
                    </ReduxProvider>
                </ThemeRegistry>

                <ToastContainer
                    position='top-center'
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                />
            </body>
        </html>
    )
}
