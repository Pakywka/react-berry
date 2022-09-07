export type ProductItem = {
    id: number;
    title: string;
    imageUrl: string;
    price: number;
    sizes: number[];
    types: number[];
    rating: number[];
};

export enum Status {
    LOADING = 'loading',
    SUCCESS = 'success',
    ERROR = 'error',
}

export type SearchProductsParams = {
    sortBy: string;
    order: string;
    category: string;
    search: string;
    currentPage: string;
};

export interface IProductsSliceState {
    items: ProductItem[];
    status: Status;
}
