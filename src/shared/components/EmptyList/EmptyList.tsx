import React from 'react';

import style from './empty-list.module.css';

const EmptyList: React.FC = () => {
    return (
        <div className={style.emptyMessageContainer}>
            <span data-cy="messageEmpty1" className={style.message}>
                O filtro de pesquisa informado não encontrou nenhum resultado
            </span>
            <span data-cy="messageEmpty2" className={style.message}>
                Tente novamente com outros valores
            </span>
        </div>
    );
}

export default EmptyList;
