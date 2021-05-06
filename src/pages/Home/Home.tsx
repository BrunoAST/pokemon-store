import React from 'react';

import List from 'shared/components/List/List';
import Navbar from 'shared/components/Navbar/Navbar';

const Home: React.FC = () => {
    return (
        <>
            <Navbar />

            <List />
        </>
    );
}

export default Home;
