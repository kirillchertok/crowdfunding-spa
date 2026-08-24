import { Places } from '@/components/Places/Places';
import { Layout } from '@/components/ui/Layout/Layout';

import * as styles from './Shop.module.css';

const Shop = () => {
    return (
        <Layout>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h1 className={styles.header__text}>Shop</h1>
                </div>
                <Places />
            </div>
        </Layout>
    );
};

export default Shop;
