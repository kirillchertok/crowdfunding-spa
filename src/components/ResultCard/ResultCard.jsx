import { BUTTON_OPTIONS } from '@/constants/buttonStyle';

import { Button } from '../ui/Button/Button';
import * as styles from './ResultCard.module.css';

export const ResultCard = ({ id, src, title, place }) => {
    return (
        <div className={styles.container}>
            <div className={styles.image_container}>
                <img
                    src={src}
                    alt={`place ${id}`}
                    className={styles.image}
                />
            </div>
            <div className={styles.legend}>
                <div className={styles.info}>
                    <p className={styles.info__title}>{title}</p>
                    <p className={styles.info__place}>{place}</p>
                </div>
                <Button option={BUTTON_OPTIONS.THIRD}>Shop</Button>
            </div>
        </div>
    );
};
