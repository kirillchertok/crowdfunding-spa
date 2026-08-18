import * as styles from './DropDown.module.css';

export const DropDown = ({ id, label, value, options, onChange }) => {
    return (
        <div className={styles.container}>
            {label && (
                <label
                    className={styles.label}
                    htmlFor={id}
                >
                    {label}
                </label>
            )}
            <select
                id={id}
                value={value}
                onChange={onChange}
                className={styles.select}
            >
                {options.map(option => (
                    <option
                        className={styles.option}
                        key={option.value}
                        value={option.value}
                    >
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    );
};
