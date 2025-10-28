import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, decreaseProduct, increaseProduct } from '../redux/slices/cart';
import { PiMinusBold, PiPlusBold } from 'react-icons/pi';

const AddToCartButton = ({ product }) => {
    const dispatch = useDispatch();
    const { addedProducts } = useSelector((state) => state.cart);
    const productInfo = addedProducts?.find(p => p?.id === product?.id);
    return !productInfo?.id ?
        <button
            className='bg-orange-950 p-1 px-2 rounded-lg text-white'
            onClick={() => dispatch(addToCart(product))}>
            add to cart
        </button>
        : <div className='flex items-center gap-3'>
            <button
                onClick={() => dispatch(decreaseProduct(productInfo))}
                className='bg-orange-950 flex items-center justify-center text-lg rounded-lg text-white w-6 h-6'
            >
                <PiMinusBold />
            </button>
            <span>{productInfo?.qty}</span>
            <button
                onClick={() => dispatch(increaseProduct(productInfo))}
                className='bg-orange-950 flex items-center justify-center text-lg rounded-lg text-white w-6 h-6'>
                <PiPlusBold />
            </button>
        </div>
}

export default AddToCartButton;
