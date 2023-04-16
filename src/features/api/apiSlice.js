import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const apiSlice = createApi({
  reducerPath: "apiSlice",
  baseQuery: fetchBaseQuery({
    // baseUrl: process.env.REACT_APP_DEV_URL,
    // baseUrl: 'http://localhost:5000/api/v1',
    baseUrl: "http://localhost:8080/api/v1",
  }),
  tagTypes: ["Expense"],
  endpoints: () => ({}),
});

export default apiSlice;
