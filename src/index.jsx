import { createRoot } from 'react-dom/client';

import App from '@/app/App';
import { StrictMode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
    <StrictMode>
        <BrowserRouter>
            <ErrorBoundary>
                <App />
            </ErrorBoundary>
        </BrowserRouter>
    </StrictMode>
);

