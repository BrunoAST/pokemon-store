import React, { useEffect } from 'react';
import { Redirect, Route, Switch, useLocation } from 'react-router-dom';

import { EThemeContextOptions } from '../context/enum/ThemeContextOptions';
import { useTheme } from '../context/Theme';
import Home from '../pages/Home/Home';
import NotFound from '../pages/NotFound/NotFound';
import { BrowserRoute } from '../shared/constants/browser-route.const';

export default function RoutesContainer() {
    const url = useLocation().pathname;
    const { setTheme } = useTheme();

    console.log(process.env.REACT_APP_TYPE);

    useEffect(() => {
        switch (url) {
            case '/water-pokemon':
                setTheme(EThemeContextOptions.PokeWater);
                break;
            case '/fire-pokemon':
                setTheme(EThemeContextOptions.PokeFire);
                break;
            case '/dragon-pokemon':
                setTheme(EThemeContextOptions.PokerDragon);
                break;
            default:
                break;
        }
    }, [setTheme, url])

    return (
        <Switch>
            <Route path={BrowserRoute.PokeDragons} component={Home} />
            <Route path={BrowserRoute.PokeFires} component={Home} />
            <Route path={BrowserRoute.PokeWaters} component={Home} />
            <Route exact path="">
                <Redirect to={BrowserRoute.PokeFires} />
            </Route>
            <Route path="*" component={NotFound} />
        </Switch>
    );
}
