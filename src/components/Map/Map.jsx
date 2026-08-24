import classNames from 'classnames';
import { MapContainer, TileLayer } from 'react-leaflet';

import { BASE_COORDINATES } from '@/constants/baseCoordinates';
import { MAP_SIZE } from '@/constants/mapStyles';
import { isValidCoordinates } from '@/utils/isValidCoordinates';

import { PlaceMarker } from '../PlaceMarker/PlaceMarker';
import * as styles from './Map.module.css';
import { MapCenter } from './MapCenter/MapCenter';

export const Map = ({ size = MAP_SIZE.MEDIUM, places, zoom = 16, scrollWheelZoom = true }) => {
    const firstValidPlace = places.find(place =>
        isValidCoordinates(place.latitude, place.longitude)
    );

    const center = firstValidPlace
        ? [firstValidPlace.latitude, firstValidPlace.longitude]
        : BASE_COORDINATES;

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
                <MapCenter center={center} />
                {places.map(
                    place =>
                        isValidCoordinates(place.latitude, place.longitude) && (
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
