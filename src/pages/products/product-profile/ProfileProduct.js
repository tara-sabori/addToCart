import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchProductById } from '../../../redux/slices/products';
import MainProductProfile from '../../../components/products/profile/MainProductProfile';
import Loading from '../../../ui/Loading';

const ProfileProduct = () => {
    const dispatch = useDispatch();
    const { productItem, loadingItem } = useSelector((state) => state.products);
    const { id } = useParams();
    useEffect(() => {
        dispatch(fetchProductById(id));
    }, [dispatch, id])
    return <div className='min-h-[80vh]'>
        {
            loadingItem ? <Loading /> :
            !loadingItem && !productItem ?
            <p>not found</p> :
            <MainProductProfile />
        }
    </div>
}

export default ProfileProduct;
