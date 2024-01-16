import {combineReducers, configureStore} from '@reduxjs/toolkit'
import {useDispatch} from "react-redux";
import productsApi from "./api";
import productSlice from "features/product/model/productSlice";


const rootReducer = combineReducers({
    [productsApi.reducerPath]: productsApi.reducer,
    product: productSlice,
})

export type RootState = ReturnType<typeof rootReducer>

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(productsApi.middleware)
})

export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch

export default store