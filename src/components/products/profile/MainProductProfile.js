import React from 'react';
import { useSelector } from 'react-redux';
import AddToCartButton from '../../../ui/AddToCartButton';

const MainProductProfile = () => {
    const { productItem } = useSelector((state) => state.products);
    console.log(productItem);
    return (
        <div className='w-full sm:w-[500px] mx-auto space-y-5 p-5 md:px-0 '>
            <div className='w-[240px] h-[240px] sm:w-[340px] sm:h-[340px] rounded-md flex items-center justify-center mx-auto bg-secondary-100'>
                <img
                    src={productItem?.image}
                    alt={productItem?.title}
                    className='w-[200px] h-[200px] sm:w-[300px] sm:h-[300px]' />
            </div>
            <div className='space-y-4'>
                <h3>{productItem?.title}</h3>
                <div className='bg-orange-950 px-2 py-1 text-xs rounded-full w-fit'>
                    <span>{productItem?.category}</span>
                </div>
                <p className='text-justify'>description: {productItem?.description}</p>
                <div className='flex items-center justify-between'>
                    <span>$ {productItem?.price}</span>
                    <AddToCartButton product={productItem} />
                </div>
            </div>
        </div>
    );
}

export default MainProductProfile;
