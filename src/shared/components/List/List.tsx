import React from 'react';

import style from './list.module.css';
import ProvideTheme from 'shared/helpers/ThemeProvider';
import Card from '../Card/Card';
import useListPokemon from 'shared/hooks/useListPokemon';

const List: React.FC = () => {
    const theme = ProvideTheme();
    const { pokemonBase } = useListPokemon(theme?.baseApiUrl);
   
    return (
        <ul className={`container ${style.listContainer}`}>
            {
                pokemonBase?.map((item, index) => 
                    <li key={index}>
                        <Card
                            url={item.pokemon.url}
                        />
                    </li>
                )
            }
        </ul>
    );
}

export default List;