import L from 'leaflet';
import { Marker, Popup } from 'react-leaflet';

import placeMarker from '@/assets/images/place-marker.svg';

import * as styles from './PlaceMarker.module.css';

export const PlaceMarker = ({ place }) => {
    return (
        <Marker
            position={[place.latitude, place.longitude]}
            icon={L.icon({
                iconUrl: placeMarker,
                iconSize: [30, 30],
            })}
        >
            <Popup>
                <div className={styles.container}>
                    <div className={styles.image__container}>
                        <img
                            className={styles.image}
                            src={place.image}
                            alt={`place ${place.id}`}
                        />
                    </div>
                    <h2 className={styles.title}>{place.title}</h2>
                    <p className={styles.price}>{place.price_usd}$</p>
                </div>
            </Popup>
        </Marker>
    );
};
