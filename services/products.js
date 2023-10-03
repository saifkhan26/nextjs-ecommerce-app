import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const ecommerceApi = createApi({
  reducerPath: 'ecommerceApi',
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/api" }),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => '/products'
    })
  })
  
})

export const {
  useGetAllProductsQuery
} = ecommerceApi
