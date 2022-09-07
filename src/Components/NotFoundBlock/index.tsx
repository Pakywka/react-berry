import React from 'react';
import styles from './NotFoundBlock.module.scss';

const NotFoundBlock: React.FC = () => {
    return (
        <div className={styles.root}>
            <span>😕</span>
            <h2>Nothing found</h2>
            <p className={styles.description}>Sorry, this page is missing.</p>
        </div>
    );
};

export default NotFoundBlock;
