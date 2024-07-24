import React from 'react';
import { Button } from 'antd';
import { Link } from 'react-router-dom';

const ProductList = ({ products }) => {
    return (
        <div className="flex gap-4 justify-center pt-10">
            {products.map(product => (
                <div key={product.id} className="border p-5 w-96 text-center">
                    <h3>{product.name}</h3>
                    <p>Цена: {product.priceRub} руб / {product.priceUsd} $</p>
                    <Link to={`/purchase/${product.id}`}>
                        <Button type="primary">Купить</Button>
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default ProductList;
