import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { addItem } from '../../redux/slices/cart/slice';

const typeNames: string[] = ['Type 1', 'Type 2'];

type ProductBlockProps = {
    id: number;
    title: string;
    price: number;
    imageUrl: string;
    sizes: number[];
    types: number[];
};

const ProductBlock: React.FC<ProductBlockProps> = ({
    id,
    title,
    price,
    imageUrl,
    sizes,
    types,
}) => {
    const dispatch = useDispatch();
    const cartItem = useSelector((state: any) =>
        state.cart.items.find((obj: any) => obj.id === id),
    );
    const [activeType, setActiveType] = React.useState(0);
    const [activeSize, setActiveSize] = React.useState(0);

    const addedCount = cartItem ? cartItem.count : 0;

    const onClickAdd = () => {
        const item = {
            id,
            title,
            price,
            imageUrl,
            type: typeNames[activeType],
            size: sizes[activeSize],
        };
        dispatch(addItem(item));
    };

    return (
        <div className="berry-block">
            <Link to={`/product/${id}`}>
                <div className="image-wrapper">
                    <img className="berry-block__image" src={imageUrl} alt="berry" />
                </div>
                <h4 className="berry-block__title">{title}</h4>
            </Link>
            <div className="berry-block__selector">
                <ul>
                    {types.map((typeId, i) => (
                        <li
                            key={i}
                            onClick={() => setActiveType(i)}
                            className={activeType === i ? 'active' : ''}>
                            {typeNames[typeId]}
                        </li>
                    ))}
                </ul>
                <ul>
                    {sizes.map((size, i) => (
                        <li
                            key={i}
                            onClick={() => setActiveSize(i)}
                            className={activeSize === i ? 'active' : ''}>
                            Size {size}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="berry-block__bottom">
                <h5 className="berry-block__price">от {price} ₽</h5>
                <button onClick={onClickAdd} className="button button--outline button--add">
                    <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                            fill="white"
                        />
                    </svg>
                    <span>Add</span>
                    {addedCount > 0 && <i>{addedCount}</i>}
                </button>
            </div>
        </div>
    );
};

export default ProductBlock;
