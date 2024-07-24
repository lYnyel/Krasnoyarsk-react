import React, { useState } from 'react';
import { Table, Select } from 'antd';
import { Link } from 'react-router-dom';
import moment from 'moment';

const { Option } = Select;

export const salesData = [
    { product: 'Product 1', date: '2024-07-24', amount: 1000, currency: 'rub' },
    { product: 'Product 1', date: '2024-07-22', amount: 130, currency: 'usd' },
    { product: 'Product 2', date: '2024-07-24', amount: 2000, currency: 'rub' },
    { product: 'Product 2', date: '2024-07-20', amount: 260, currency: 'usd' },
    { product: 'Product 1', date: '2024-07-20', amount: 500, currency: 'rub' },
    { product: 'Product 1', date: '2024-07-18', amount: 65, currency: 'usd' },
    { product: 'Product 3', date: '2024-07-23', amount: 1500, currency: 'rub' },
    { product: 'Product 3', date: '2024-07-24', amount: 200, currency: 'usd' },
];

const SalesReportPage = () => {
    const [productFilter, setProductFilter] = useState(null);
    const [dateRange, setDateRange] = useState(null);
    const [currencyFilter, setCurrencyFilter] = useState(null);

    const today = moment().startOf('day');
    const oneWeekAgo = moment().subtract(7, 'days').startOf('day');

    const filteredData = salesData.filter(sale => {
        const saleDate = moment(sale.date);
        return (!productFilter || productFilter === 'All' || sale.product === productFilter) &&
               (!dateRange || (
                   (dateRange === 'today' && saleDate.isSame(today, 'day')) ||
                   (dateRange === 'week' && saleDate.isBetween(oneWeekAgo, today, 'day', '[]'))
               )) &&
               (!currencyFilter || currencyFilter === 'all' || sale.currency === currencyFilter);
    });

    const columns = [
        { title: 'Продукт', dataIndex: 'product', key: 'product' },
        { title: 'Дата', dataIndex: 'date', key: 'date' },
        { title: 'Сумма', dataIndex: 'amount', key: 'amount' },
        { title: 'Валюта', dataIndex: 'currency', key: 'currency' },
    ];

    return (
        <div className="relative p-4">
            <Link
                to="/"
                className="absolute top-4 right-4 bg-blue-500 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-blue-600 transition duration-300 ease-in-out"
            >
                На главную
            </Link>
            <div className="filters pt-4">
                <Select
                    placeholder="Выберите продукт"
                    onChange={value => setProductFilter(value)}
                    style={{ width: 200, marginRight: 10 }}
                >
                    <Option value="All">Все продукты</Option>
                    <Option value="Product 1">Product 1</Option>
                    <Option value="Product 2">Product 2</Option>
                    <Option value="Product 3">Product 3</Option>
                </Select>
                <Select
                    placeholder="Выберите диапазон даты"
                    onChange={value => setDateRange(value)}
                    style={{ width: 200, marginRight: 10 }}
                >
                    <Option value="today">Сегодня</Option>
                    <Option value="week">За неделю</Option>
                </Select>
                <Select
                    placeholder="Выберите валюту"
                    onChange={value => setCurrencyFilter(value)}
                    style={{ width: 200 }}
                >
                    <Option value="all">Все валюты</Option>
                    <Option value="rub">Рубль</Option>
                    <Option value="usd">Доллар</Option>
                </Select>
            </div>
            <Table dataSource={filteredData} columns={columns} />
        </div>
    );
};

export default SalesReportPage;
