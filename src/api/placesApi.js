import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { removeEmptyParams } from '@/utils/removeEmptyParams';

export const placesApi = createApi({
    reducerPath: 'placesApi',

    baseQuery: fetchBaseQuery({
        baseUrl: process.env.PLACES_API_URL,
    }),

    endpoints: builder => ({
        getPlaces: builder.query({
            query: params => ({
                url: '/properties',
                params: removeEmptyParams(params),
            }),
        }),
    }),
});

export const { useGetPlacesQuery } = placesApi;
