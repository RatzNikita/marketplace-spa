import {createSlice} from "@reduxjs/toolkit";

interface InitialState {
    filters: { [key: string]: string }[],
    category: string | null,
}

const initialState: InitialState = {
    filters: [],
    category: null,
}

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        setCategory: (state, action) => {
            state.category = action.payload
        }
    }
})

export const {setCategory} = productSlice.actions
export default productSlice.reducer