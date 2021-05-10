import React, { memo, useEffect, useState } from 'react';

import style from './cart.module.css';
import { useCartItem } from 'context/cart/CartContext';
import ICart from './interfaces/cart.interface';
import RemoveBodyOverflow from 'shared/helpers/RemoveBodyOverflow';
import priceToCurrency from 'shared/transformers/currency-to-currency';
import Button from '../Button/Button';
import ProvideTheme from 'shared/provider/ThemeProvider';
import closeIcon from 'assets/global/Close.svg';
import { useTheme } from 'context/theme/ThemeContext';
import { getPokemon, setPokemon } from 'shared/storage/local-storage';
import Modal from '../Modal/Modal';

const Cart: React.FC<ICart> = ({ show, onClose }) => {
  const { cartItem, setCartItem } = useCartItem();
  const [isModalOpened, setIsModalOpened] = useState<boolean>(false);
  const themeProvider = ProvideTheme();
  const { theme } = useTheme();

  useEffect(() => {
    RemoveBodyOverflow(show);
    return () => { }
  }, [show]);

  useEffect(() => {
    function setItems() {
      if (!getPokemon(theme)) return;

      setCartItem([...getPokemon(theme)]);
    }
    setItems();
    return () => { }
  }, [theme, setCartItem]);

  function add(index: number): void {
    const item = cartItem[index];
    item.quantity++;
    cartItem[index] = item;
    setCartItem([...cartItem]);
    setPokemon([...cartItem], theme);
  }

  function remove(index: number): void {
    const item = cartItem[index];
    item.quantity--;

    if (item.quantity <= 0) {
      cartItem.splice(index, 1);
      setCartItem([...cartItem]);
      setPokemon([...cartItem], theme);
      return;
    }

    cartItem[index] = item;
    setCartItem([...cartItem]);
    setPokemon([...cartItem], theme);
  }

  function resetAll(): void {
    setIsModalOpened(false);
    setCartItem([]);
    setPokemon([], theme);
    onClose();
  }

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
                  Carrinho
                </h1>

                <Button
                  ariaLabel="Fechar carrinho"
                  type="Icon"
                  hasRipple={true}
                  click={() => onClose()}
                >
                  <img
                    style={{ display: 'block' }}
                    src={closeIcon}
                    alt="Fechar carrinho"
                    width="20px"
                    height="20px"
                    loading="lazy"
                  />
                </Button>
              </section>

              {
                cartItem.length <= 0 ?
                  <h4 data-cy="cartEmptyMessage" className={`${style.listEmptyCart}`}>
                    Seu carrinho está vazio
                  </h4> :
                  
                  <div className={`${style.resumeContainer}`}>
                    <ul data-cy="cartList" className={`${style.list}`}>
                      {
                        cartItem.map((item, index) =>
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
                              <p className={`${style.price}`}>{priceToCurrency(item.price)}</p>
                            </div>

                            <div className={`${style.listButtons}`}>
                              <Button
                                ariaLabel="Remover um"
                                type="Icon"
                                dataCy="cartRemoveButton"
                                hasRipple={true}
                                style={themeProvider?.styles.cart.buttons.minus}
                                click={() => remove(index)}
                              >
                                <img
                                  loading="lazy"
                                  style={{ display: 'block' }}
                                  width="15px"
                                  height="15px"
                                  src={themeProvider?.images.icons.minus}
                                  alt="Remover um"
                                />
                              </Button>

                              <span data-cy="cartItemQuantity">{item.quantity}</span>

                              <Button
                                ariaLabel="Adicionar um"
                                type="Icon"
                                dataCy="cartAddBtn"
                                hasRipple={true}
                                style={themeProvider?.styles.cart.buttons.plus}
                                click={() => add(index)}
                              >
                                <img
                                  style={{ display: 'block' }}
                                  src={themeProvider?.images.icons.plus}
                                  width="15px"
                                  height="15px"
                                  alt="Adicionar um"
                                  loading="lazy"
                                />
                              </Button>
                            </div>
                          </li>
                        )
                      }
                    </ul>

                    <hr />
                    <div className={`${style.listResume}`}>
                      <p data-cy="cartTotalResume" className={`${style.listResumePrice}`}>
                        Total: &nbsp;
                          {priceToCurrency(cartItem.reduce((acc, current) => acc + current.price * current.quantity, 0))}
                      </p>

                      <Button
                        ariaLabel="Finalizar compra"
                        click={() => setIsModalOpened(true)}
                        type="Label"
                        dataCy="cartFinalizeButton"
                        hasRipple={true}
                      >
                        Finalizar compra
                      </Button>
                    </div>
                    <Modal show={isModalOpened} onClose={() => resetAll()} />
                  </div>
              }
            </div>
          </div>
          : null
      }
    </>
  );
}

export default memo(Cart);
