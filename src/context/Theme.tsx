import React, { createContext, ReactNode, useContext, useState } from 'react';

import { EThemeContextOptions } from './enum/ThemeContextOptions';

export type ThemeContextType = {
    theme: EThemeContextOptions;
    setTheme: (Theme: EThemeContextOptions) => void;
}

const ThemeContext = createContext<ThemeContextType>({ theme: EThemeContextOptions.PokeFire, setTheme: theme => console.warn('no theme provided')});

const ThemeProvider: React.FC<ReactNode> = ({ children }) => {
    const [theme, setTheme] = useState(EThemeContextOptions.PokeFire);

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            { children}
        </ThemeContext.Provider>
    );
}

export default ThemeProvider;

export function useTheme() {
    const context = useContext(ThemeContext);
    const { theme, setTheme } = context;
    return { theme, setTheme };
}
