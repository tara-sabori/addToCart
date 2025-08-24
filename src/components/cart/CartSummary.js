import React from 'react';
import { PiCreditCard, PiPaypalLogo } from 'react-icons/pi';
import { useSelector } from 'react-redux';
import ButonIcon from '../../ui/ButonIcon';

const CartSummary = () => {
    const { totalPrice, addedToCart } = useSelector((state) => state.cart);
    return (
        <div className='space-y-3 w-full'>
            <div className='bg-[#D1D5DB] p-3 space-y-4 w-full md:w-[300px] rounded-md text-[#1c1b1b]'>
                <div className='border-b pb-3'>
                    <h3 className='font-semibold'>Summary Cart</h3>
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
            <div className='bg-[#D1D5DB] p-3 space-y-4 w-full md:w-[300px] rounded-md'>
                <h3 className='font-semibold text-[#1c1b1b] pb-3'>Payment Method</h3>
                <div className='flex items-center gap-4'>
                    <ButonIcon
                        title={'PayPal'}
                        icon={<PiPaypalLogo />}
                    />
                    <ButonIcon
                        title={'Credit Cart'}
                        icon={<PiCreditCard />}
                    />
                </div>
                <button className='border border-[#B8710E] text-[#B8710E] rounded-md w-full text-center p-1.5'>
                    Pay
                </button>
            </div>
        </div>
    );
}

export default CartSummary;
