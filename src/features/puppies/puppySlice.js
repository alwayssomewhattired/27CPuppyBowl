import api from "../../store/api";

/*
TODO: Define the following 4 endpoints:
  1. getPuppies (query)
  2. getPuppy (query)
  3. addPuppy (mutation)
  4. deletePuppy (mutation)

The query endpoints should provide the "Puppy" tag.
The mutation endpoints should invalidate the "Puppy" tag.

(Optional) TODO: Write `transformResponse` and `transformErrorResponse`
functions for each endpoint.
*/

const puppyApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getPuppies: builder.query({
      query: () => ({
        url: "/players",
        method: "GET",
      }),
      providesTags: ["Puppy"],
    }),
    deletePuppy: builder.mutation({
      query: (id) => ({
        url: `/players/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Puppy"],
    }),
    addPuppy: builder.mutation({
      query: ({ name, breed }) => ({
        url: "/players",
        method: "POST",
        body: { name, breed },
      }),
      invalidatesTags: ["Puppy"],
    }),
  }),
});

export const {
  useGetPuppiesQuery,
  useGetPuppyQuery,
  useAddPuppyMutation,
  useDeletePuppyMutation,
} = puppyApi;
