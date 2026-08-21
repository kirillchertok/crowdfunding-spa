import { useSelector } from 'react-redux';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

import { PATHS } from '@/constants/routes';

export const ProtectedRoute = () => {
    const location = useLocation();
    const isAuthenticated = useSelector(state => state.user.isAuthenticated);

    if (!isAuthenticated) {
        return (
            <Navigate
                to={PATHS.LOGIN}
                from={{ from: location }}
                replace
            />
        );
    }

    return <Outlet />;
};
