import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IFilterSliceState, Sort, SortPropertyEnum } from './types';

const initialState: IFilterSliceState = {
    searchValue: '',
    categoryId: 0,
    currentPage: 1,
    sort: { name: 'popularity', sortProperty: SortPropertyEnum.RATING },
};

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setCategoryId(state, action: PayloadAction<number>) {
            state.categoryId = action.payload;
        },
        setSearchValue(state, action: PayloadAction<string>) {
            state.searchValue = action.payload;
        },

        setSort(state, action: PayloadAction<Sort>) {
            state.sort = action.payload;
        },

        setCurrentPage(state, action: PayloadAction<number>) {
            state.currentPage = action.payload;
        },

        setFilters(state, action: PayloadAction<IFilterSliceState>) {
            if (Object.keys(action.payload).length) {
                state.currentPage = Number(action.payload.currentPage);
                state.categoryId = Number(action.payload.categoryId);
                state.sort = action.payload.sort;
            } else {
                state.currentPage = 1;
                state.categoryId = 0;
                state.sort = {
                    name: 'популярности',
                    sortProperty: SortPropertyEnum.RATING,
                };
            }
        },
    },
});

export const { setSearchValue, setCategoryId, setSort, setCurrentPage, setFilters } =
    filterSlice.actions;

export default filterSlice.reducer;
