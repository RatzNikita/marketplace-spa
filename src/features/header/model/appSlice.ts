import {createSlice} from "@reduxjs/toolkit";

interface InitialState {
    catalog: boolean,
}

const initialState: InitialState = {
    catalog: false,
}


const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        toggleCatalog(state) {
            state.catalog = !state.catalog
        }
    }
})

export const {toggleCatalog} = appSlice.actions

export default appSlice.reducer