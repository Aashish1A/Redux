import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"


export const api = createApi({
    baseQuery: fetchBaseQuery({baseUrl : "http://localhost:5173"}),
    endpoints: (builder) => {
        getTasks: builder.query({
            query: () => "/tasks",
        })
    }
})


export const  { useGetTaskQuery } = api;