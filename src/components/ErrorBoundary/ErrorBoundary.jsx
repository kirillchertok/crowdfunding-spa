import React from 'react';

import './ErrorBoundary.css';

export default class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null };
    }
    static getDerivedStateFromError(error) {
        return { hasError: true, error };
    }

    componentDidCatch(error, errorInfo) {
        console.error('Ошибка:', error, errorInfo);
    }

    render() {
        const { hasError, error } = this.state;

        if (hasError && error) {
            return (
                <div className={'error-boundary'}>
                    <h1>Something gone wrong</h1>
                    <details className={'error-boundary__message'}>
                        <summary>Error information</summary>
                        <pre className={'error-boundary__error-text'}>{error.message}</pre>
                    </details>
                </div>
            );
        }

        return this.props.children;
    }
}
