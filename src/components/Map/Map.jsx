import { MapContainer, TileLayer } from 'react-leaflet';

import { BASE_COORDINATES } from '@/constants/baseCoordinates';

import * as styles from './Map.module.css';

export const Map = ({ zoom = 16, scrollWheelZoom = true }) => {
    return (
        <div className={styles.container}>
            <MapContainer
                zoom={zoom}
                scrollWheelZoom={scrollWheelZoom}
                center={BASE_COORDINATES}
                style={{ height: '100%', width: '100%' }}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                />
            </MapContainer>
        </div>
    );
};
