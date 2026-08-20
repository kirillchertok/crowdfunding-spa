import { useEffect, useId, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useGetPlacesQuery } from '@/api/placesApi';
import { BUTTON_OPTIONS, BUTTON_SIZE } from '@/constants/buttonStyle';
import { FETCH_LIMIT } from '@/constants/fetchLimit';
import { FILTERS } from '@/constants/filters';
import { filterIcon, mapIcon } from '@/constants/icons';
import { MAP_SIZE } from '@/constants/mapStyles';
import { MODALS } from '@/constants/modals';
import { SORT_BASE_OPTION, SORT_OPTIONS } from '@/constants/sortOptions';
import { closeModal, openModal } from '@/redux/slices/modalSlice';

import { FilterModal } from '../FilterModal/FilterModal';
import { Map } from '../Map/Map';
import { Modal } from '../Modal/Modal';
import { PlaceCard } from '../PlaceCard/PlaceCard';
import { Button } from '../ui/Button/Button';
import { DropDown } from '../ui/DropDown/DropDown';
import * as styles from './Places.module.css';

export const Places = () => {
    const dispatch = useDispatch();

    const sortId = useId();
    const [sort, setSort] = useState(SORT_BASE_OPTION.value);

    const openedModal = useSelector(state => state.modal.openedModal);
    const [filters, setFilters] = useState(FILTERS);

    const [page, setPage] = useState(1);
    const [cursors, setCursors] = useState({});

    const { data, isLoading, isError } = useGetPlacesQuery({
        sort,
        ...filters,
        limit: FETCH_LIMIT.PAGINATION,
        cursor: cursors[page],
    });

    console.log(isLoading);

    const places = data?.items ?? [];

    useEffect(() => {
        if (!data?.next_cursor) {
            return;
        }

        // eslint-disable-next-line react-hooks/set-state-in-effect
        setCursors(prev => ({
            ...prev,
            [page + 1]: data.next_cursor,
        }));
    }, [data, page]);

    const handleChangeSort = e => {
        setSort(e.target.value);
        setPage(1);
        setCursors({});
    };
    const handleSetFilters = form => {
        setFilters(form);
        setPage(1);
        setCursors({});
    };
    const handleCloseModal = () => dispatch(closeModal());
    const handleOpenFilterModal = () => dispatch(openModal(MODALS.FILTER_SHOP));
    const handleOpenMapModal = () => dispatch(openModal(MODALS.MAP));
    const handlePrevPage = () => setPage(prev => prev - 1);
    const handleNextPage = () => setPage(prev => prev + 1);

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <DropDown
                    id={sortId}
                    label={'Sort by'}
                    options={SORT_OPTIONS}
                    value={sort}
                    onChange={handleChangeSort}
                />
                <Button
                    option={BUTTON_OPTIONS.SECOND}
                    onClick={handleOpenFilterModal}
                >
                    Filter {filterIcon}
                </Button>
                <Button
                    option={BUTTON_OPTIONS.FIRST}
                    onClick={handleOpenMapModal}
                >
                    Map {mapIcon}
                </Button>
                <Modal
                    isOpen={openedModal === MODALS.MAP}
                    title='Places'
                    onClose={handleCloseModal}
                >
                    <Map
                        size={MAP_SIZE.LARGE}
                        places={places}
                    />
                </Modal>
                <Modal
                    isOpen={openedModal === MODALS.FILTER_SHOP}
                    onClose={handleCloseModal}
                    title='Filters'
                >
                    <FilterModal
                        filters={filters}
                        onApply={handleSetFilters}
                        onClose={handleCloseModal}
                    />
                </Modal>
            </div>
            {isError && <p className={styles.error}>Something wrong with fetching data</p>}
            {isLoading && <p>Loading...</p>}
            {!isError && !isLoading && (
                <div className={styles.list}>
                    {places.map(place => (
                        <PlaceCard
                            key={place.id}
                            place={place}
                        />
                    ))}
                </div>
            )}
            <div className={styles.pagination}>
                <Button
                    option={BUTTON_OPTIONS.SECOND}
                    size={BUTTON_SIZE.SMALL}
                    disabled={page === 1}
                    onClick={handlePrevPage}
                >
                    Previous
                </Button>

                <span className={styles.pagination__page_number}>{page}</span>

                <Button
                    option={BUTTON_OPTIONS.SECOND}
                    size={BUTTON_SIZE.SMALL}
                    disabled={!data?.has_more}
                    onClick={handleNextPage}
                >
                    Next
                </Button>
            </div>
        </div>
    );
};
