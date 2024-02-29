import {createSlice} from "@reduxjs/toolkit";
import {login} from "./thunk";


interface InitialState {
    isAuth: boolean
    token: string,
}

const initialState: InitialState = {
    isAuth: false,
    token: '',
}


const userSlice = createSlice({
    initialState,
    name: 'userSlice',
    reducers: {

        logout(state) {
            state.isAuth = false
            state.token = ''
        }
    },
    extraReducers: builder =>
        builder.addCase(login.fulfilled,(state, action) => {
            state.isAuth = true
            state.token = action.payload.access_token
        })
})

export const { logout} = userSlice.actions
export default userSlice.reducer

