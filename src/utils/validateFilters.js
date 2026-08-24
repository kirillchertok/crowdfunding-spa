export const validateFilters = filters => {
    const {
        min_price: minPrice,
        max_price: maxPrice,
        min_area: minArea,
        max_area: maxArea,
    } = filters;

    if (minPrice !== '' && maxPrice !== '' && Number(minPrice) > Number(maxPrice)) {
        return 'The minimum price cannot be higher than the maximum price';
    }

    if (minArea !== '' && maxArea !== '' && Number(minArea) > Number(maxArea)) {
        return 'The minimum area cannot be greater than the maximum';
    }

    return '';
};
