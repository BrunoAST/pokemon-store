import React, { createContext, ReactNode, useContext, useState } from 'react';
import IPokemonCart from 'shared/interfaces/pokemon-cart.interface';

type CartContextType = {
    cartItem: IPokemonCart[];
    setCartItem: (cartItem: IPokemonCart[]) => void;
}

const CartContext = createContext<CartContextType>({ cartItem: [] as IPokemonCart[], setCartItem: cartItem => console.warn('no item provided')});

const CartProvider: React.FC<ReactNode> = ({ children }) => {
    const [cartItem, setCartItem] = useState<IPokemonCart[]>([]);

    return (
        <CartContext.Provider value={{ cartItem, setCartItem }}>
            { children }
        </CartContext.Provider>
    );
}

export default CartProvider;

export function useCartItem() {
    const context = useContext(CartContext);
    const { cartItem, setCartItem } = context;
    return { cartItem, setCartItem };
}

