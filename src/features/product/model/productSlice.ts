import {createSlice} from "@reduxjs/toolkit";
import {Product} from "shared/api/types";

interface InitialState {
    filters: { [key: string]: string }[],
    category: string | null,
    currentProduct: Product | null
}

const initialState: InitialState = {
    filters: [],
    category: null,
    currentProduct: null,
}

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        setCategory: (state, action) => {
            state.category = action.payload
        },
        setCurrentProduct: (state, action) => {
            state.currentProduct = action.payload
        }
    }
})

export const {setCategory,setCurrentProduct} = productSlice.actions
export default productSlice.reducer