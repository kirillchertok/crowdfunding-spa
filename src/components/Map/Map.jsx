import { MapContainer, TileLayer } from 'react-leaflet';

import { BASE_COORDINATES } from '@/constants/baseCoordinates';

import { PlaceMarker } from '../PlaceMarker/PlaceMarker';
import * as styles from './Map.module.css';
import { UserLocation } from './UserLocation/UserLocaion';

export const Map = ({ places, zoom = 16, scrollWheelZoom = true }) => {
    return (
        <div className={styles.container}>
            <MapContainer
                center={BASE_COORDINATES}
                zoom={zoom}
                scrollWheelZoom={scrollWheelZoom}
                style={{ height: '100%', width: '100%' }}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                />
                <UserLocation />
                {places.map(
                    place =>
                        place.latitude &&
                        place.longitude && (
                            <PlaceMarker
                                key={place.id}
                                place={place}
                            />
                        )
                )}
            </MapContainer>
        </div>
    );
};
