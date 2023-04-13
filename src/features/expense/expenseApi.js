import apiSlice from "../api/apiSlice";

const expenseApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createExpense: builder.mutation({
      query: (data) => ({
        url: "/expense",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Expense"],
    }),
    getExpenses: builder.query({
      query: () => ({
        url: "/expense",
      }),
      providesTags: ["Expense"],
    }),
  }),
});

export const { useCreateExpenseMutation, useGetExpensesQuery } = expenseApi;
