import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { EThemeContextOptions } from './context/enum/ThemeContextOptions';
import ThemeProvider, { useTheme } from './context/Theme';
import Routes from './routes/index';

function App() {
    const { setTheme } = useTheme();

    setTheme(process.env.REACT_APP_TYPE as EThemeContextOptions);

    return (
        <ThemeProvider>
            <BrowserRouter>
                <Routes />
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;
