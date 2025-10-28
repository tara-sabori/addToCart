import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchProductById } from '../../../redux/slices/products';
import MainProductProfile from '../../../components/products/profile/MainProductProfile';
import Loading from '../../../ui/Loading';
import MoveBack from '../../../ui/MoveBack';

const ProfileProduct = () => {
    const dispatch = useDispatch();
    const { productItem, loadingItem } = useSelector((state) => state.products);
    const { id } = useParams();
    useEffect(() => {
        dispatch(fetchProductById(id));
    }, [dispatch, id])
    return <div className='min-h-[80vh]'>
        <MoveBack />
        {
            loadingItem ? <Loading /> :
            !loadingItem && !productItem ?
            <div className='flex flex-col items-center justify-center gap-3 pt-5'>
                <span>not found</span>
                <img className='w-[300px]' src='/assets/images/product-not-found.png' alt='not-found'/>
            </div> :
            <MainProductProfile />
        }
    </div>
}

export default ProfileProduct;
