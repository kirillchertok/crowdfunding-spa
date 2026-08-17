import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import { ROUTES } from '@/constants/routes';

const App = () => {
    return (
        <Suspense fallback={'loading'}>
            <Routes>
                {ROUTES.map(({ path, element }) => (
                    <Route
                        key={path}
                        path={path}
                        element={element}
                    />
                ))}
            </Routes>
        </Suspense>
    );
};

export default App;
