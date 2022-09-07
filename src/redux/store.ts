import { configureStore } from '@reduxjs/toolkit';
import filter from './filter/slice';
import cart from './cart/slice';
import products from './products/slice';
import { useDispatch } from 'react-redux';

export const store = configureStore({
    reducer: {
        filter,
        cart,
        products,
    },
});

export type RootState = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
