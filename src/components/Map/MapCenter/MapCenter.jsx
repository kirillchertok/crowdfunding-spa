import { useEffect } from 'react';
import { useMap } from 'react-leaflet';

export const MapCenter = ({ center }) => {
    const map = useMap();

    useEffect(() => {
        map.setView(center, map.getZoom());
    }, [center, map]);

    return null;
};
