import React, { memo, useEffect } from 'react';

import style from './cart.module.css';
import { useCartItem } from 'context/cart/CartContext';
import ICart from './interfaces/cart.interface';
import RemoveBodyOverflow from 'shared/helpers/RemoveBodyOverflow';
import priceToCurrency from 'shared/transformers/currency-to-currency';
import Button from '../Button/Button';
import ProvideTheme from 'shared/provider/ThemeProvider';

const Cart: React.FC<ICart> = ({ show, onClose }) => {
  const { cartItem } = useCartItem();
  const theme = ProvideTheme();

  console.log(cartItem)

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
                  role="button"
                  aria-label="Fechar carrinho"
                  className="closeIcon"
                  onClick={onClose}
                >
                </div>
              </section>

              {
                cartItem.length <= 0 ?
                  <h4 className={`${style.listEmptyCart}`}>Seu carrinho está vazio</h4> :
                  <ul className={`${style.list}`}>
                    {
                      cartItem.map(item =>
                        <li key={item.id} className={`${style.listItem}`}>
                          <picture>
                            <img
                              src={item.imageUrl}
                              alt={item.name}
                              width="100px"
                              height="100px"
                              className={`${style.listImage}`}
                              loading="lazy"
                            />
                          </picture>

                          <div className={`${style.listNamePrice}`}>
                            <h6 className={`${style.listPokemonName}`}>
                              {item.name}
                            </h6>
                            <p>{priceToCurrency(item.price)}</p>
                          </div>

                          <div className={`${style.listButtons}`}>
                            <Button
                              ariaLabel="Remover um"
                              type="Icon"
                              hasRipple={true}
                              style={theme?.styles.cart.buttons.minus}
                              click={() => { }}
                            >
                              <img
                                loading="lazy"
                                style={{display: 'block'}}
                                src={theme?.images.icons.minus}
                                alt="Remover um"
                              />
                            </Button>

                            {/* {} */}

                            <Button
                              ariaLabel="Adicionar um"
                              type="Icon"
                              hasRipple={true}
                              style={theme?.styles.cart.buttons.plus}
                              click={() => { }}
                            >
                              <img
                                style={{display: 'block'}}
                                src={theme?.images.icons.plus}
                                alt="Adicionar um"
                                loading="lazy"
                              />
                            </Button>

                          </div>
                        </li>
                      )
                    }
                  </ul>
              }
            </div>
          </div>
          : null
      }
    </>
  );
}

export default memo(Cart);
