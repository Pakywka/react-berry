export enum SortPropertyEnum {
    RATING = 'rating',
    NAME = '-name',
    PRICE_DESC = 'price',
    PRICE_ASC = '-price',
}

export type Sort = {
    name: string;
    sortProperty: SortPropertyEnum;
};

export interface IFilterSliceState {
    searchValue: string;
    categoryId: number;
    sort: Sort;
    currentPage: number;
}
