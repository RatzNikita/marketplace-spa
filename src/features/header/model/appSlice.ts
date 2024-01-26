import {createSlice} from "@reduxjs/toolkit";

interface InitialState {
    catalog: boolean,
    search: string;
}

const initialState: InitialState = {
    catalog: false,
    search: '',
}


const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        toggleCatalog(state) {
            state.catalog = !state.catalog
        },
        setSearch(state, action) {
            state.search = action.payload
        }
    }
})

export const {toggleCatalog,setSearch} = appSlice.actions

export default appSlice.reducer