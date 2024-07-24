import React from 'react';
import { products } from '../data/products';
import ProductList from '../components/ProductList';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <div className="relative">
            <Link
                className="absolute top-4 right-4 bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-600"
                to={"sales-report"}
            >
                Отчет
            </Link>
            <div className='flex items-center justify-center gap-4'>
                <h1 className='font-bold text-center pt-4'>Список продуктов</h1>
            </div>
            <ProductList products={products} />
        </div>
    );
};

export default HomePage;
