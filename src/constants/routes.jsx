import { lazy } from 'react';

const Home = lazy(() => import('@/pages/Home/Home'));
const Locations = lazy(() => import('@/pages/Locations/Locations'));
const Shop = lazy(() => import('@/pages/Shop/Shop'));
const Login = lazy(() => import('@/pages/Login/Login'));

export const PATHS = {
    HOME: '/',
    LOGIN: '/login',
    LOCATIONS: '/locations',
    SHOP: '/shop',
};

export const PUBLIC_ROUTES = [
    {
        path: PATHS.LOGIN,
        element: <Login />,
        displayName: 'Login',
    },
];

export const PROTECTED_ROUTES = [
    { path: PATHS.HOME, element: <Home />, displayName: 'Home' },
    {
        path: PATHS.LOCATIONS,
        element: <Locations />,
        displayName: 'Locations',
    },
    { path: PATHS.SHOP, element: <Shop />, displayName: 'Shop' },
];
