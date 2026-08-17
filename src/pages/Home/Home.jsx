import { HomeInfo } from '@/components/HomeInfo/HomeInfo';
import { Button } from '@/components/ui/Button/Button';
import { Layout } from '@/components/ui/Layout/Layout';

import * as styles from './Home.module.css';

const Home = () => {
    return (
        <Layout type='rice-flower'>
            <div className={styles.container}>
                <h1 className={styles.header}>
                    Rent your own field, invest in farming,
                    <br />
                    and grow your own vegetables
                </h1>
                <Button option='first'>Let&apos;s start</Button>
                <HomeInfo />
            </div>
        </Layout>
    );
};

export default Home;
