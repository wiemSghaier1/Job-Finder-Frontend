import { createSlice } from '@reduxjs/toolkit'



export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: null,
    },
    reducers: {
        setUser: (state, { payload }) => {
            state.user = payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { setUser } = authSlice.actions

export default authSlice.reducer