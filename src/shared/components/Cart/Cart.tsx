import React, { memo } from 'react';

import style from './cart.module.css';
import { useCartItem } from 'context/cart/CartContext';
import ICart from './interfaces/cart.interface';
import ProvideTheme from 'shared/provider/ThemeProvider';

const Cart: React.FC<ICart> = ({ show, onClose }) => {
    const theme = ProvideTheme();
    const { cartItem } = useCartItem();

    return (
        <>
            {
                show ?
                    <div
                        className={`${style.cartOverlay}`}
                    >
                        <div
                            className={`${style.cartContainer}`}
                        >
                            <div
                                className={`${style.cartTilteContainer}`}
                            >
                                <h1
                                    tabIndex={0}
                                    className={`${style.cartTitle}`}
                                >
                                    Detalhes do carrinho
                                </h1>

                                <div
                                    tabIndex={0}
                                    aria-label="Fechar carrinho"
                                    className={`${style.closeIcon}`}
                                    onClick={onClose}
                                >
                                </div>
                            </div>


                        </div>
                    </div>
                    : null
            }
        </>
    );
}

export default memo(Cart);
