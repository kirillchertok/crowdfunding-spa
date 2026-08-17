import { MapContainer, TileLayer } from 'react-leaflet';

import * as styles from './Map.module.css';

export const Map = ({ zoom = 16, scrollWheelZoom = true }) => {
    return (
        <div className={styles.container}>
            <MapContainer
                zoom={zoom}
                scrollWheelZoom={scrollWheelZoom}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                />
            </MapContainer>
        </div>
    );
};
