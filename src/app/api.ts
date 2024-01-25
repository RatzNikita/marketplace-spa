import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {Product} from "../shared/api/types";


export const productsApi = createApi({
    reducerPath: 'productsApi',
    baseQuery: fetchBaseQuery({baseUrl: "https://dummyjson.com"}),
    endpoints: (builder) => ({
        getProducts: builder.query<{
            products: Product[],
            total: number,
            skip: number,
            limit: number,
        }, void>({
            query: () => `/products?limit=100`
        }),
        getProductById: builder.query({
            query: (id: number) => `/products/${id}`
        }),
        getProductsCategories: builder.query<string[], void>({
            query: () => `/products/categories`
        })
    })
})

export const {useGetProductByIdQuery, useGetProductsQuery, useGetProductsCategoriesQuery} = productsApi
export default productsApi