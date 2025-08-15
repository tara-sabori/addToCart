import React from 'react';
import { Outlet, useParams } from 'react-router-dom';
import MainProducts from '../../components/products/MainProducts';

const ProductsPage = () => {
    const { id } = useParams();
    return (
        <div className='w-full px-5 lg:px-0 lg:max-w-screen-md 2xl:max-w-screen-xl mx-auto'>
            {id ? <Outlet /> : <MainProducts />}
        </div>
    );
}

export default ProductsPage;
