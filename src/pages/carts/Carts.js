import React from 'react';
import { useSelector } from 'react-redux';
import CartDetails from '../../components/cart/CartDetails';

const Carts = () => {
    const { addedProducts } = useSelector((state) => state.cart);
    console.log(addedProducts);
    return (
        addedProducts?.length < 1 ? <div className='w-full flex items-center justify-center pt-20'>
            <img className='w-full md:w-1/2 h-[300px]' src='/assets/images/no-product-cart.png' alt='not found' />
        </div> : <CartDetails />

    );
}

export default Carts;
