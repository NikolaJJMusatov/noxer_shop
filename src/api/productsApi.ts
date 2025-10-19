import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ProductsResponse } from "../types/product";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://noxer-test.ru/webapp/api" }),
  endpoints: (builder) => ({
    getOnMainProducts: builder.query<ProductsResponse, void>({
      query: () => "/products/on_main",
    }),
    filterProducts: builder.query<ProductsResponse, { 
      search?: string; 
      page?: number; 
      per_page?: number; 
      category_ids?: number[];
    }>({
      query: ({ search = "", page = 1, per_page = 50,  category_ids = null}) => ({
        url: "/products/filter",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: {
          search,
          page,
          per_page,
          category_ids,
        },
      }),
    }),
  }),
});

export const { useGetOnMainProductsQuery, useFilterProductsQuery } = productsApi;