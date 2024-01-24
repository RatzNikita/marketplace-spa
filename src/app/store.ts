import {combineReducers, configureStore} from '@reduxjs/toolkit'
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import productsApi from "./api";
import productSlice from "features/product/model/productSlice";
import appSlice from "../features/header/model/appSlice";


const rootReducer = combineReducers({
    [productsApi.reducerPath]: productsApi.reducer,
    product: productSlice,
    app: appSlice,
})

export type RootState = ReturnType<typeof rootReducer>

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(productsApi.middleware)
})

export type AppDispatch = typeof store.dispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export const useAppDispatch: () => AppDispatch = useDispatch

export default store