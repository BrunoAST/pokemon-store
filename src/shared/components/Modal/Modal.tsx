import React from 'react';
import ReactDOM from 'react-dom';

import style from './modal.module.css';
import closeIcon from 'assets/global/Close.svg';
import IModal from './interface/modal.interface';
import Button from '../Button/Button';

const Modal: React.FC<IModal> = ({ show, onClose }) => {
    return ReactDOM.createPortal(
        show ?
            <dialog className={style.overlay}>
                <div className={style.modalContainer}>
                    <Button
                        ariaLabel="Fechar"
                        type="Icon"
                        dataCy="closeModalButton"
                        style={{
                            position: 'absolute',
                            top: '10px',
                            right: '10px'
                        }}
                        hasRipple={true}
                        click={onClose}
                    >
                        <img
                            style={{ display: 'block' }}
                            src={closeIcon}
                            alt="Fechar"
                            width="20px"
                            height="20px"
                            loading="lazy"
                        />
                    </Button>

                    <h1 data-cy="modalTitle" style={{ fontSize: '1.2rem' }}>
                        Obrigado pela sua compra!
                    </h1>

                    <p>
                        Você ganhou de volta
                    </p>

                    <p>
                        R$100,00
                    </p>
                </div>
            </dialog>
            : null,
        document.getElementById('portal') as Element
    );
}

export default Modal;
