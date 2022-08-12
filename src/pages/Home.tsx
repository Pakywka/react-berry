import React, { useState, useEffect, useCallback, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import qs from 'qs';

import { selectFilter, setFilters } from '../redux/slices/filterSlice';

import Categories from '../Components/Categories';
import Sort, { sortList } from '../Components/Sort';
import ProductBlock from '../Components/ProductBlock';
import Skeleton from '../Components/ProductBlock/Skeleton';
import Pagination from '../Components/Pagination';
import { fetchProducts, selectProducts } from '../redux/slices/productsSlice';

const Home: React.FC = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const isSearch = useRef(false);
    const isMounted = useRef(false);

    const { searchValue, categoryId, sort, currentPage } = useSelector(selectFilter);
    const { items, status } = useSelector(selectProducts);

    const fetchBerries = async () => {
        const sortBy = sort.sortProperty.replace('-', '');
        const order = sort.sortProperty.includes('-') ? 'asc' : 'desc';
        const category = categoryId > 0 ? categoryId : '';
        const search = categoryId > 0 ? searchValue : '';
        const limit = 6;

        dispatch(fetchProducts({ sortBy, order, category, search, currentPage, limit }));
    };

    // Если изменили параметры и был первый рендер
    useEffect(() => {
        if (isMounted.current) {
            const queryString = qs.stringify({
                sortProperty: sort.sortProperty,
                categoryId,
                currentPage,
            });

            navigate(`?${queryString}`);
        }
        isMounted.current = true;
    }, [categoryId, sort.sortProperty, searchValue, currentPage]);

    // Если был первый рендер, то проверяем URL-параметры и сохраняем в Redux
    useEffect(() => {
        if (window.location.search) {
            const params = qs.parse(window.location.search.substring(1));

            const sort = sortList.find((obj) => obj.sortProperty === params.sortProperty);

            dispatch(
                setFilters({
                    ...params,
                    sort,
                }),
            );
            isSearch.current = true;
        }
    }, []);

    // Если был первый рендер, то запрашиваем товары
    useEffect(() => {
        window.scrollTo(0, 0);

        if (!isSearch.current) {
            fetchBerries();
        }

        isSearch.current = false;
    }, [categoryId, sort.sortProperty, searchValue, currentPage]);

    const products = items.map((obj) => (
        <Link to={`/product/${obj.id}`} key={obj.id}>
            <ProductBlock {...obj} />
        </Link>
    ));
    const skeletons = [...new Array(6)].map((_, index) => <Skeleton key={index} />);

    return (
        <div className="container">
            <div className="home">
                <div className="content__top">
                    <Categories />
                    <Sort />
                </div>
                <h2 className="content__title">Все продукты</h2>
                <div className="content__items">{status === 'loading' ? skeletons : products}</div>
                <Pagination />
            </div>
        </div>
    );
};

export default Home;
