import React from 'react';
import { Link } from 'react-router-dom';

const ThankYouPage = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
            <h1 className="text-5xl font-extrabold text-gray-800 mb-6 animate-fade-in animate-scale-up">
                Спасибо за покупку!
            </h1>
            <Link
                to="/"
                className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-600 transition duration-300 ease-in-out animate-fade-in animate-scale-up"
            >
                Вернуться на главную
            </Link>
        </div>
    );
};

export default ThankYouPage;
