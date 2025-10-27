import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../redux/slices/products';
import ProductsCard from './products-card/ProductsCard';
import { useSearchParams } from 'react-router-dom';
import Paginate from '../../ui/Paginate';
import CategoryList from './category-list/CategoryList';
import Loading from '../../ui/Loading';
import SearchBox from './SearchBox';

const MainProducts = () => {
    const dispatch = useDispatch();
    const { products, loading } = useSelector((state) => state.products);

    const [searchParams] = useSearchParams();
    const category=searchParams.get("category") || "";

    useEffect(() => {
        const getProducts = () => {
            dispatch(fetchProducts());
        }
        getProducts();
    }, [dispatch])

    const search = searchParams.get('search') || "";
    console.log(search);
    const filterBySearch = search ? products?.filter(p => p?.title?.toString()?.toLocaleLowerCase()?.includes(search?.toString()?.toLocaleLowerCase())) : products;
    console.log(filterBySearch);
    const filterByCategory = category ? filterBySearch?.filter(p => p?.category.startsWith(category)) : filterBySearch;
    // console.log(products);

    
    const page = searchParams.get('page');
    const [currentPage, setCurrentPage] = useState(page || 1);
    const lastIndex = currentPage * 10;
    const firstIndex = lastIndex - 10;
    const productsList = filterByCategory?.slice(firstIndex, lastIndex);
    const npage = Math.ceil(filterByCategory?.length / 10);

    return (
        <div className='flex flex-col gap-4'>
            <div className='flex flex-col gap-8 md:flex-row md:justify-between md:items-center md:gap-0'>
                <SearchBox setCurrentPage={setCurrentPage} />
                <CategoryList
                setCurrentPage={setCurrentPage}
                />
            </div>
            <div className='min-h-[70vh]'>
                {
                    loading ? <Loading /> :
                      productsList?.length? <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2'>
                            {productsList?.map(product => <ProductsCard key={product?.id} product={product} />)}
                        </div>
                        : <p>not found</p>
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
