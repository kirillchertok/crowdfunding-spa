import { useRef } from 'react';
import { createPortal } from 'react-dom';

import { BUTTON_OPTIONS, BUTTON_SIZE } from '@/constants/buttonStyle';
import { crossIcon } from '@/constants/icons';
import { useClickOutside } from '@/hooks/useClickOutside';

import { Button } from '../ui/Button/Button';
import * as styles from './Modal.module.css';

export const Modal = ({ isOpen, onClose, title, children }) => {
    const modalRef = useRef(null);

    useClickOutside({ ref: modalRef, onClose });

    if (!isOpen) return null;

    return createPortal(
        <div
            className={styles.container}
            role='dialog'
            aria-modal='true'
            aria-labelledby='modal-title'
        >
            <div
                ref={modalRef}
                className={styles.modal}
            >
                <div className={styles.header}>
                    <h1
                        id='modal-title'
                        className={styles.header__text}
                    >
                        {title}
                    </h1>
                    <Button
                        option={BUTTON_OPTIONS.SECOND}
                        size={BUTTON_SIZE.MEDIUM}
                        onClick={onClose}
                    >
                        Close modal {crossIcon}
                    </Button>
                </div>{' '}
                {children}
            </div>
        </div>,
        document.body
    );
};
