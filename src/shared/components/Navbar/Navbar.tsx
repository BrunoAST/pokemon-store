import React from 'react';
import { Link } from 'react-router-dom';

import style from './navbar.module.css';
import logoText from 'assets/global/LogoText.svg';
import { BrowserRoute } from '../../constants/browser-route.const';
import ProvideTheme from '../../helpers/ProvideTheme';

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
                    <img src={theme?.images.logoIcon} alt="Logo" />
                    <img className={`${style.iconDesktop}`} src={logoText} alt="Logo" />
                </Link>

                <div className={`${style.searchWrapper}`}>
                    <input
                        className={style.input}
                        type="text"
                        placeholder={theme?.searchInputText}
                    />
                    <button className={`btn-icon ${style.searchIcon}`}>
                        <img src={theme?.images.icons.searchIco} alt="Botão de pesquisa" />
                    </button>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;
