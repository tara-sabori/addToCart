import React from 'react';
import { Outlet, useParams } from 'react-router-dom';
import MainProducts from '../../components/products/MainProducts';
import Footer from '../../components/footer/Footer';

const ProductsPage = () => {
    const { id } = useParams();
    return (
    <>
        <div className='w-full px-5 lg:px-0 pt-20 lg:max-w-screen-md 2xl:max-w-screen-xl mx-auto'>
            {id ? <Outlet /> : <MainProducts />}
        </div>
        <Footer />
    </>
    );
}

export default ProductsPage;
