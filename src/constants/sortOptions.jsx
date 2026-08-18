export const SORT_BASE_OPTION = {
    value: '',
    label: 'All',
};

export const SORT_OPTIONS = [
    SORT_BASE_OPTION,
    {
        value: 'updated_desc',
        label: 'Recently updated',
    },
    {
        value: 'best_deal',
        label: 'Best deals',
    },
    {
        value: 'price_asc',
        label: 'Price: Low to High',
    },
    {
        value: 'price_desc',
        label: 'Price: High to Low',
    },
    {
        value: 'area_desc',
        label: 'Area: Largest first',
    },
];
