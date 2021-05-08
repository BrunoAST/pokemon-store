import React, { useEffect } from 'react';

import { useCartItem } from 'context/cart/CartContext';

const Cart: React.FC = () => {
    // Deve possuir um contexto que irá controlar seu estado de aberto/fechado
    const { cartItem } = useCartItem();

    useEffect(() => {
        function logItems() {
            console.log('CART ITEM', cartItem)
        }

        logItems();
    }, [cartItem])

    return (
        <>
           
        </>
    );
}

export default Cart;
