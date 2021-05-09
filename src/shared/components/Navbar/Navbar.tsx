import React, { memo, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import style from './navbar.module.css';
import { BrowserRoute } from '../../constants/browser-route.const';
import ProvideTheme from '../../provider/ThemeProvider';
import Button from '../Button/Button';
import Cart from '../Cart/Cart';

const Navbar: React.FC = () => {
    const [filter, setFilter] = useState<string>('');
    const [isCartOpened, setIsCartOpened] = useState<boolean>(false);
    const theme = ProvideTheme();
    const navigate = useNavigate();

    function handleSubmit(event: React.FormEvent<HTMLFormElement>): void {
        event.preventDefault();

        if (!filter || !filter?.trim()) {
            navigate(`${BrowserRoute.HOME}`);
            return;
        }

        navigate(`${BrowserRoute.HOME}/${filter}`);
    }

    return (
        <header className={`${style.header} ${theme?.colors.primaryBg}`}>
            <nav className={`${style.nav}`}>
                <Link
                    className={`${style.linkHome}`}
                    to={BrowserRoute.HOME}
                    onClick={() => setFilter('')}
                    aria-label="Voltar para a página principal"
                >
                    <img
                        className={`${style.icon} ${style.iconMobile}`}
                        src={theme?.images.logoIcon}
                        alt="Logo"
                        width="150px"
                        height="50px"                
                    />
                    <img className={`${style.icon} ${style.iconDesktop}`} src={theme?.images.logoFull} alt="Logo" />
                </Link>

                <div className={`${style.searchWrapper}`}>
                    <form onSubmit={handleSubmit}>
                        <input
                            className={style.input}
                            type="text"
                            placeholder={theme?.searchInputText}
                            onChange={(event) => setFilter(event.target.value)}
                            value={filter}
                        />
                    </form>

                    <Button
                        click={(event) => handleSubmit(event)}
                        type="Icon"
                        ariaLabel="Botão de pesquisa"
                        style={{
                            position: 'absolute',
                            right: '0'
                        }}
                    >
                        <img
                            className={`${style.searchIcon}`}
                            src={theme?.images.icons.searchIco}
                            alt="Ícone de pesquisa"
                            width="20px"
                            height="20px"
                        />
                    </Button>
                </div>

                <div className={`${style.cartButton}`}>
                    <Button
                    type="Label"
                    ariaLabel="Exibir carrinho"
                    style={{
                        backgroundColor: 'transparent'
                    }}
                    click={() => setIsCartOpened(true)}
                >
                    <img
                        width="25px"
                        height="25px"
                        src={theme?.images.icons.cartIcon}
                        alt="Ícone do carrinho"
                    />
                </Button>
                </div>
                <Cart
                    show={isCartOpened}
                    onClose={() => setIsCartOpened(false)}
                />
            </nav>
        </header>
    );
}

export default memo(Navbar);
