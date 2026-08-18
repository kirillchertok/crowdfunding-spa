import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const placesApi = createApi({
    reducerPath: 'placesApi',

    baseQuery: fetchBaseQuery({
        baseUrl: process.env.PLACES_API_URL,
    }),

    endpoints: builder => ({
        getPlaces: builder.query({
            query: params => ({
                url: '/properties',
                params,
            }),
        }),
    }),
});

export const { useGetPlacesQuery } = placesApi;
