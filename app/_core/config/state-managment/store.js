import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './slices'

const store = configureStore({
    reducer: rootReducer,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
            AsyncLocalStorage: true,
        }),
})

export default store
