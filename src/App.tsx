import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import ThemeProvider from './context/Theme';
import Routes from './routes/index';

function App() {
    return (
        <ThemeProvider>
            <BrowserRouter>
                <Routes />
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;
