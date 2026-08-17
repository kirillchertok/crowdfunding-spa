import classNames from 'classnames';

import * as styles from './Button.module.css';

export const Button = ({ option = 'first', size = 'medium', children, ...attrs }) => {
    return (
        <button
            className={classNames(
                styles.button,
                styles[`button--${option}`],
                styles[`button--${size}`]
            )}
            {...attrs}
        >
            {children}
        </button>
    );
};
