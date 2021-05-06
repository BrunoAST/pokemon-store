import React, { useEffect, useState } from 'react';

import style from './list.module.css';
import ProvideTheme from 'shared/helpers/ThemeProvider';
import IPokemonBase from '../../interfaces/pokemon-base.interface';
import ListHttpService from '../../services/ListHttpService';
import Card from '../Card/Card';

const List: React.FC = () => {
    const theme = ProvideTheme();
    const [pokemonBase, setPokemonBase] = useState<IPokemonBase[]>();

    useEffect(() => {
        async function listPokemon() {
            await ListHttpService.listPokemonByType(theme?.baseApiUrl)
                .then(res => setPokemonBase(res.data.pokemon));
        }

        listPokemon();

        return () => { }
    }, [theme?.baseApiUrl]);

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