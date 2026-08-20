import classNames from 'classnames';
import { MapContainer, TileLayer } from 'react-leaflet';

import { BASE_COORDINATES } from '@/constants/baseCoordinates';
import { MAP_SIZE } from '@/constants/mapStyles';

import { PlaceMarker } from '../PlaceMarker/PlaceMarker';
import * as styles from './Map.module.css';
import { UserLocation } from './UserLocation/UserLocaion';

export const Map = ({ size = MAP_SIZE.MEDIUM, places, zoom = 16, scrollWheelZoom = true }) => {
    return (
        <div className={classNames(styles.container, styles[`container--${size}`])}>
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
