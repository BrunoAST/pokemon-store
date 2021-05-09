import React from 'react';

import ProvideTheme from 'shared/provider/ThemeProvider';
import styleModule from './button.module.css';
import IButton from './interface/button.interface';

const Button: React.FC<IButton> = ({ click, type, ariaLabel, dataCy, style, hasRipple, children }) => {
    const theme = ProvideTheme();

    function defineStyle(): string {
        return type === 'Icon' ? `${styleModule.btnIcon}` : `${styleModule.btnLabel}`;
    }

    function defineTypeStyle(): string {
        return type === 'Icon' ? '' : `${theme?.styles.button.buttonContainer}`;
    }

    function defineRipple(): string {
        return hasRipple ? `ripple` : ``;
    }

    return (
        <button
            className={`${defineStyle()} ${defineTypeStyle()} ${defineRipple()}`}
            aria-label={ariaLabel}
            data-cy={dataCy}
            style={style}
            onClick={click}
        >
            { children }
        </button>
    );
}

export default Button;
