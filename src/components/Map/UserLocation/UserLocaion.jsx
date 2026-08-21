import { useEffect } from 'react';
import { useMap } from 'react-leaflet';

import { getUserCoordinates } from '@/utils/getUserCoordinates';

export const UserLocation = () => {
    const map = useMap();

    useEffect(() => {
        const loadUserLocation = async () => {
            const coordinates = await getUserCoordinates();

            map.setView(coordinates, map.getZoom());
        };

        loadUserLocation();
    }, [map]);

    return null;
};
