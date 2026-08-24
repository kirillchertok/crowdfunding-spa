import classNames from 'classnames';
import { useId } from 'react';

import { INPUT_OPTIONS, INPUT_SIZE } from '@/constants/inputStyle';

import { Button } from '../Button/Button';
import * as styles from './Input.module.css';

export const Input = ({
    option = INPUT_OPTIONS.FIRST,
    size = INPUT_SIZE.MEDIUM,
    className,
    labelValue = null,
    icon = null,
    buttonValue = null,
    onButtonClick = null,
    ...attrs
}) => {
    const inputId = useId();

    return (
        <div
            className={classNames(
                styles.container,
                styles[`container--${option}`],
                styles[`container--${size}`],
                {
                    [styles['container--radio']]: attrs.type === 'radio',
                },
                className
            )}
        >
            {icon && (
                <label
                    htmlFor={attrs.id ?? inputId}
                    className={styles.icon}
                >
                    {icon}
                </label>
            )}
            {labelValue && (
                <label
                    htmlFor={attrs.id ?? inputId}
                    className={styles.label}
                >
                    {labelValue}
                </label>
            )}
            <input
                id={attrs.id ?? inputId}
                className={styles.input}
                {...attrs}
            />
            {buttonValue && <Button onClick={onButtonClick}>{buttonValue}</Button>}
        </div>
    );
};
