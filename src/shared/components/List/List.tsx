import React from 'react';

import style from './list.module.css';
import ProvideTheme from 'shared/helpers/ThemeProvider';
import Card from '../Card/Card';
import useListPokemon from 'shared/hooks/useListPokemon';
import EmptyList from '../EmptyList/EmptyList';
import useListFilter from 'shared/hooks/useListFilter';

const List: React.FC = () => {
    const theme = ProvideTheme();
    const { pokemonBase } = useListPokemon(theme?.baseApiUrl);
    const { filtered, isFiltered } = useListFilter(pokemonBase);

    return (
        <ul className={`container ${style.listContainer}`}>
            {
                (isFiltered && !filtered?.length)
                    ?
                    <EmptyList />
                    :
                    (filtered?.length)
                        ?
                        filtered?.map((item, index) =>
                            <li key={index}>
                                <Card
                                    url={item.pokemon.url}
                                />
                            </li>
                        )
                        :
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
