import { useId, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useGetPlacesQuery } from '@/api/placesApi';
import { BUTTON_OPTIONS, BUTTON_SIZE } from '@/constants/buttonStyle';
import { FETCH_LIMIT } from '@/constants/fetchLimit';
import { FILTERS } from '@/constants/filters';
import { filterIcon } from '@/constants/icons';
import { MODALS } from '@/constants/modals';
import { SORT_BASE_OPTION, SORT_OPTIONS } from '@/constants/sortOptions';
import { closeModal, openModal } from '@/redux/slices/modalSlice';

import { FilterModal } from '../FilterModal/FilterModal';
import { Map } from '../Map/Map';
import { Modal } from '../Modal/Modal';
import { ResultCard } from '../ResultCard/ResultCard';
import { Button } from '../ui/Button/Button';
import { DropDown } from '../ui/DropDown/DropDown';
import * as styles from './SearchResults.module.css';

export const SearchResults = ({ search }) => {
    const dispatch = useDispatch();

    const openedModal = useSelector(state => state.modal.openedModal);
    const [filters, setFilters] = useState(FILTERS);

    const sortId = useId();
    const [sort, setSort] = useState(SORT_BASE_OPTION.value);

    const { data, isLoading, isError } = useGetPlacesQuery({
        q: search,
        sort,
        ...filters,
        limit: search.length ? FETCH_LIMIT.MANY : FETCH_LIMIT.FEW,
    });

    const places = data?.items ?? [];

    const handleChangeSort = e => setSort(e.target.value);
    const handleCloseFilterModal = () => dispatch(closeModal());
    const handleOpenFilterModal = () => dispatch(openModal(MODALS.FILTER_LOCATIONS));

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
                        onClick={handleOpenFilterModal}
                    >
                        Filter {filterIcon}
                    </Button>
                    <Modal
                        isOpen={openedModal === MODALS.FILTER_LOCATIONS}
                        onClose={handleCloseFilterModal}
                        title='Filters'
                    >
                        <FilterModal
                            filters={filters}
                            onApply={setFilters}
                            onClose={handleCloseFilterModal}
                        />
                    </Modal>
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
            <Map places={places} />
        </section>
    );
};
