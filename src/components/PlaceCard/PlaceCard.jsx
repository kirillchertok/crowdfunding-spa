import { Button } from '../ui/Button/Button';
import * as styles from './PlaceCard.module.css';

export const PlaceCard = ({ place }) => {
    return (
        <div className={styles.container}>
            <div className={styles.image__container}>
                <img
                    className={styles.image}
                    src={place.image}
                    alt={`place ${place.id}`}
                />
            </div>
            <div className={styles.info}>
                <span className={styles.info__title}>{place.title}</span>
                <span className={styles.info__address}>{place.address}</span>
                <span className={styles.info__area}>
                    <span className={styles.info__label}>Area:</span> {place.area}m^2
                </span>
                <span className={styles.info__price}>
                    <span className={styles.info__label}>{place.deal}:</span> {place.price_usd}$
                </span>
            </div>
            <Button>{place.deal}</Button>
        </div>
    );
};
