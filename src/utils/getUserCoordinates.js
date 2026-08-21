import { BASE_COORDINATES } from '@/constants/baseCoordinates';

export async function getUserCoordinates() {
    return new Promise(resolve => {
        if (!navigator.geolocation) {
            resolve(BASE_COORDINATES);
            return;
        }

        navigator.geolocation.getCurrentPosition(position => {
            const { latitude, longitude } = position.coords;

            resolve([Number(latitude.toFixed(4)), Number(longitude.toFixed(4))]);
        });
    });
}
