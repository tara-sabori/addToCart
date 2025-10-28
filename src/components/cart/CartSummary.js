import React, { useState } from 'react';
import { PiCreditCard, PiPaypalLogo } from 'react-icons/pi';
import { useDispatch, useSelector } from 'react-redux';
import ButonIcon from '../../ui/ButonIcon';
import { payProductsHandle } from '../../redux/slices/cart';

const CartSummary = () => {
    const dispatch = useDispatch();
    const { totalPrice, addedToCart } = useSelector((state) => state.cart);
    const [methodSelected, setMethodSelected] = useState('');
    return (
        <div className='space-y-3 w-full md:w-fit'>
            <div className='bg-secondary-100 p-3 space-y-4 w-full md:w-[300px] rounded-md text-secondary-900 shadow-md'>
                <div className='border-b border-orange-950 pb-3'>
                    <h3 className='font-semibold text-orange-950'>Summary Cart</h3>
                </div>
                <div className='flex items-center justify-between'>
                    <span>Items:</span>
                    <span>{addedToCart}</span>
                </div>
                <div className='flex items-center justify-between'>
                    <span>totalPrice:</span>
                    <span>${totalPrice}</span>
                </div>
            </div>
            <div className='bg-secondary-100 p-3 space-y-4 w-full md:w-[300px] rounded-md shadow-md'>
                <h3 className='font-semibold text-secondary-900 pb-3'>Payment Method</h3>
                <div className='flex items-center gap-4'>
                    <ButonIcon
                        onClick={() => setMethodSelected('PayPal')}
                        title={'PayPal'}
                        icon={<PiPaypalLogo />}
                    />
                    <ButonIcon
                        onClick={() => setMethodSelected('Credit Cart')}
                        title={'Credit Cart'}
                        icon={<PiCreditCard />}
                    />
                </div>
                <button
                    disabled={!methodSelected}
                    onClick={() => dispatch(payProductsHandle())}
                    className='border border-orange-950/80 disabled:text-orange-950 text-white disabled:bg-secondary-100 bg-orange-950/80 rounded-md w-full text-center p-1.5'>
                    Pay
                </button>
            </div>
        </div>
    );
}

export default CartSummary;
