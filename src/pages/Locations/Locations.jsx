import { useState } from 'react';

import { SearchResults } from '@/components/SearchResults/SearchResults';
import { Input } from '@/components/ui/Input/Input';
import { Layout } from '@/components/ui/Layout/Layout';
import { magnifierIcon } from '@/constants/icons';
import { INPUT_SIZE } from '@/constants/inputStyle';

import * as styles from './Locations.module.css';

const Locations = () => {
    const [searchQueue, setSearhQueue] = useState('');

    const handleSearchChange = e => setSearhQueue(e.target.value);

    return (
        <Layout>
            <div className={styles.container}>
                <h1 className={styles.header}>Locations</h1>
                <Input
                    value={searchQueue}
                    onChange={handleSearchChange}
                    size={INPUT_SIZE.LARGE}
                    icon={magnifierIcon}
                    buttonValue={'Search'}
                    placeHolder='Search by city, country, village place'
                />
                <SearchResults searchQueue={searchQueue} />
            </div>
        </Layout>
    );
};

export default Locations;
