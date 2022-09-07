export type CartItem = {
    id: number;
    title: string;
    type: string;
    size: number;
    price: number;
    count: number;
    imageUrl: string;
};

export interface ICartSliceState {
    totalPrice: number;
    items: CartItem[];
}
