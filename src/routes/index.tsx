import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from '../pages/Home/Home';
import NotFound from '../pages/NotFound/NotFound';
import { BrowserRoute } from '../shared/constants/browser-route.const';

export default function RoutesContainer() {
    return (
        <Routes>
            <Route path={BrowserRoute.HOME} element={<Home />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}
