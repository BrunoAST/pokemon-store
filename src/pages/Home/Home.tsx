import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import List from 'shared/components/List/List';
import Navbar from 'shared/components/Navbar/Navbar';

const Home: React.FC = () => {
    const [param, setParam] = useState<string>();
    const { filter } = useParams();

    useEffect(() => {
        const getParam = () => {
            setParam(filter);
        } 

        getParam();
    }, [filter])

    return (
        <>
            <Navbar />

            <List filter={param} />
        </>
    );
}

export default Home;
