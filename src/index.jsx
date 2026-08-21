import '@/styles/global.css';
import '@/styles/variables.css';
import 'leaflet/dist/leaflet.css';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

import App from '@/app/App';
import ErrorBoundary from '@/components/ErrorBoundary/ErrorBoundary';
import { persistor, store } from '@/redux/store';

import { AuthProvider } from './components/AuthProvider/AuthProvider';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
    <StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <PersistGate
                    persistor={persistor}
                    loading={null}
                >
                    <ErrorBoundary>
                        <AuthProvider>
                            <App />
                        </AuthProvider>
                    </ErrorBoundary>
                </PersistGate>
            </Provider>
        </BrowserRouter>
    </StrictMode>
);
