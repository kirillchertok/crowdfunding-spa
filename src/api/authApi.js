import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { login, logout } from '@/redux/slices/userSlice';
import TokenStorage from '@/utils/tokenStorage';

const baseQuery = fetchBaseQuery({
    baseUrl: process.env.AUTH_API_URL,

    prepareHeaders: headers => {
        const token = TokenStorage.getAccessToken();

        if (token) {
            headers.set('Authorization', `Bearer ${token}`);
        }

        return headers;
    },
});

export const baseQueryWithReauth = async (args, api, extraOptions) => {
    let result = await baseQuery(args, api, extraOptions);

    if (result.error?.status === 401) {
        const refreshToken = TokenStorage.getRefreshToken();

        if (!refreshToken) {
            api.dispatch(logout());
            TokenStorage.clearTokens();

            return result;
        }

        const refreshResult = await baseQuery(
            {
                url: '/auth/refresh',
                method: 'POST',
                body: {
                    refreshToken,
                    expiresInMins: 30,
                },
            },
            api,
            extraOptions
        );

        if (refreshResult.data) {
            const { accessToken, refreshToken: newRefreshToken } = refreshResult.data;

            TokenStorage.setTokens({
                accessToken,
                refreshToken: newRefreshToken ?? refreshToken,
            });

            api.dispatch(
                login({
                    accessToken,
                    user: api.getState().auth.user,
                })
            );

            result = await baseQuery(args, api, extraOptions);
        } else {
            TokenStorage.clearTokens();
            api.dispatch(logout());
        }
    }

    return result;
};

export const authApi = createApi({
    reducerPath: 'authApi',

    baseQuery: baseQueryWithReauth,

    endpoints: builder => ({
        login: builder.mutation({
            query: credentials => ({
                url: '/auth/login',
                method: 'POST',
                body: {
                    username: credentials.username,
                    password: credentials.password,
                    expiresInMins: 30,
                },
            }),
        }),

        getCurrentUser: builder.query({
            query: () => '/auth/me',
        }),

        refreshToken: builder.mutation({
            query: refreshToken => ({
                url: '/auth/refresh',
                method: 'POST',
                body: {
                    refreshToken,
                    expiresInMins: 30,
                },
            }),
        }),
    }),
});

export const { useLoginMutation, useGetCurrentUserQuery, useRefreshTokenMutation } = authApi;
