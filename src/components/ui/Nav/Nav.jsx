import classNames from 'classnames';
import { Link, useLocation } from 'react-router-dom';

import { PROTECTED_ROUTES } from '@/constants/routes';

import * as styles from './Nav.module.css';

export const Nav = ({ onNavigate }) => {
    const location = useLocation();

    return (
        <nav className={styles.nav}>
            {PROTECTED_ROUTES.map(
                route =>
                    route.displayName && (
                        <Link
                            key={route.path}
                            className={classNames(
                                styles.nav__route,
                                location.pathname === route.path && styles['nav__route--active']
                            )}
                            to={route.path}
                            onClick={onNavigate}
                        >
                            {route.displayName}
                        </Link>
                    )
            )}
        </nav>
    );
};
