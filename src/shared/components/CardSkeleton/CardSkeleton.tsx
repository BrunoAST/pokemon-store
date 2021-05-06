import React from 'react';

import style from './card-skeleton.module.css';

const CardSkeleton: React.FC = () => {
    return (
        <div className={`${style.card}`}>
            <span className={`${style.square}`}></span>
            <span className={`${style.line}`}></span>
            <span className={`${style.line}`}></span>
            <span className={`${style.line}`}></span>
            <span className={`${style.rectangle}`}></span>
        </div>
    );
}

export default CardSkeleton;
