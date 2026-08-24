import { useEffect } from 'react';
import { useMap } from 'react-leaflet';

export const MapCenter = ({ center }) => {
    const map = useMap();

    const [lat, lng] = center;

    useEffect(() => {
        map.setView([lat, lng], map.getZoom());
    }, [lat, lng, map]);

    return null;
};
