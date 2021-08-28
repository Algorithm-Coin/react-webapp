import React from 'react';

import Routes from './routes';
import AppLayout from './layouts/AppLayout';
import './styles/_index.scss';

function App() {
    return (
        <AppLayout>
            <Routes />
        </AppLayout>
    );
}

export default App;
