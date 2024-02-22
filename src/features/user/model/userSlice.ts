import {createSlice} from "@reduxjs/toolkit";


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
        login(state, action) {
            state.isAuth = true
            state.token = action.payload
        },
        logout(state) {
            state.isAuth = false
            state.token = ''
        }
    }
})

export const {login, logout} = userSlice.actions
export default userSlice.reducer

