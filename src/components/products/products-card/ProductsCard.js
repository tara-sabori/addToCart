import React from 'react';
import { Link } from 'react-router-dom';
import AddToCartButton from '../../../ui/AddToCartButton';

const ProductsCard = ({ product , className }) => {
    return (
        <div className={`rounded-lg p-2.5 flex flex-col gap-3 ${className}`}>
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
                    <Link className='font-semibold text-xs' to={`/products/${product?.id}`}> 
                        Read More
                    </Link>
                </p>
            </div>
            {/* footer */}
            <div className='flex items-end justify-between'>
                <div className='flex flex-col gap-0.5'>
                    <span className='text-xs'>price</span>
                    <span className='text-base font-semibold'>$ {product?.price}</span>
                </div>
                <AddToCartButton product={product} />
            </div>
        </div>
    );
}

export default ProductsCard;
