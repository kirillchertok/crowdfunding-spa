import { useId, useState } from 'react';

import { useGetPlacesQuery } from '@/api/placesApi';
import { BUTTON_OPTIONS, BUTTON_SIZE } from '@/constants/buttonStyle';
import { filterIcon } from '@/constants/icons';
import { SORT_BASE_OPTION, SORT_OPTIONS } from '@/constants/sortOptions';

import { Map } from '../Map/Map';
import { ResultCard } from '../ResultCard/ResultCard';
import { Button } from '../ui/Button/Button';
import { DropDown } from '../ui/DropDown/DropDown';
import * as styles from './SearchResults.module.css';

export const SearchResults = ({ search }) => {
    const sortId = useId();
    const [sort, setSort] = useState(SORT_BASE_OPTION.value);

    const { data, isLoading, isError } = useGetPlacesQuery({
        q: search,
        sort,
        limit: search.length === 0 ? 10 : 40,
    });

    const places = data?.items ?? [];

    const handleChangeSort = e => setSort(e.target.value);

    return (
        <section className={styles.container}>
            <div className={styles.results}>
                <div className={styles.results__header}>
                    <DropDown
                        id={sortId}
                        label={'Sort by'}
                        options={SORT_OPTIONS}
                        value={sort}
                        onChange={handleChangeSort}
                    />
                    <Button
                        option={BUTTON_OPTIONS.SECOND}
                        size={BUTTON_SIZE.SMALL}
                    >
                        Filter {filterIcon}
                    </Button>
                </div>
                {isError && <p className={styles.error}>Something wrong with fetching data</p>}
                {isLoading && <p>Loading...</p>}
                {!isLoading && !isError && (
                    <div className={styles.list}>
                        {places.map(elem => (
                            <ResultCard
                                key={elem.id}
                                id={elem.id}
                                src={elem.image}
                                title={elem.title}
                                place={elem.address}
                            />
                        ))}
                    </div>
                )}
            </div>
            <Map />
        </section>
    );
};
