import React, { useEffect, useState } from 'react';

import style from './list.module.css';
import ProvideTheme from 'shared/helpers/ThemeProvider';
import Card from '../Card/Card';
import useListPokemon from 'shared/hooks/useListPokemon';
import IPokemonBase from 'shared/interfaces/pokemon-base.interface';

const List: React.FC<{ filter: any }> = ({ filter }) => {
    const theme = ProvideTheme();
    const [filtered, setFiltered] = useState<IPokemonBase[] | undefined>();
    const { pokemonBase } = useListPokemon(theme?.baseApiUrl);

    useEffect(() => {
        const a = () => {
            if (!filter || !filter?.trim()) {
                setFiltered([]);
                return;
            }

            const res = pokemonBase?.filter(a => a.pokemon.name.trim().toLowerCase().includes(filter));
            setFiltered(res);
        }

        a();
    }, [filter, pokemonBase, setFiltered]);

    return (
        <ul className={`container ${style.listContainer}`}>
            {
                (filtered?.length) ?
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
