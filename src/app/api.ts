import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {Product} from "../shared/api/types";
import {Form} from "../widgets/product/product-form";


export const productsApi = createApi({
    reducerPath: 'productsApi',
    baseQuery: fetchBaseQuery({baseUrl: "http://localhost:3000/graphql"}),
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
        }),
        createCard: builder.mutation({
            query: (form: Form) => `
                   mutation addProduct {
                       createProduct(createProductInput: ${form}) {
                       title
                       id
                    }
                   }
               `
        })
    })
})


export const {useGetProductByIdQuery, useGetProductsQuery, useGetProductsCategoriesQuery} = productsApi
export default productsApi