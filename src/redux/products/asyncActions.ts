import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { ProductItem, SearchProductsParams } from './types';
import pickBy from 'lodash/pickBy';
import identity from 'lodash/identity';

export const fetchProducts = createAsyncThunk<ProductItem[], SearchProductsParams>(
    'products/fetchProductsStatus',
    async (params) => {
        const { sortBy, order, category, search, currentPage } = params;
        const { data } = await axios.get<ProductItem[]>(
            `https://62a77f6797b6156bff8f6a1e.mockapi.io/items`,
            {
                params: pickBy(
                    {
                        page: currentPage,
                        limit: 6,
                        category,
                        sortBy,
                        order,
                        search,
                    },
                    identity,
                ),
            },
        );
        return data;
    },
);
