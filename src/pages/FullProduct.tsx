import React from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const FullProduct: React.FC = () => {
    const [product, setProduct] = React.useState<{
        imageUrl: string;
        title: string;
        price: number;
    }>();
    const { id } = useParams();

    React.useEffect(() => {
        async function fetchProduct() {
            try {
                const { data } = await axios.get(
                    'https://62a77f6797b6156bff8f6a1e.mockapi.io/items/' + id,
                );
                setProduct(data);
            } catch (error) {
                alert('Ошибка');
            }
        }
        fetchProduct();
    }, []);

    if (!product) {
        return <>Загрузка...</>;
    }

    return (
        <div className="container">
            <div>
                <img src={product.imageUrl} alt="" />
                <h2>{product.title}</h2>
                <h4>{product.price}</h4>
            </div>
        </div>
    );
};

export default FullProduct;
