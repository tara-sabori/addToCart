import { useSelector } from 'react-redux';
import CartDetails from '../../components/cart/CartDetails';
import MoveBack from '../../ui/MoveBack';

const Carts = () => {
    const { addedProducts } = useSelector((state) => state.cart);
    console.log(addedProducts);
    return <div className='min-h-screen pt-20 px-5 lg:px-0 w-full lg:max-w-screen-md 2xl:max-w-screen-xl mx-auto'>
        <MoveBack />
        {
            addedProducts?.length < 1 ? <div className='w-full flex items-center justify-center'>
            <img className='w-full md:w-1/2 h-[300px]' src='/assets/images/no-product-cart.png' alt='not found' />
        </div> : <CartDetails />
        }
    </div>
}

export default Carts;
