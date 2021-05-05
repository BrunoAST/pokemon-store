import React from 'react';

declare type Type = 'Icon' | 'Label';

export default interface IButton {
    type: Type;
    ariaLabel: string;
    style?: React.CSSProperties;
}
