import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from '../pages/Home/Home';
import NotFound from '../pages/NotFound/NotFound';
import { BrowserRoute } from '../shared/constants/browser-route.const';

export default function RoutesContainer() {
    return (
        <Routes>
            {/* ADD CART CONTEXT BETWEEN HOME AND CARD ROUTES */}
            <Route path={BrowserRoute.HOME}>
                <Route path={BrowserRoute.HOME} element={<Home />} />
                <Route path={BrowserRoute.HOME_FILTER} element={<Home />} />
            </Route>
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}
