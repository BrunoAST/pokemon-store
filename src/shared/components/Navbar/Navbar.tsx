import React from 'react';
import { Link } from 'react-router-dom';

import style from './navbar.module.css';
import { BrowserRoute } from '../../constants/browser-route.const';
import ProvideTheme from '../../helpers/ThemeProvider';
import Button from '../Button/Button';

const Navbar: React.FC = () => {
    const theme = ProvideTheme();

    return (
        <header className={`${style.header} ${theme?.colors.primaryBg}`}>
            <nav className={`${style.nav}`}>
                <Link
                    className={`${style.linkHome}`}
                    to={BrowserRoute.HOME}
                    aria-label="Voltar para a página principal"
                >
                    <img className={`${style.logo} ${style.iconMobile}`} src={theme?.images.logoIcon} alt="Logo" />
                    <img className={`${style.logo} ${style.iconDesktop}`} src={theme?.images.logoFull} alt="Logo" />
                </Link>

                <div className={`${style.searchWrapper}`}>
                    <input
                        className={style.input}
                        type="text"
                        placeholder={theme?.searchInputText}
                    />
                    <Button
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
                        />
                    </Button>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;
