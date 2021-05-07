import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import style from './navbar.module.css';
import { BrowserRoute } from '../../constants/browser-route.const';
import ProvideTheme from '../../helpers/ThemeProvider';
import Button from '../Button/Button';

const Navbar: React.FC = () => {
    const [filter, setFilter] = useState<string>('');
    const theme = ProvideTheme();
    const navigate = useNavigate();

    function handleSubmit(event: React.FormEvent<HTMLFormElement>): void {
        event.preventDefault();

        if (!filter || !filter?.trim()) {
            navigate(`${BrowserRoute.HOME}`);
        }

        navigate(`${BrowserRoute.HOME}/${filter}`);
    }

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
                        />
                    </Button>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;
