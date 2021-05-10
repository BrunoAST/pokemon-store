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
import numberToCurrency from 'shared/transformers/number-to-currency';
import { setPokemon } from 'shared/storage/local-storage';
import { useTheme } from 'context/theme/ThemeContext';

const Card: React.FC<ICard> = ({ url }) => {
    const themeProvider = ProvideTheme();
    const { theme } = useTheme();
    const { pokemonInformations, isLoading } = useGetPokemonByUrl(url);
    const price = useNameToPrice(pokemonInformations?.name);
    const { cartItem, setCartItem } = useCartItem();

    function addItemToCart(): void {
        const item: IPokemonCart = {
            imageUrl: pokemonInformations?.sprites.front_default,
            name: pokemonInformations?.name,
            id: pokemonInformations?.id,
            price: Number(price),
            quantity: 1
        };

        const findedIndex = cartItem.findIndex(item => item.id === pokemonInformations?.id);

        if (findedIndex < 0) {
            const items = [...cartItem, item];
            setCartItem(items);
            setPokemon(items, theme);
            return;
        }

        const itemToModify = cartItem[findedIndex];
        itemToModify.quantity++;
        cartItem[findedIndex] = itemToModify;
        setCartItem([...cartItem]);
        setPokemon([...cartItem], theme);
    }

    return (
        isLoading
            ? <CardSkeleton />
            : <article className={`${style.card} ${themeProvider?.styles.card.cardContainer}`}>
                <img
                    className={`${style.image}`}
                    width="200px"
                    height="200px"
                    loading="lazy"
                    src={pokemonInformations?.sprites.front_default}
                    alt={pokemonInformations?.name}
                />

                <h4 className={`${style.title} ${themeProvider?.styles.card.titleContainer}`}>
                    {pokemonInformations?.name}
                </h4>

                <span data-cy="cardPrice" className={`${style.price} ${themeProvider?.styles.card.priceContainer}`}>
                    {price && numberToCurrency(price)}
                </span>

                <Button
                    click={() => addItemToCart()}
                    ariaLabel="Adicionar no carrinho"
                    type="Label"
                    dataCy="cardButton"
                    hasRipple={true}
                >
                    Adicionar no carrinho
                </Button>
            </article>
    );
}

export default memo(Card);