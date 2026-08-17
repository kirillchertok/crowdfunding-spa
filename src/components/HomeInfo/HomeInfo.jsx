import { HOME_INFO } from '@/constants/homeInfo';

import * as styles from './HomeInfo.module.css';

export const HomeInfo = () => {
    return (
        <section className={styles.info}>
            {HOME_INFO.map((info, index) => (
                <div
                    className={styles.info__block}
                    key={info.src}
                >
                    <img
                        src={info.src}
                        alt={`home info ${index + 1}`}
                        className={styles.info__image}
                    />
                    <div className={styles.info__text}>{info.text}</div>
                </div>
            ))}
        </section>
    );
};
