export const isValidCoordinates = (latitude, longitude) =>
    Number.isFinite(latitude) && Number.isFinite(longitude);
