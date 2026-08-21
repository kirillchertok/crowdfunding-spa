import classNames from 'classnames';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { Nav } from '@/components/ui/Nav/Nav';
import { BUTTON_OPTIONS, BUTTON_SIZE } from '@/constants/buttonStyle';
import { burgerIcon, shoppingBarIcon } from '@/constants/icons';
import { PATHS } from '@/constants/routes';
import { logout } from '@/redux/slices/userSlice';
import TokenStorage from '@/utils/tokenStorage';

import { Button } from '../Button/Button';
import * as styles from './Header.module.css';

export const Header = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const user = useSelector(state => state.user.user);

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleLogout = () => {
        dispatch(logout());
        TokenStorage.clearTokens();
        navigate(PATHS.LOGIN);
    };

    const handleToggleMenu = () => {
        setIsMenuOpen(prev => !prev);
    };

    const handleCloseMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <header className={styles.header}>
            <div className={styles.nav}>
                <Nav />
            </div>

            <div className={styles.actions}>
                <div className={styles.shopping_cart}>{shoppingBarIcon}</div>

                <div className={styles.profile}>
                    <img
                        src={user.image}
                        alt='profile'
                        className={styles.profile__picture}
                    />
                </div>

                <div className={styles.logout}>
                    <Button
                        option={BUTTON_OPTIONS.THIRD}
                        size={BUTTON_SIZE.SMALL}
                        onClick={handleLogout}
                    >
                        Logout
                    </Button>
                </div>

                <div className={styles.burger}>
                    <Button
                        option={BUTTON_OPTIONS.THIRD}
                        size={BUTTON_SIZE.SMALL}
                        onClick={handleToggleMenu}
                    >
                        {burgerIcon}
                    </Button>
                </div>
            </div>

            <div
                className={classNames(styles.mobileMenu, isMenuOpen && styles['mobileMenu--open'])}
            >
                <Nav onNavigate={handleCloseMenu} />

                <Button
                    option={BUTTON_OPTIONS.THIRD}
                    size={BUTTON_SIZE.SMALL}
                    onClick={handleLogout}
                >
                    Logout
                </Button>
            </div>
        </header>
    );
};
