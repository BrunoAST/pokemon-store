import React, { useEffect, useState } from 'react';

import style from './card.module.css';
import ProvideTheme from 'shared/helpers/ThemeProvider';
import IPokemonInformations from 'shared/interfaces/pokemon-informations.interface';
import ListHttpService from 'shared/services/ListHttpService';
import ICard from './interfaces/card.interface';
import useNameToPrice from 'shared/hooks/useNameToPrice';

const Card: React.FC<ICard> = ({ url }) => {
    const theme = ProvideTheme();
    const [pokemonInformations, setPokemonInformations] = useState<IPokemonInformations>();
    const price = useNameToPrice(pokemonInformations?.name);

    useEffect(() => {
        async function getPokemonByUrl() {
            await ListHttpService.getPokemonByUrl(url)
                .then(res => setPokemonInformations(res.data));
        }

        getPokemonByUrl();

        return () => { }
    }, [url]);

    return (
        <article className={`${style.card} ${theme?.styles.card.cardContainer}`}>
            <img
                className={`${style.image}`}
                src={pokemonInformations?.sprites.front_default}
                alt={pokemonInformations?.name}
            />
            <p className={`${style.name}`}>
                {pokemonInformations?.name}
            </p>
            <span className={`${style.price}`}>
                {price && `R$ ${price}`}
            </span>
        </article>
    );
}

export default Card;