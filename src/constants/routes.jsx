import { lazy } from 'react';

const Home = lazy(() => import('@/pages/Home/Home'));
const NotFound = lazy(() => import('@/pages/NotFound/NotFound'));

export const ROUTES = [
    { path: '/', element: <Home /> },
    { path: '*', element: <NotFound /> },
];
