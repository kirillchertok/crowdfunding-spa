import { useState } from 'react';

import { SearchResults } from '@/components/SearchResults/SearchResults';
import { Input } from '@/components/ui/Input/Input';
import { Layout } from '@/components/ui/Layout/Layout';
import { magnifierIcon } from '@/constants/icons';
import { INPUT_SIZE } from '@/constants/inputStyle';

import * as styles from './Locations.module.css';

const Locations = () => {
    const [searchInput, setSearchInput] = useState('');
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearchChange = e => {
        setSearchInput(e.target.value);
    };

    const handleSearch = () => {
        setSearchQuery(searchInput);
    };

    return (
        <Layout>
            <div className={styles.container}>
                <h1 className={styles.header}>Locations</h1>

                <Input
                    value={searchInput}
                    onChange={handleSearchChange}
                    size={INPUT_SIZE.LARGE}
                    icon={magnifierIcon}
                    buttonValue='Search'
                    onButtonClick={handleSearch}
                    placeholder='Search by city, country, village place'
                />

                <SearchResults search={searchQuery} />
            </div>
        </Layout>
    );
};

export default Locations;
