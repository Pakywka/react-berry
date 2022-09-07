import axios from 'axios';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IProductsSliceState, ProductItem, Status } from './types';
import { fetchProducts } from './asyncActions';

const initialState: IProductsSliceState = {
    items: [],
    status: Status.LOADING, // loading | success | error
};

const productsSlice = createSlice({
    name: 'products',
    initialState,

    reducers: {
        setItems(state, action: PayloadAction<ProductItem[]>) {
            state.items = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.pending, (state, action) => {
            state.status = Status.LOADING;
            state.items = [];
        });

        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.items = action.payload;
            state.status = Status.SUCCESS;
        });

        builder.addCase(fetchProducts.rejected, (state, action) => {
            state.status = Status.ERROR;
            state.items = [];
        });
    },
});

export const { setItems } = productsSlice.actions;

export default productsSlice.reducer;
