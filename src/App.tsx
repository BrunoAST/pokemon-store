import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import CartProvider from 'context/cart/CartContext';
import ThemeProvider from './context/theme/ThemeContext';
import Routes from './routes/index';

function App() {
    return (
        <ThemeProvider>
            <CartProvider>
                <BrowserRouter>
                    <Routes />
                </BrowserRouter>
            </CartProvider>
        </ThemeProvider>
    );
}

export default App;
