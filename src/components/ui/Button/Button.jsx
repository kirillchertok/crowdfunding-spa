import classNames from 'classnames';

import { BUTTON_OPTIONS, BUTTON_SIZE } from '@/constants/buttonStyle';

import * as styles from './Button.module.css';

export const Button = ({
    option = BUTTON_OPTIONS.FIRST,
    size = BUTTON_SIZE.MEDIUM,
    className,
    children,
    ...attrs
}) => {
    return (
        <button
            className={classNames(
                styles.button,
                styles[`button--${option}`],
                styles[`button--${size}`],
                className
            )}
            {...attrs}
        >
            {children}
        </button>
    );
};
