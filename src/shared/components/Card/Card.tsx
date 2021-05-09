import React, { memo } from 'react';

import style from './card.module.css';
import ProvideTheme from 'shared/provider/ThemeProvider';
import ICard from './interfaces/card.interface';
import useNameToPrice from 'shared/hooks/useNameToPrice';
import useGetPokemonByUrl from 'shared/hooks/useGetPokemonByUrl';
import CardSkeleton from '../CardSkeleton/CardSkeleton';
import Button from '../Button/Button';
import { useCartItem } from 'context/cart/CartContext';
import IPokemonCart from 'shared/interfaces/pokemon-cart.interface';
import priceToCurrency from 'shared/transformers/currenct-to-currency';

const Card: React.FC<ICard> = ({ url }) => {
    const theme = ProvideTheme();
    const { pokemonInformations, isLoading } = useGetPokemonByUrl(url);
    const price = useNameToPrice(pokemonInformations?.name);
    const { cartItem, setCartItem } = useCartItem();

    function addItemToCart(): void {
        const item: IPokemonCart = {
            imageUrl: pokemonInformations?.sprites.front_default,
            name: pokemonInformations?.name,
            id: pokemonInformations?.id,
            price: Number(price)
        };
        const items = [...cartItem, item]
        
        setCartItem(items);
    }

    return (
        isLoading
            ? <CardSkeleton />
            : <article className={`${style.card} ${theme?.styles.card.cardContainer}`}>
                <img
                    className={`${style.image}`}
                    width="200px"
                    height="200px"
                    loading="lazy"
                    src={pokemonInformations?.sprites.front_default}
                    alt={pokemonInformations?.name}
                />

                <h4 className={`${style.title} ${theme?.styles.card.titleContainer}`}>
                    {pokemonInformations?.name}
                </h4>

                <span className={`${style.price} ${theme?.styles.card.priceContainer}`}>
                    {price && priceToCurrency(price)}
                </span>

                <Button
                    click={() => addItemToCart()}
                    ariaLabel="Adicionar no carrinho"
                    type="Label"
                    hasRipple={true}
                >
                    Adicionar no carrinho
                </Button>
            </article>
    );
}

export default memo(Card);