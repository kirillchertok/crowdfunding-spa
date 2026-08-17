import { lazy } from 'react';

const Home = lazy(() => import('@/pages/Home/Home'));
const NotFound = lazy(() => import('@/pages/NotFound/NotFound'));

export const ROUTES = [
    { path: '/', element: <Home />, displayName: 'Home' },
    { path: '/login', element: <Home />, displayName: 'Login' },
    { path: '/locations', element: <Home />, displayName: 'Locations' },
    { path: '/shop', element: <Home />, displayName: 'Shop' },
    { path: '*', element: <NotFound /> },
];
