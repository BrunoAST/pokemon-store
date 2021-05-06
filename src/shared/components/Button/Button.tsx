import React from 'react';

import ProvideTheme from 'shared/helpers/ThemeProvider';
import styleModule from './button.module.css';
import IButton from './interface/button.interface';

const Button: React.FC<IButton> = ({ type, ariaLabel, style, children }) => {
    const theme = ProvideTheme();

    function defineStyle(): string {
        return type === 'Icon' ? `${styleModule.btnIcon}` : `${styleModule.btnLabel}`;
    }

    function defineTypeStyle(): string {
        return type === 'Icon' ? '' : `${theme?.styles.button.buttonContainer}`;
    }

    return (
        <button
            className={`${defineStyle()} ${defineTypeStyle()}`}
            aria-label={ariaLabel}
            style={style}
        >
            { children }
        </button>
    );
}

export default Button;
