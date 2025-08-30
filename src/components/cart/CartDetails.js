import React from 'react';
import CartSummary from './CartSummary';
import AddToCartButton from '../../ui/AddToCartButton';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const CartDetails = () => {
    const { addedProducts } = useSelector((state) => state.cart);
    return (
        <div className='p-5 flex flex-col gap-4 md:flex-row md:gap-8 items-start justify-center'>
            <div className='p-3 pt-0 md:w-[500px] space-y-8'>
                {addedProducts?.length > 0 && addedProducts?.map(p => <div
                    className='flex items-center gap-3 border-b pb-2.5 border-secondary-300'
                    key={p?.id}
                >
                    <div className='w-[150px] h-[150px]'>
                        <img className='w-[150px] h-[150px] rounded-md' src={p?.image} alt={p?.title} />
                    </div>
                    <div className='space-y-7 w-[70%]'>
                        <Link to={`/products/${p?.id}`} title={p?.title} className='line-clamp-2 hover:text-orange-950/90'>{p?.title}</Link>
                        <div className='flex items-center justify-between'>
                            <div>price: ${p?.totalPrice} </div>
                            <AddToCartButton product={p} />
                        </div>
                    </div>
                </div>)}
            </div>
            <CartSummary />
        </div>
    );
}

export default CartDetails;
