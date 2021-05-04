import React from 'react';

import { useTheme } from '../../context/Theme';

const Home: React.FC = () => {
    const { theme } = useTheme();

    return (
        <>
            <h1>{theme}</h1>
        </>
    );
}

export default Home;
