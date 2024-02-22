import {combineReducers, configureStore} from '@reduxjs/toolkit'
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import productSlice from "features/product/model/productSlice";
import appSlice from "features/header/model/appSlice";
import userReducer from 'features/user/model/userSlice'


const rootReducer = combineReducers({
    product: productSlice,
    app: appSlice,
    user: userReducer,
})

export type RootState = ReturnType<typeof rootReducer>

const store = configureStore({
    reducer: rootReducer
})

export type AppDispatch = typeof store.dispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export const useAppDispatch: () => AppDispatch = useDispatch

export default store