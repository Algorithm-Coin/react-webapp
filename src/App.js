import React from 'react';
import Routes from './routes';
import AppLayout from './layouts/AppLayout';
import ThemeProvider from './contexts/ThemeContext';
import AnimatedCursor from 'react-animated-cursor';
import './styles/_index.scss';

function App() {
    return (
        <ThemeProvider>
            <AppLayout>
                <AnimatedCursor
                    innerSize={12}
                    outerSize={12}
                    color="253, 215, 0"
                    outerAlpha={0.2}
                    innerScale={0.7}
                    outerScale={5}
                />
                <Routes />
            </AppLayout>
        </ThemeProvider>
    );
}

export default App;
