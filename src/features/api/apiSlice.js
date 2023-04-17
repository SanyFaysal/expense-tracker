import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const apiSlice = createApi({
  reducerPath: "apiSlice",
  baseQuery: fetchBaseQuery({
    // baseUrl: `${process.env.SERVER_DEV_LINK}/api/v1`,
    // baseUrl: `http://localhost:8080/api/v1`,
    baseUrl: `https://expense-tracker-server-de11.onrender.com/api/v1`,
  }),
  tagTypes: ["Expense"],
  endpoints: () => ({}),
});

export default apiSlice;
