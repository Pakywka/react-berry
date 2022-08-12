import React from 'react';
import styles from './NotFoundBlock.module.scss';

const NotFoundBlock: React.FC = () => {
    return (
        <div className={styles.root}>
            <span>😕</span>
            <h2>Ничего не найдено</h2>
            <p className={styles.description}>К сожалению, данная страница отсутвует</p>
        </div>
    );
};

export default NotFoundBlock;
