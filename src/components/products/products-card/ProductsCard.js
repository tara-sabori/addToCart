import React from 'react';
import { Link } from 'react-router-dom';
import AddToCartButton from '../../../ui/AddToCartButton';

const ProductsCard = ({ product }) => {
    return (
        <div className='rounded-lg p-2.5 flex flex-col gap-3'>
            {/* header */}
            <div className='w-full bg-secondary-200 text-center py-1.5 rounded-md'>
                <img src={product?.image || '/assets/images/not-found.jpg'} alt={product?.title} className='rounded-lg w-[200px] h-[200px] md:w-[180px] md:h-[180px] mx-auto' />
            </div>
            {/* main */}
            <div className='space-y-1.5'>
                <h3 className='font-semibold text-sm truncate'>{product?.title}</h3>
                <p className='text-xs flex items-center gap-1'>
                    {
                        product?.description?.length > 15
                            ? product?.description?.slice(0, 15) + '...'
                            : product?.description
                    }
                    <Link className='font-semibold text-xs' to={`/products/${product?.id}`}>Read More</Link>
                </p>
                <div className='rounded-full flex text-center text-sm pb-1 px-3 bg-secondary-400 border border-secondary-300 w-fit'>
                    {product?.category?.slug}
                </div>
            </div>
            {/* footer */}
            <div className='flex items-end justify-between'>
                <div className='flex flex-col gap-0.5'>
                    <span className='text-xs'>price</span>
                    <span className='text-base font-semibold'>$ {product?.price}</span>
                </div>
                {/* <Link className='bg-orange-950 p-1 px-2 rounded-lg text-secondary-100' to={`/products/${product?.id}`}>Add To Cart</Link> */}
                <AddToCartButton product={product} />
            </div>
        </div>
    );
}

export default ProductsCard;
