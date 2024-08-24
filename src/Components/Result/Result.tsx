import React from 'react';
import styles from './Result.module.css';

interface ResultProps {
    value: string;
}

const Result: React.FC<ResultProps> = ({ value }) => {
    return (
        <div className={styles.result}>
            {value}
        </div>
    );
};

export default Result;
