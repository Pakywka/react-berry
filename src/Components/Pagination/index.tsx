import React from 'react';
import ReactPaginate from 'react-paginate';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from '../../redux/filter/selectors';
import { setCurrentPage } from '../../redux/filter/slice';

import styles from './Pagination.module.scss';

const Pagination = () => {
    const dispatch = useDispatch();
    const { currentPage } = useSelector(selectFilter);

    const onChangePage = (page: number) => {
        dispatch(setCurrentPage(page));
    };

    return (
        <ReactPaginate
            className={styles.root}
            breakLabel="..."
            nextLabel=">"
            onPageChange={(event: any) => onChangePage(event.selected + 1)}
            pageRangeDisplayed={6}
            pageCount={3}
            forcePage={currentPage - 1}
            previousLabel="<"
        />
    );
};

export default Pagination;
