import classNames from 'classnames';

import { Header } from '../Header/Header';
import { Main } from '../Main/Main';
import * as styles from './Layout.module.css';

export const Layout = ({ type = 'white', children }) => {
    return (
        <div className={classNames(styles.container, styles[`container--${type}`])}>
            <Header />
            <Main>{children}</Main>
        </div>
    );
};
