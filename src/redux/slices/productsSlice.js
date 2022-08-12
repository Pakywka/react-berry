import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchProducts = createAsyncThunk(
    'products/fetchProductsStatus',
    async (params, thunkAPI) => {
        const { sortBy, order, category, search, currentPage, limit } = params;
        const { data } = await axios.get(`https://62a77f6797b6156bff8f6a1e.mockapi.io/items`, {
            params: {
                page: currentPage,
                limit: limit,
                category,
                sortBy,
                order,
                search,
            },
        });
        return data;
    },
);

const initialState = {
    items: [],
    status: 'loading', // loading | success | error
};

const productsSlice = createSlice({
    name: 'products',
    initialState,

    reducers: {
        setItems(state, action) {
            state.items = action.payload;
        },
    },
    extraReducers: {
        [fetchProducts.pending]: (state) => {
            state.status = 'loading';
            state.items = [];
        },
        [fetchProducts.fulfilled]: (state, action) => {
            state.items = action.payload;
            state.status = 'success';
        },
        [fetchProducts.rejected]: (state) => {
            state.status = 'error';
            state.items = [];
        },
    },
});

export const selectProducts = (state) => state.products;

export const { setItemsDiscount, setItems } = productsSlice.actions;

export default productsSlice.reducer;
