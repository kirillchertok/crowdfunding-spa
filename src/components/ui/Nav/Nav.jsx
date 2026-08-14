import classNames from 'classnames';
import { Link, useLocation } from 'react-router-dom';

import { ROUTES } from '@/constants/routes';

import * as styles from './Nav.module.css';

export const Nav = () => {
    const location = useLocation();

    return (
        <nav className={styles.nav}>
            {ROUTES.map(
                route =>
                    route.displayName && (
                        <Link
                            key={route.path}
                            className={classNames(
                                styles.nav__route,
                                location.pathname === route.path && styles['nav__route--active']
                            )}
                            to={route.path}
                        >
                            {route.displayName}
                        </Link>
                    )
            )}
        </nav>
    );
};
