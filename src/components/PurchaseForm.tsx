import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Form, Input, Button } from 'antd';
import { products } from '../data/products';

const PurchaseForm = () => {
    const [form] = Form.useForm();
    const navigate = useNavigate();
    const { productId } = useParams();
    const product = products.find(p => p.id === parseInt(productId));

    const onFinish = (values) => {
        console.log('Success:', values);
        navigate('/thank-you');
    };

    return (
        <div>
            <h2 className='text-center pt-4'>Покупка {product.name}</h2>
            <Form className='w-[400px] mx-auto' form={form} layout="vertical" onFinish={onFinish}>
                <Form.Item name="name" label="Имя" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
                <Form.Item name="email" label="Email" rules={[{ required: true, type: 'email' }]}>
                    <Input />
                </Form.Item>
                <Form.Item name="address" label="Адрес" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">Купить</Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default PurchaseForm;
