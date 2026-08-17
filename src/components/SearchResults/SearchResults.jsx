import { Map } from '../Map/Map';
import * as styles from './SearchResults.module.css';

export const SearchResults = ({ searchQueue }) => {
    return (
        <section className={styles.container}>
            <div className={styles.list}></div>
            <Map />
        </section>
    );
};
