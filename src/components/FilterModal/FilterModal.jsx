import { useEffect, useState } from 'react';

import { BUTTON_OPTIONS } from '@/constants/buttonStyle';
import { FILTERS } from '@/constants/filters';
import { INPUT_SIZE } from '@/constants/inputStyle';

import { Button } from '../ui/Button/Button';
import { Input } from '../ui/Input/Input';
import * as styles from './FilterModal.module.css';

export const FilterModal = ({ filters, onApply, onClose }) => {
    const [form, setForm] = useState(filters);

    // eslint-disable-next-line react-hooks/set-state-in-effect
    useEffect(() => setForm(filters), [filters]);

    const handleChange = event => {
        const { name, value } = event.target;

        setForm(prev => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = event => {
        event.preventDefault();

        onApply(form);
        onClose();
    };

    const handleReset = () => {
        setForm(FILTERS);
    };
    return (
        <form
            onSubmit={handleSubmit}
            className={styles.form}
        >
            <fieldset className={styles.fieldset}>
                <legend className={styles.legend}>Deal</legend>
                <div className={styles.row}>
                    <Input
                        labelValue='buy'
                        type='radio'
                        name='deal'
                        value='buy'
                        checked={form.deal === 'buy'}
                        onChange={handleChange}
                    />
                    <Input
                        labelValue='rent'
                        type='radio'
                        name='deal'
                        value='rent'
                        checked={form.deal === 'rent'}
                        onChange={handleChange}
                    />
                </div>
            </fieldset>
            <fieldset className={styles.fieldset}>
                <legend className={styles.legend}>Price</legend>
                <div className={styles.row}>
                    <Input
                        size={INPUT_SIZE.FULL}
                        name='min_price'
                        type='number'
                        value={form.min_price}
                        onChange={handleChange}
                        placeholder='Min price'
                        min='0'
                    />

                    <Input
                        size={INPUT_SIZE.FULL}
                        name='max_price'
                        type='number'
                        value={form.max_price}
                        onChange={handleChange}
                        placeholder='Max price'
                        min='0'
                    />
                </div>
            </fieldset>
            <fieldset className={styles.fieldset}>
                <legend className={styles.legend}>Area</legend>
                <div className={styles.row}>
                    <Input
                        size={INPUT_SIZE.FULL}
                        name='min_area'
                        type='number'
                        value={form.min_area}
                        onChange={handleChange}
                        placeholder='Min area'
                        min='0'
                    />

                    <Input
                        size={INPUT_SIZE.FULL}
                        name='max_area'
                        type='number'
                        value={form.max_area}
                        onChange={handleChange}
                        placeholder='Max area'
                        min='0'
                    />
                </div>
            </fieldset>
            <div className={styles.actions}>
                <Button type='submit'>Apply</Button>
                <Button
                    option={BUTTON_OPTIONS.SECOND}
                    type='button'
                    onClick={handleReset}
                >
                    Reset
                </Button>
            </div>
        </form>
    );
};
