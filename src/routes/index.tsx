import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import { BrowserRoute } from '../shared/constants/browser-route.const';

const Home = lazy(() => import('pages/Home/Home'));
const NotFound = lazy(() => import('pages/NotFound/NotFound'));

export default function RoutesContainer() {
    return (
        <Suspense fallback={<></>}>
            <Routes>
                <Route path={BrowserRoute.HOME}>
                    <Route path={BrowserRoute.HOME} element={<Home />} />
                    <Route path={BrowserRoute.HOME_FILTER} element={<Home />} />
                </Route>
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Suspense>
    );
}
