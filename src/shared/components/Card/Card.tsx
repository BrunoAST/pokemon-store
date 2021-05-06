import React from 'react';

import style from './card.module.css';
import ProvideTheme from 'shared/helpers/ThemeProvider';
import ICard from './interfaces/card.interface';
import useNameToPrice from 'shared/hooks/useNameToPrice';
import useGetPokemonByUrl from 'shared/hooks/useGetPokemonByUrl';
import CardSkeleton from '../CardSkeleton/CardSkeleton';

const Card: React.FC<ICard> = ({ url }) => {
    const theme = ProvideTheme();
    const { pokemonInformations, isLoading } = useGetPokemonByUrl(url);
    const price = useNameToPrice(pokemonInformations?.name);

    return (
        <CardSkeleton />
        // isLoading
        //     ? <CardSkeleton />
        //     : <article className={`${style.card} ${theme?.styles.card.cardContainer}`}>
        //         <img
        //             className={`${style.image}`}
        //             src={pokemonInformations?.sprites.front_default}
        //             alt={pokemonInformations?.name}
        //         />
        //         <h4 className={`${style.title} ${theme?.styles.card.titleContainer}`}>
        //             {pokemonInformations?.name}
        //         </h4>
        //         <span className={`${style.price} ${theme?.styles.card.priceContainer}`}>
        //             {price && `R$ ${price}`}
        //         </span>
        //     </article>
    );
}

export default Card;