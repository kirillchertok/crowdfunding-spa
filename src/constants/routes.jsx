import { lazy } from 'react';

const Home = lazy(() => import('@/pages/Home/Home'));
const Locations = lazy(() => import('@/pages/Locations/Locations'));
const Shop = lazy(() => import('@/pages/Shop/Shop'));
const NotFound = lazy(() => import('@/pages/NotFound/NotFound'));

export const PATHS = {
    HOME: '/',
    LOGIN: '/login',
    LOCATIONS: '/locations',
    SHOP: '/shop',
};

export const ROUTES = [
    { path: PATHS.HOME, element: <Home />, displayName: 'Home' },
    {
        path: PATHS.LOGIN,
        element: <Home />,
        displayName: 'Login',
    },
    {
        path: PATHS.LOCATIONS,
        element: <Locations />,
        displayName: 'Locations',
    },
    { path: PATHS.SHOP, element: <Shop />, displayName: 'Shop' },
    { path: '*', element: <NotFound /> },
];
