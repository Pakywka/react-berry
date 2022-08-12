import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilter, setCategoryId } from '../redux/slices/filterSlice';

const categories: string[] = ['Все', 'Лесные', 'Садовые', 'Орехи', 'Грибы', 'Набор'];

const Categories: React.FC = () => {
    const dispatch = useDispatch();
    const { categoryId } = useSelector(selectFilter);

    const onChangeCategory = (i: number) => {
        dispatch(setCategoryId(i));
    };
    return (
        <div className="categories">
            <ul>
                {categories.map((categoryName, i) => (
                    <li
                        key={i}
                        onClick={() => onChangeCategory(i)}
                        className={categoryId === i ? 'active' : ''}>
                        {categoryName}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Categories;
