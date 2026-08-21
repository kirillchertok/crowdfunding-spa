import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import { ProtectedRoute } from '@/components/ProtectedRoute/ProtectedRoute';
import { PROTECTED_ROUTES, PUBLIC_ROUTES } from '@/constants/routes';
import NotFound from '@/pages/NotFound/NotFound';

const App = () => {
    return (
        <Suspense fallback='loading'>
            <Routes>
                {PUBLIC_ROUTES.map(({ path, element }) => (
                    <Route
                        key={path}
                        path={path}
                        element={element}
                    />
                ))}
                <Route element={<ProtectedRoute />}>
                    {PROTECTED_ROUTES.map(({ path, element }) => (
                        <Route
                            key={path}
                            path={path}
                            element={element}
                        />
                    ))}
                </Route>

                <Route
                    path='*'
                    element={<NotFound />}
                />
            </Routes>
        </Suspense>
    );
};

export default App;
