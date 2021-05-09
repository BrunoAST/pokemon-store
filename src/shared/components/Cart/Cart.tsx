import React, { memo, useEffect } from 'react';

import style from './cart.module.css';
import { useCartItem } from 'context/cart/CartContext';
import ICart from './interfaces/cart.interface';
import RemoveBodyOverflow from 'shared/helpers/RemoveBodyOverflow';
// import ProvideTheme from 'shared/provider/ThemeProvider';

const Cart: React.FC<ICart> = ({ show, onClose }) => {
    // const theme = ProvideTheme();
    const { cartItem } = useCartItem();

    useEffect(() => {
        RemoveBodyOverflow(show);
        
        return () => { }
    }, [show]);

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
                            <section
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
                            </section>

                            <ul className={`${style.list}`}>
                                {
                                    cartItem.map(item =>
                                        <li className={`${style.listItem}`}>
                                            <picture>
                                                <img
                                                    src={item.imageUrl}
                                                    alt={item.name}
                                                    width="100px"
                                                    height="100px"
                                                    className={`${style.listImage}`}
                                                />
                                            </picture>
                                        </li>
                                    )
                                }
                            </ul>
                        </div>
                    </div>
                    : null
            }
        </>
    );
}

export default memo(Cart);
