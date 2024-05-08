import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

let initialState = {
    data: {
        title: {},
        info: {},
        data: {},
    },
}

export const userSlice = createSlice({
    name: 'user',
    initialState,

    reducers: {
        setTitle: (state, action) => {
            state.data.title = action.payload
        },

        setInfo: (state, action) => {
            state.data.info = action.payload
        },

        setUserData: (state, action) => {
            state.data.data = action.payload
        },
    },
})
export const { setTitle, setInfo, setUserData } = userSlice.actions

export default userSlice.reducer
