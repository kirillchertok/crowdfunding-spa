import profilePicture from '@/assets/images/profile-picture-tmp.jpg';
import { Nav } from '@/components/ui/Nav/Nav';
import { shoppingBarIcon } from '@/constants/icons';

import * as styles from './Header.module.css';

export const Header = () => {
    return (
        <header className={styles.header}>
            <Nav />
            <div className={styles.shopping_cart}>
                {shoppingBarIcon}
                <div className={styles.shopping_cart__amount}>0</div>
            </div>
            <div className={styles.profile}>
                <img
                    src={profilePicture}
                    alt='profile'
                    className={styles.profile__picture}
                />
            </div>
        </header>
    );
};
