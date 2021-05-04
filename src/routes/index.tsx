import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import Home from '../pages/Home/Home';
import NotFound from '../pages/NotFound/NotFound';
import { BrowserRoute } from '../shared/constants/browser-route.const';

export default function RoutesContainer() {
    return (
        <Switch>
            <Route path={BrowserRoute.LIST} component={Home} />
            <Route exact path="">
                <Redirect to={BrowserRoute.LIST} />
            </Route>
            <Route path="*" component={NotFound} />
        </Switch>
    );
}
