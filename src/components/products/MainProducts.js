import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../redux/slices/products';
import ProductsCard from './products-card/ProductsCard';
import { useSearchParams } from 'react-router-dom';
import Paginate from '../../ui/Paginate';
import CategoryList from './category-list/CategoryList';

const MainProducts = () => {
    const dispatch = useDispatch();
    const { products, loading, error } = useSelector((state) => state.products);

    const [searchParams] = useSearchParams();

    useEffect(() => {
        const getProducts = () => {
            dispatch(fetchProducts());
        }
        getProducts();
    }, [dispatch])

    const [categorySelected, setCategorySelected] = useState('');
    const filterByCategory = categorySelected ? products?.filter(p => p?.category === categorySelected?.category) : products;
    console.log(products);

    const page = searchParams.get('page');
    const [currentPage, setCurrentPage] = useState(page || 1);
    const lastIndex = currentPage * 10;
    const firstIndex = lastIndex - 10;
    const productsList = filterByCategory?.slice(firstIndex, lastIndex);
    const npage = Math.ceil(filterByCategory?.length / 10);

    return (
        <div className='flex flex-col gap-3'>
            <CategoryList
                categorySelected={categorySelected}
                setCategorySelected={setCategorySelected}
                setCurrentPage={setCurrentPage}
                />
            <div>
                {
                    loading ? <span>loading...</span> :
                        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2'>
                            {productsList?.map(product => <ProductsCard key={product?.id} product={product} />)}
                        </div>
                }
            </div>
            {
                !loading && productsList?.length > 0 && <Paginate
                    pageCount={npage}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                />
            }
        </div>
    );
}

export default MainProducts;
