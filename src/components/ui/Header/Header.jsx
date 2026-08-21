import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { Nav } from '@/components/ui/Nav/Nav';
import { BUTTON_OPTIONS, BUTTON_SIZE } from '@/constants/buttonStyle';
import { shoppingBarIcon } from '@/constants/icons';
import { PATHS } from '@/constants/routes';
import { logout } from '@/redux/slices/userSlice';
import TokenStorage from '@/utils/tokenStorage';

import { Button } from '../Button/Button';
import * as styles from './Header.module.css';

export const Header = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector(state => state.user.user);

    const handleLogout = () => {
        dispatch(logout());
        TokenStorage.clearTokens();
        navigate(PATHS.LOGIN);
    };

    return (
        <header className={styles.header}>
            <Nav />
            <div className={styles.shopping_cart}>
                {shoppingBarIcon}
                <div className={styles.shopping_cart__amount}>0</div>
            </div>
            <div className={styles.profile}>
                <img
                    src={user.image}
                    alt='profile'
                    className={styles.profile__picture}
                />
            </div>
            <Button
                option={BUTTON_OPTIONS.THIRD}
                size={BUTTON_SIZE.SMALL}
                onClick={handleLogout}
            >
                Logout
            </Button>
        </header>
    );
};
