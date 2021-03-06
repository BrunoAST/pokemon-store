import React from 'react';

declare type Type = 'Icon' | 'Label';

export default interface IButton {
    type: Type;
    ariaLabel: string;
    click: (event: any) => void;
    hasRipple?: boolean;
    style?: React.CSSProperties;
    dataCy?: string;
}
