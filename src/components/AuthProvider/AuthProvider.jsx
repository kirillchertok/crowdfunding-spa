import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { useGetCurrentUserQuery } from '@/api/authApi';
import { login } from '@/redux/slices/userSlice';
import TokenStorage from '@/utils/tokenStorage';

export const AuthProvider = ({ children }) => {
    const dispatch = useDispatch();

    const token = TokenStorage.getAccessToken();

    const {
        data: user,
        isLoading,
        isError,
    } = useGetCurrentUserQuery(undefined, {
        skip: !token,
    });

    useEffect(() => {
        if (user) {
            dispatch(
                login({
                    user,
                })
            );
        }
    }, [user, token, dispatch]);

    if (isError) return <p>Something went wrong with authentification</p>;

    if (isLoading) return <p>Loading...</p>;

    return children;
};
