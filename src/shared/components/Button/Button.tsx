import React from 'react';

import styleModule from './button.module.css';
import IButton from './interface/button.interface';

const Button: React.FC<IButton> = ({ type, ariaLabel, style, children }) => {
    function defineStyle(): string {
        return type === 'Icon' ? `${styleModule.btnIcon}` : `${styleModule.btnLabel}`;
    }

    return (
        <button
            className={`${defineStyle()}`}
            aria-label={ariaLabel}
            style={style}
        >
            { children }
        </button>
    );
}

export default Button;
