import {createSlice} from "@reduxjs/toolkit";
import {Product} from "shared/api/types";
import {RootState} from "../../../app/store";

interface InitialState {
    filters: { [key: string]: string }[],
    category: string | null,
    currentProduct: Product | null
    cart: { count: number, product: Product }[]
}

const initialState: InitialState = {
    filters: [],
    category: null,
    currentProduct: null,
    cart: []
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
        },
        addToCart: (state, action) => {
            if (state.cart.find(el => el.product.id === action.payload.id)) {
                state.cart = state.cart.map(el => {
                    if (el.product.id === action.payload.id) {
                        el.count++
                    }
                    return el
                })
            } else {
                state.cart = [...state.cart,
                    {count: 1, product: action.payload}
                ]
            }
        },
        removeFromCart: (state, action) => {
            state.cart = state.cart.map(el => {
                if (el.product.id === action.payload.id) {
                    el.count--
                }
                return el
            }).filter(el => el.count > 0)
        }
    }
})


export const selectCurrentProduct = (state: RootState) => state.product.currentProduct
export const selectCategory = (state: RootState) => state.product.category
export const selectCart = (state: RootState) => state.product.cart


export const {setCategory,removeFromCart,addToCart, setCurrentProduct} = productSlice.actions
export default productSlice.reducer